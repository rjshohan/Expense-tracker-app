import React from 'react'
import './tables.css'
const Tables = () => {
    const data = [
        {
            id:1,
            customerName:"Shohan",
            location:"uttarkhan",
            Date: "22-04-24",
            amount:23000,
            status:"paid"
        },
        {
            id:2,
            customerName:"Polash",
            location:"uttarkhan",
            Date: "04-05-24",
            amount:13000,
            status:"paid"
        }, {
            id:3,
            customerName:"Mizan",
            location:"uttarkhan",
            Date: "22-01-23",
            amount:20000,
            status:"paid"
        }, {
            id:4,
            customerName:"Sobuj",
            location:"uttarkhan",
            Date: "12-07-24",
            amount:30000,
            status:"due"
        }, {
            id:5,
            customerName:"Joshim",
            location:"uttarkhan",
            Date: "03-09-24",
            amount:27000,
            status:"due"
        },
    ]
  return (
    <div>
        <table className='body'>
            <thead className='table_head'>
                <tr className='table_row'>
                    <th>Sl No.</th>
                    <th>Customer Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody className='table_body'>
                {data.map((item)=> (
                    <tr>
                        <td> {item.id} </td>
                        <td> {item.customerName} </td>
                        <td> {item.location} </td>
                        <td> {item.Date} </td>
                        <td> <strong>{item.amount}</strong> </td>
                        <td> {item.status} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Tables