import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './Dashboard/Dashboard';
import Birja from './pages/Birja';
const Worki = lazy(()=>import('./pages/Worki'))
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
            element:<Suspense fallback={<h1 className='text-center my-40 text-9xl font-bold'>loading....</h1>}><Worki/></Suspense>
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
