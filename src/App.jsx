import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard/Dashboard';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Tabel from './pages/Careers';
import CareersDetails from './pages/CareersDetails';
import Services from './pages/Services';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"Services" ,
        element:<Services/>
      },
       {
        path:"table" ,
        element:<Tabel/>
      },
       {
        path:"CareersDetails" ,
        element:<CareersDetails/>
      },
       {
        path:"Contacts" ,
        element:<Contacts/>
      }
      
    ]
  },
  {
    path:"*" ,
    element:<NotFound/>
  }
]);
  return (
     <RouterProvider router={router} />
  )
}

export default App
