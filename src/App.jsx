import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './pages/Main';
import Dashboard from './Dashboard/Dashboard';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Product from './Catalog_Pages/Product';
import NotFound from './pages/NotFound';

const App = () => {
    const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children : [
        {
            index : true ,
            element : <Main/>
        },
           {
            path:'Catalog' ,
            element : <Catalog/>,
            children:[
                {
          path:':id',
          element:<Product/>
                 },
            ]
        },
        
         {
            path:'About' ,
            element : <About/>
        },
           
    ]
  },
 {
  path:"*",
  element: <NotFound/>
 }
]);
  return (
    <div>
  <RouterProvider router={router} />
    </div>
  )
}

export default App
