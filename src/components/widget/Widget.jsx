import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 2342;
  const diff = 20;

  switch (type) {
    case "Daily Transaction Volume":
      data = {
        title: "Daily Transaction Volume",
        isMoney: true,
        
      };
      break;
    case "Daily Transaction Value":
      data = {
        title: "Daily Transaction Value",
         isMoney: true,
        // link: "View all orders",
        // icon: (
        //   <ShoppingCartOutlinedIcon
        //     className="icon"
        //     style={{
        //       backgroundColor: "rgba(218, 165, 32, 0.2)",
        //       color: "goldenrod",
        //     }}
        //   />
        // ),
      };
      break;
    case "Total Transaction Volume":
      data = {
         title: "Total Transaction Volume",
         isMoney: true,
        // link: "View net earnings",
        // icon: (
        //   <MonetizationOnOutlinedIcon
        //     className="icon"
        //     style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        //   />
        // ),
      };
      break;
    case "Total Transaction Value":
      data = {
        title: "Total Transaction Value",
         isMoney: true,
        // link: "See details",
        // icon: (
        //   <AccountBalanceWalletOutlinedIcon
        //     className="icon"
        //     style={{
        //       backgroundColor: "rgba(128, 0, 128, 0.2)",
        //       color: "purple",
        //     }}
        //   />
        // ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₦"} {amount}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
