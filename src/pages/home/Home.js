import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>Welcome to the Smart Construction!</div>
      </div>
    </div>
  );
};
