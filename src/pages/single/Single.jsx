import { Sidebar } from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp" 
                alt="" 
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Gojo</h1>
                <div className="detailItem">
                  <sapn className="itemKey">Email:</sapn>
                  <span className="itemValue">gojo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Phone:</sapn>
                  <span className="itemValue">+886 923 767 589</span>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Address:</sapn>
                  <span className="itemValue">Tokyo</span>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Country:</sapn>
                  <span className="itemValue">Japan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;