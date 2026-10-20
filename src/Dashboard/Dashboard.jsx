import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='bg-black'>
      <header className="max-w-[1300px] w-[90%] m-auto h-25 flex items-center justify-between text-white">
        <div className="flex items-center">
          <img
            src="../../public/Logo.png"
            alt="Logo"
            className="h-12 w-auto rounded-lg"
          />
        </div>

        <nav className="flex items-center gap-15">
          <Link
            to="/"
            className="hover:bg-linear-to-b from-white to-[#0A84FF] hover:p-[8px_16px] hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out"
          >
            <p>Home</p>
          </Link>

          <Link
            to="/Services"
            className="hover:bg-linear-to-b from-white to-[#0A84FF] hover:p-[8px_16px] hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out"
          >
            <p>Services</p>
          </Link>

          <Link
            to="/table"
            className="hover:bg-linear-to-b from-white to-[#0A84FF] hover:p-[8px_16px] hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out"
          >
            <p>Careers</p>
          </Link>

          <Link
            to="/CareersDetails"
            className="hover:bg-linear-to-b from-white to-[#0A84FF] hover:p-[8px_16px] hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out"
          >
            <p>Career Details</p>
          </Link>

          <Link
            to="/Contacts"
            className="hover:bg-linear-to-b from-white to-[#0A84FF] hover:p-[8px_16px] hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out"
          >
            <p>Contact</p>
          </Link>
        </nav>

        <button className="bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white hover:bg-linear-to-b from-white to-[#0A84FF] hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out active:scale-1">
          Contact Us
        </button>
      </header>

      <Outlet />
    </div>
  )
}

export default Dashboard