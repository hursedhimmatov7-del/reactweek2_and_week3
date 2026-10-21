import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <div className='w-325 m-auto my-5 flex items-start gap-4 border-b-2 border-dashed pb-3 border-gray-500'>
        <Link className='p-[5px_12px] border border-dashed border-gray-700 text-gray-700' to={'/'}>Home</Link>
        <Link className='p-[5px_12px] border border-dashed border-gray-700 text-gray-700' to={'basa'}>Basa</Link>
      </div>
      <div className="w-325 m-auto">  <Outlet/></div>
    
    </div>
  )
}

export default Dashboard
