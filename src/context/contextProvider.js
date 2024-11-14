import expenseContext from "./context";
const ContextProvider = ({ children }) => {
  //state;;;;

  return (
    <expenseContext.Provider value={{}}>{children}</expenseContext.Provider>
  );
};
export default ContextProvider;
