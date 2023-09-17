import "./Sidebar.scss";
import UploadIcon from '@mui/icons-material/Upload';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Smart Construction</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to={"/upload"}>
              <UploadIcon className="icon" />
              <span>Upload</span>
            </Link>
          </li>
          <li>
            <Link to={"/stats"}>
              <AssessmentIcon className="icon" />
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <ReceiptIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <TuneIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">OTHER</p>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <ChatBubbleOutlineIcon className="icon" />
            <span>Message</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
