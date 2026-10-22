import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='font-sans'>
     <div className='max-w-400 bg-[#F7F6FF] m-auto'>
         <header className='w-325 m-auto py-5 flex items-center justify-between'>
        <aside className='flex items-center gap-20'>
          <img className='w-[20%]' src="../../public/worktap.png" alt="" />
           <nav className='flex items-center gap-10'>
              <Link to={'/'}>Биржа</Link>
              <Link to={'worki'}>Ворки</Link>
              <Link to={'/Conkursi'}>Конкурсы</Link>
              <Link to={'/Makeworks'}>Создать ворк</Link>
              <Link to={'/Makeorder'}>Создать заказ</Link>
           </nav>
        </aside>
        <div className='flex items-center gap-6'>
            <button className='text-[#1DBF73] bg-[#F2F0FE] p-[6px_20px] rounded-2xl text-[13px]'>Регистрация</button>
            <button className='bg-[#1DBF73] text-[13px] text-white p-[6px_20px] rounded-2xl'>Войти</button>
        </div>
      </header>
     </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
