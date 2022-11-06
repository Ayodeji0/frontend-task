import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './widgetHeading.scss'

function WidgetHeading() {
  return (
    <div>
        <h1 className='widgetshowpayment'>Payment</h1>
        <div className='widgetContainer'>
        <div className='widgetshow'>
          <div className='widgetshowing'>Showing</div>
          <div className='arrowspan'><span>20</span> 
          <KeyboardArrowDownIcon/>
          </div>
        <div>
        <div>out of 500 payments
        </div>
        </div>
        </div>
        <div className='search'>
        <SearchOutlinedIcon />
       <input type="text" placeholder="Search..." />
        </div>
        <div> 
          <form  className='widgetHeadshow'>
 <label for="show">Show</label>
 <select id="show"classname="show" >
 <option value="volvo">All</option>
 <option value="saab">Unreconcilled</option>
 <option value="fiat">Reconcilled</option>
 <option value="audi">Settled</option>
 <option value="audi">UnSettled</option>
 </select>
 </form>
 </div>      
        </div>
    </div>
  )
}

export default WidgetHeading 







// {/* <div>
// <h1>payment</h1>
// </div>
// <div>
// <div className="listTitle">
//   <div className="titlesubtitle">
//     <p></p>
// <p>20</p>
// <KeyboardArrowDownIcon/>
// <p>Out of 500 payments</p>
//   </div>
// <div className="search">

// </div>
// <div >

// </div>
// </div>


// </div> */}

