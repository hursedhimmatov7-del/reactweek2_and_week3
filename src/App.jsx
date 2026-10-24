import React from 'react'
  import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard/Dashboard';
import About from './pages/About';
import Courses from './pages/Courses';
import { User } from 'lucide-react';


const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children:[
      {
       index : true ,
       element:<About/>,
      },
        {
    path:"about/:id",
    element:<User/>
  },
      {
        path:"courses" ,
        element:<Courses/>
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
