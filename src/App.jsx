import React from 'react'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Dash from './Dash/Dash'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Login from './Login/Login'
import Authflow from './Authflow'
import Catalog from './pages/Catalog'
import Product from './pages/Product'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authflow>
        <Dash />
      </Authflow>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contacts", element: <Contacts /> },
      {path:"Catalog" , element:<Catalog/>} ,
      {path:"Product" , element:<Product/>}
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App