import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Transaction from './pages/transactionLog/Transaction';
import AddTransaction from './pages/transactionLog/components/AddTransaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/transaction/addnew",
    element: <AddTransaction />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


