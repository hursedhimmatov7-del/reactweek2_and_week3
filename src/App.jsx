import React from 'react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Auth from './Auth';


const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element:<Auth><Dashboard/></Auth> ,
    children:[
      {
        index:true ,
        element:<Home/>
      },
       {
        path:"About",
        element:<About/>
      },
      { path:"Contacts" ,
        element:<Contacts/>
      },
    ]
  },
  {
    path:'Login',
    element:<Login/>
  }
]);
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
