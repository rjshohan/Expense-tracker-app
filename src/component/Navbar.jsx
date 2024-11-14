import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav_design'>
        <div className='logo'><h1>Expense Tracker</h1></div>
    
        <nav className='nav'>
            {/* <div><h2>Dashboard</h2></div>
            <div><h2>Transaction</h2></div> */}
            <ul style={{display:"flex",gap:"120px",listStyle:"none",textDecoration:"none",fontSize:"22px" }}>
            <li >
              <NavLink style={{textDecoration:"none",color:"black",}} to={`/`}><h1>Dashboard</h1></NavLink>
            </li>
            <li>
              <NavLink style={{textDecoration:"none",color:"black",}}to={`/transaction`}><h1>Transaction</h1></NavLink>
            </li>
          </ul>
        </nav>
        
        
    </div>
  )
}

export default Navbar