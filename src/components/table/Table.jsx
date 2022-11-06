import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      transactionno: 1234567890,
      itemtype: "Apple Mac Book 15” 250 SSD 12GB",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: '$73430',
      time: "12:30",
      status: "Reconcilled",
    },
    {
      transactionno:1234567890,
      itemtype: "Apple Mac Book 15” 250 SSD 12GB",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: '$73430',
      time: "12:30",
      status: "Pending",
    },
    {
      transactionno: 1234567890,
      itemtype: "Apple Mac Book 15” 250 SSD 12GB",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: '$73430',
      time: "12:30",
      status: "Unreconcilled",
    },
    {
      transactionno: 1234567890,
      itemtype: "Apple Mac Book 15” 250 SSD 12GB",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: '$73430',
      time: "12:30",
      status: "Unreconcilled",
    },
    {
      transactionno: 1234567890,
      itemtype: "Apple Mac Book 15” 250 SSD 12GB",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: '$73430',
      time: "12:30",
      status: "Reconcilled",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRoll">
            <TableCell className="tableCell">Item Type</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Transaction No</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.price}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                <img src={row.img} alt='img' className="image"/>
                {row.itemtype}
                </div>
                </TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="cellWrapper">{row.transactionno}</TableCell>
              <TableCell className="tableCell">{row.time}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
