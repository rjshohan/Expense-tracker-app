import NewTodo from './Components/NewTodo'
import HookCounter from './Components/HookCounter';
import Todo from './Components/Todo';
import A from './Components/A';
// import Navbar from './pages/Navbar';
import Navbar from './component/Navbar'
import Cards from './pages/Cards';
import Table from './pages/Table';
import Transaction from './pages/transactionLog/components/Transaction';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Transaction/>
      <Navbar/>
      <Cards/>
      <Table/>
      
      {/* <A/> */}
      {/* <Todo/> */}
      {/* <HookCounter/> */}
      {/* <NewTodo/> */}
    </div>
  );
}

export default App;
