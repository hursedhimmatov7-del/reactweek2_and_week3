import React from 'react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Auth from './Auth';
import UserId from './pages/UserId';
import Product from './pages/Product';
import About from './pages/About';


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
   path:'Home/:id' ,
   element:<UserId></UserId>
  },
       {
        path:"Product",
        element:<Product/>
      },
      { path:"About" ,
        element:<About/>
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
