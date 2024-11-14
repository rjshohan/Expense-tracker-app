import React from 'react'
import './dashboard.css'
import Card from './components/Card'
import Navbar from '../../component/Navbar'
import { generatePath } from 'react-router-dom'
import { Action } from '@remix-run/router'
import { type } from '@testing-library/user-event/dist/type'


const Dashboard = () => {
        const data = [
          {
            sl:1,
            transactionDate:"22-04-2024",
            type:"Income",
            category:"Salary",
            amount:30000,
            Action:"edit"
          },
          {
            sl:2,
            transactionDate:"30-05-2024",
            type:"Expense",
            category:"Foods",
            amount:4000,
            Action:"delete"
          },
          {
            sl:3,
            transactionDate:"20-06-2024",
            type:"Expense",
            category:"Shopping",
            amount:8000,
            Action:"edit"
          }
        ]
  return (
    <div>
        <Navbar/>

        <ul className="cards">
        <Card amount={20000} title="Opening Balance"/>
        <Card amount={20000} title="Income Balance"/>
        <Card amount={20000} title="Expense Balance"/>
        <Card amount={20000} title="Current Balance"/>
        
        </ul>
       
       {/* <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Transaction Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          data.map((item)=> (
            <tr>
              <td> {item.sl} </td>
              <td> {item.transactionDate} </td>
              <td> {item.type} </td>
              <td> {item.category} </td>
              <td> {item.amount} </td>
              <td> {item.action} </td>
            </tr>
          ))
         }
        </tbody>
       </table> */}

    </div>
  )
}

export default Dashboard