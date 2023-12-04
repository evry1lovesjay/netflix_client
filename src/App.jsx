// import { useState } from 'react'

import './App.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Watch from './pages/watch/Watch'
import Login from './pages/login/Login';
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {

  const Layout = () =>{
    return (
      <div className="app">
          <Navbar/>
          <Outlet/>
      </div>
    )
  }

  const user = JSON.parse(localStorage.getItem("currentUser"))

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: user ? <Home/> : <Navigate to="/register" />,
          exact: true
        },
        {
          path: "/movies",
          element: user ? <Home type="movies"/> : <Navigate to="/"/>,
        },
        {
          path: "/series",
          element: user ? <Home type="series"/> : <Navigate to="/"/>,
        },
       {
          path: "/watch",
          element: user ? <Watch/> : <Navigate to="/"/>
        },
       {
          path: "/login",
          element: !user ? <Login/> : <Navigate to="/"/>
        },
       {
          path: "/register",
          element: !user ? <Register/> : <Navigate to="/"/>
        },
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
