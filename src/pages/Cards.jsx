import React from 'react'
import './cards.css'
const Cards = () => {
  return (
    <div>
        <ul className="cards">
            <li>
                <i className='bx bx-money'></i>
                <span className='info'>
                    <h3><span>$</span><span className='budget_card'>7,232</span></h3>
                    <p>budget</p>
                </span>
            </li>
            <li>
                <i className='bx bx-credit-card'></i>
                <span className='info'>
                    <h3><span>$</span><span className='expense_card'>7,343</span></h3>
                    <p>Expense</p>
                </span>
            </li>
            <li>
                <i className='bx bx-dollar'></i>
                <span className="info">
                    <h3><span>$</span><span className='balance_card'>4,334</span></h3>
                    <p>Balance</p>
                </span>
            </li>
        </ul>
    </div>
  )
}

export default Cards