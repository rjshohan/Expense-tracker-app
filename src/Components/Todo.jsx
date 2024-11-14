import React, { useState } from "react";
// import { useCounterContext } from './context'

const Todo = () => {
  // const {todoList,count} = useCounterContext()
  // console.log("todoList",todoList)

  let [list, setList] = useState([]);
  let [item, setItem] = useState("");
  const AddTolist = () => {
    // list.push(item);
    // setList([...list]);
    const todoObj = {
      id: Math.random() * 1000,
      todoTitle: item,
    };
    setList([todoObj, ...list]);

    setItem("");
  };

  const removeHandler = (id) => {
    const updatedList = list.filter((item)=>item?.id !==id);
    setList(updatedList)

    // const updatedList = list?.map((item) => {
    //     if (id === item?.id) {
    //     return item;
    //   }
    //   return item;
    console.log(updatedList);
    };

    
  

  // console.log(list)
  return (
    <div>
      {/* <h1>{list.length}</h1> */}
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="add item here"
        value={item}
      />
      <button onClick={AddTolist}>add</button>

      {list?.map((item) => (
        <div>
          {item?.todoTitle}{" "}
          <span
          onClick={removeHandler}
            // onClick={(e) => {
            //   e?.stopPropagation();
            //   removeHandler(item?.id);
            // }}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default Todo;
