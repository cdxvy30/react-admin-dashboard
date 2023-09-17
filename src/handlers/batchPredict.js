import { PRED_URL } from "../configs/config";
import axios from "axios";

export const batchPredict = async ({ dataList }) => {
  // dataList may contain large data
  return await axios({
    method: 'post',
    url: `${PRED_URL}/batch/predict`,
    data: dataList,
  })
    .then((res) => res.data)
    .catch((err) => console.error(err))
}
