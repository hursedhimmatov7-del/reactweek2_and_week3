import React from 'react'
import { Link, Outlet } from 'react-router'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import  Card2  from '../compos/Card2';
import Footer from '@/compos/Footer';


const Worki = () => {
  return (
     <div className='font-sans'>
     <div className='max-w-400 bg-[#F7F6FF] m-auto'>
         <header className='w-325 m-auto py-5 flex items-center justify-between'>
        <aside className='flex items-center gap-20'>
          <img className='w-[20%]' src="../../public/worktap.png" alt="" />
           <nav className='flex items-center gap-10'>
              <Link to={'/'}>Биржа</Link>
              <Link >Ворки</Link>
              <Link to={'/Conkursi'}>Конкурсы</Link>
              <Link to={'/Makeworks'}>Создать ворк</Link>
              <Link to={'/Makeorder'}>Создать заказ</Link>
           </nav>
        </aside>
        <div className='flex items-center gap-6'>
           <img src="../../public/a1.png" alt="" />
           <img src="../../public/a2.png" alt="" />
           <img src="../../public/a3.png" alt="" />
           <p>Ернар Ибрагимов</p>
           <img className='w-10 h-10' src="../../public/a4.png" alt="" />
           <KeyboardArrowDownIcon/>
        </div>
      </header>
     </div>

     <section className='max-w-390 bg-[#F7F6FF] relative'>
      <div className='w-40 h-40 rounded-[50%] inline-block bg-[#FFEDDD] absolute left-10 top-[30%] '></div>
      <div className='w-20 h-20 rounded-[50%] inline-block bg-[#FFEDDD] absolute left-[50%] top-0 '></div>
      <div className='w-20 h-20 rounded-[50%] inline-block bg-[#D7FFEC] absolute right-[10%] top-10 '></div>
      <div className='w-20 h-20 rounded-[50%] inline-block bg-[#FFEDDD] absolute bottom-[10%] right-50 '></div>
      <div className='w-325 m-auto py-20 flex flex-col items-center gap-10 relative z-10'>
        <p className='w-[70%] text-4xl text-center font-semibold'>Ищите и находите подходящую работу среди <span className='text-[#1DBF73]'>10,000+</span> проектов и покажите на что Вы способны!</p>
        <div className='w-[40%] flex items-center justify-between bg-[#F2F0FE] rounded-4xl'>
                <input className='outline-0 p-3' type="search" placeholder='Что нужно сделать?' />
                <button className='bg-[#FBA457] p-[12px_40px] rounded-4xl text-white'>Найти</button>
              </div>
               <div className='w-[60%] flex flex-wrap justify-center gap-8'>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Тексты и переводы </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Разработка</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Дизайн</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Аудио, видео монтаж </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>SEO и оптимизация</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Бизнес и жизнь</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Соцсети и реклама</p>
                <p className='p-[5px_12px] border-[#FBA457] border-2 text-[#FBA457] rounded-3xl'>Все категории</p>
              </div>
              <p className='text-2xl font-semibold'>Ниже все заказы по <span className='text-[#1DBF73]'>дизайну</span></p>
           <KeyboardArrowDownIcon sx={{color:'#1DBF73' }}/>
      </div>
     </section>

     <section className='w-325 m-auto flex flex-col items-center gap-12 my-15'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-xl font-semibold'>65 проектов по дизайну</p>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-6'>
            <button className='p-[10px_14px] text-[12px] rounded-2xl border border-gray-700 text-gray-700'>Минимальная цена</button>
            <p>--</p>
            <button className='p-[10px_14px] text-[12px]  rounded-2xl border border-gray-700 text-gray-700'>Максимальная цена</button>
          </div>
          <div className='p-[10px_14px] font-semibold flex items-center justify-between  rounded-2xl border border-gray-700 text-gray-700'>
            <p>По возрастанию цены</p>
           <KeyboardArrowDownIcon/>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-12'>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <button className='p-[20px_30px] border-2 rounded-2xl text-[#1DBF73] border-[#1DBF73]'>Загрузить еще</button>
      </div>
     </section>

     <Footer/>
     
    </div>
  )
}

export default Worki
