import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard/Dashboard';
import  Home  from './pages/Home';
import Basa from './pages/Basa';

const App = () => {
    const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard/>,
    children:[
        {
            index:true ,
            element:<Home/>
        } ,
        {
            path:"basa",
            element:<Basa/>
        }
    ]
  },
]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
