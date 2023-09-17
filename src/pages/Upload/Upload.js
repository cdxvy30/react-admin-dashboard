import "./Upload.scss";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import { batchPredict } from "../../handlers/batchPredict";

export const Upload = () => {
  const [fileList, setFileList] = useState([]);
  const [descriptionList, setDescriptionList] = useState([]);
  const files = fileList ? [...fileList] : [];

  useEffect(() => {
    console.log('Updated file list', fileList);
    setDescriptionList(files.map(file => ({ name: file.name, description: 'Predicting...' })));
    console.log('Description results', descriptionList);
  }, [fileList])

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const handlePredictClick = async () => {
    if (!fileList) {
      return;
    }

    const data = new FormData();
    files.forEach((file) => {
      data.append(`file`, file, file.name);
    });

    const results = await batchPredict({ dataList: data });
    console.log(results);
    setDescriptionList(results);
  };

  const handleClearClick = () => {
    setFileList([]);
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Stack spacing={2} direction="row" className="buttonGroup">
          <Button component="label" variant="contained">
            Choose Images
            <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple/>
          </Button>
          <Button variant="contained" color="error" onClick={handleClearClick}>
            Clear
          </Button>
          <Button variant="contained" color="success" startIcon={<CloudUploadIcon />}>
            Save
          </Button>
        </Stack>
        <div className="listContainer">
          <div className="listTitle">Issue & Law Prediction Results</div>
          <div>
            {fileList.length > 0 ? (
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">Image Name</TableCell>
                      <TableCell className="tableCell">Image</TableCell>
                      <TableCell className="tableCell">Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {files.map((row, index) => (
                      <TableRow key={row.id}>
                        <TableCell className="tableCell">{row.name}</TableCell>
                        <TableCell className="tableCell">
                          <div className="cellWrapper">
                            <img src={URL.createObjectURL(row)} alt={'img'} width={200}/>
                          </div>
                        </TableCell>
                        <TableCell className="tableCell">
                          <TableRow>
                            Caption Type: {descriptionList[index]?.caption || 'Awaiting prediction'}
                          </TableRow>
                          <TableRow>
                            Caption: {descriptionList[index]?.caption_type || 'Awaiting prediction'}
                          </TableRow>
                          <TableRow>
                            Issue Type: {descriptionList[index]?.issue_type || 'Awaiting prediction'}
                          </TableRow>
                          <TableRow>
                            Violation Type: {descriptionList[index]?.violation_type || 'Awaiting prediction'}
                          </TableRow>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <div className="tableCell">Choose images for prediction...</div>
            )}
          </div>
        </div>
        <Stack spacing={2} direction="row" className="buttonGroup">
          <Button variant="contained" onClick={handlePredictClick}>Predict</Button>
        </Stack>
      </div>
    </div>
  );
};
