import React from 'react'
import './cards.css'

const Card = ({title,amount}) => {
  return (
            <li className='cards'>
                <i className='bx bx-money'></i>
                <span className='info'>
                    <h3><span>$</span><span className='budget_card'>{amount}</span></h3>
                    <p>{title}</p>
                </span>
            </li>
          
  )
}

export default Card