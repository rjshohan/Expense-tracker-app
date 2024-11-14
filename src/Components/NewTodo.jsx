import React, { useState } from 'react'

const TodoJob = () => {
   const [list,setList] = useState([{
    todoName:"Practice Js",
    todoId:1,
    isComplete:false
},
{
    todoName:"Practice React",
    todoId:2,
    isComplete:true
}]);
   const [todo,setTodo] = useState("");
   const [editTodo,setEditTodo] = useState(false)

    const inputHandleChange = (event)=>{
      setTodo(event.target.value)
    }
    const addTask =(e)=>{
      e?.preventDefault()
      if(todo.trim() !==""){
        setList(task=> [...task,todo]);
        setTodo("")
      }
    }
    const deleteTask = (index)=>{
      const updateArray = list.filter((_,i)=> i !==index);
      setList(updateArray)
    }
    const moveTaskUp = (index)=>{
      if(index>0){
        const updateTask = [...list];
        [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]];
        setList(updateTask)
      }
    }
    const moveTaskDown = (index)=>{
      if(index< list.length-1){
        const updatedTask = [...list];
        [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
        setList(updatedTask)
      }
    }
const updateHandler = (e) =>{
  e?.preventDefault();

  let xList = [...list];
  xList[editTodo.index] = todo;
  setList(xList)
  setEditTodo(null)
  setTodo("")
}
const onEditHandler =(i)=>{
  setEditTodo({
    index:i,
    isEdit:true
  })
  setTodo(list[i])
}

console.log(list)
  return (
   <div>
       <h1>Todo List</h1>
       <form onSubmit={editTodo?updateHandler:addTask}>
       <div>
         <input type="text" placeholder='Type your task...' value={todo} onChange={inputHandleChange} />
         <button onClick={editTodo?updateHandler:addTask} type='submit'>{
          editTodo?"Update":"Add"}</button>
       </div>
       </form>
       <ol>
        {list.map((item,index)=>
          <li key={item.index}>
           <h1><b> <span>{item.todoName}</span></b></h1>
            <button onClick={()=> deleteTask(index)}>Delete</button>
            <button onClick={()=> moveTaskUp(index)}>Up</button>
            <button onClick={()=> moveTaskDown(index)}>Down</button>
            <button onClick={()=> onEditHandler(index)}>Edit</button>
          </li>
        )}
       </ol>
   </div>
  )
}

export default TodoJob