import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Login from './pages/login/Login.tsx';
import Register from './pages/register/Register.tsx';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <div>Hello world!</div>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />


    
  </React.StrictMode>,
)
