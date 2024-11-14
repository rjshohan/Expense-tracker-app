import React from "react";
import './addTransaction.css'
import Navbar from "../../../component/Navbar";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Navbar />
      
       <div className="container">
       
        <h1 >
        ADD NEW TRANSACTION
      </h1>

      <button style={{cursor:"pointer",marginTop:"20px",fontSize:"20px"}}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>

      <form className="form_container">
        
       
        <label className="label">Date</label>
        <input className="same" type="date"/>
        
        <label className="label">Type</label>
        <select className="same">
          <option value="first">Expense</option>
          <option value="second">Income</option>
        </select>
        
        <label className="label">Category</label>
        <select className="same">
          <option value="one">Salary</option>
          <option value="two">Foods</option>
          <option value="three">Books</option>
          <option value="four">Shopping</option>
          <option value="five">Transport</option>
        </select>
       
        <label className="label">Amount</label>
        <input type="number" className="same" />
      
          <button style={{width:"60px",height:"30px",marginTop:"10px",right:"0"}}>Save </button>
      </form>
       </div>
    </div>
  );
};

export default AddTransaction;
