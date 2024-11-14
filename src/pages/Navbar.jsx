import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    
    <div className='container'>
      <h2>Expense Tracker </h2>                                                 
      <div className="error_message">
        <p>Please Enter Expense Amount | More than 0</p>
      </div>
      
      <div className="budget_content">
        <div className="ur_budget">
          <form>
            <label htmlFor="budget" >Your budget</label>
            <input type="text" placeholder='Enter Your Budget' className='budget_input' />
            <button className='btn' id='btn_budget'>Calculate</button>
          </form>
        </div>
        <div className="ur_expense">
          <form>
            <label htmlFor="expense">Expense Details</label>
            <input type="text" placeholder='Enter Your Expense' className='expense_input' />
            <input type="text" placeholder='Enter Your Amount' className='amount_input' />
            <button className='btn' id='btn_expense'>Add Expense</button>
          </form>
        </div>
      </div>

    </div>
   
  )
}
export default Navbar