import React from 'react'
import "./table.css"

const Table = () => {
  return (
    <div className='table_content'>
         <h3>Budget Details</h3>   
         <div className="table_data">
          <ul className='table_tr_content'>
            <li>1</li>
            <li>Gaming Mouse</li>
            <li><span>$</span>600</li>
            <li className='table_btn'>
              <button type='button' className='btn_edit'>Edit</button>
              <button type='button' className='btn_delete'>Delete</button>
            </li>
          </ul>
         </div>
    </div>
  )
}

export default Table