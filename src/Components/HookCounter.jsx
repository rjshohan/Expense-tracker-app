import React, { useState } from 'react'

const HookCounter = () => {
        // const [items,setItems]= useState([]);
        // const addItem = ()=>{
        //     setItems(
        //         [ ...items,
        //         {
        //             id:items.length,
        //             value:Math.floor(Math.random()*10)
        //         }]
        //     )
        // }

        const [items,setItems]=useState([{
            todoName:"React JS",
            todoId:1,
            isComplete:false
        },
        {
            todoName:"Javascript",
            todoId:2,
            isComplete:false
        }
    ]);
        const [todo,setTodo]= useState("")
        const handleInputChange = (e)=>{
            setTodo(e.target.value)
        }
        const addItems = ()=>{
            if(todo.trim() ===""){
                setItems(task=>[...task,todo]);
                setTodo("")
            }
        }
    
  return (
    <div>
        <div>
           
            <input type="text" placeholder='type your task..' value={todo} onChange={handleInputChange} />
            <button onClick={addItems}>Add button</button>
        </div>
       
        <ul>
            {items.map((item,index)=>{
                return(
                    <li style={{display:'flex'}}>
                        <h2><span>{item.todoName}</span></h2>
                        <button>Delete</button>
                    </li>
                )
            })}
        </ul>

        {/* <button onClick={addItem}>Add a Number</button>
        <ul>
            {items.map((item,index)=>{
                return <li>{item.value}</li>
            })}
        </ul> */}
    </div>
  )
}

export default HookCounter