import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard/Dashboard';
import Birja from './pages/Birja';
import Worki from './pages/Worki';
import Conkursi from './pages/Conkursi';
import Makeworks from './pages/Makeworks';
import Makeorder from './pages/Makeorder';

const App = () => {
    const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children:[
        {
            index:true,
            element:<Birja/>
        },
    ]
  },
   {
            path:'worki' ,
            element:<Worki/>
        },
           {
            path:'Conkursi' ,
            element:<Conkursi/>
        },
         {
            path:'Makeworks' ,
            element:<Makeworks/>
        },
        {
            path:'Makeorder' ,
            element:<Makeorder/>
        }
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
