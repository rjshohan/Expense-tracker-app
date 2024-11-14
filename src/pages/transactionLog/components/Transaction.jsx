import React from 'react'
import { NavLink } from 'react-router-dom'

const Transaction = () => {
    
  return (
    <div>
        <div>
            <NavLink to={`/addTransaction`}><h2>Add New</h2></NavLink>
        </div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shohan</td>
                    <td>Shohag</td>
                    <td>Sobuj</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transaction