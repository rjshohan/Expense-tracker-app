import { createContext, useContext, useState } from "react";

export const MyContext = createContext(null);


const ContextProvider = ({ children }) => {
  const [count, setcount] = useState(100);
  const [todoList,setTodoList] = useState(["todo1","todo2"])

  return (
    <MyContext.Provider
      value={{
        count,
        setcount,
        todoList,
        setTodoList
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useCounterContext = () => {

  const context = useContext(MyContext);

//   if (!context) {
//     return;
//   }
  return context;
};

export default ContextProvider;
