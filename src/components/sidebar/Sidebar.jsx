import "./sidebar.scss";
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TransMonitor</span>
        </Link>
      </div>
     
      <div className="general">
        <p className="generalinvoice">GENERAL INVOICE</p>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            < SpeedOutlinedIcon className="icon" />
            <span active>Overview</span>
          </li>
          <p className="title">Payments</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Payments</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span> Reconcilled Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span> Un-Reconcilled Products</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Manual Settlement</span>
          </li>
          <p className="title">Orders</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>All Orders</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Pending Orders</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Reconcilled Orders</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Marchant Profile</span>
          </li>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          {/* <p className="title">USER</p> */}
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          {/* <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
