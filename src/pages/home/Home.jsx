import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WidgetHeading from "../../components/WidgetHeading/WidgetHeading";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Daily Transaction Volume" />
          <Widget type="Daily Transaction Value" />
          <Widget type="Total Transaction Volume" />
          <Widget type="Total Transaction Value" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          <Featured />
        </div>
        <div className="listContainer">
          <WidgetHeading/>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
