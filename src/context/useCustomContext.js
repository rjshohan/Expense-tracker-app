import { useContext } from "react"
import expenseContext from "./context"

const useCustomContext = ()=>{
    const context = useContext(expenseContext)
    return context;
}
export default useCustomContext;