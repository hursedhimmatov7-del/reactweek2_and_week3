import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <div className='max-w-400 m-auto bg-[#FEDAD5]'>
         <header className='w-325 m-auto py-5 flex items-center justify-between'>
            <nav className='flex items-center gap-6'>
              <img src="../../public/logo.png" alt="" />
              <Link to={"/"}>  About Us</Link>
              <Link to={"courses"}>Courses</Link>
              <p>Events</p>
              <p>Blog</p>
              <p>Contacts</p>           
            </nav>
            <div className='flex items-center gap-6'>
                <button className='p-[20px_30px] bg-[#F95317] text-white rounded-xl'>Get consultation</button>
                <button className='text-gray-700'>Log in / Register</button>
            </div>
         </header>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
