import React from 'react'
import Navbar from '../../component/Navbar'
import { NavLink } from 'react-router-dom'
import Tables from '../Tables'


const Transaction = () => {
  return (
    <div>
        <Navbar/>
        <div style={{padding:"20px",margin:"10px"}}>
           <div  style={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
           <h2>Transaction Log</h2>
        <div>
            <NavLink  style={{textDecoration:"none",color:"black",}} to={`/transaction/addnew`}><h2>Add New</h2></NavLink>
        </div>
           </div>
        <Tables/>
    </div>
    </div>
  )
}

export default Transaction