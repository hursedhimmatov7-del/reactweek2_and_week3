import React from 'react'
import { Link } from 'react-router'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card3 from '@/compos/Card3';
import Footer from '@/compos/Footer';


const Makeorder = () => {
  return (
    <div>
        <div className='max-w-400 bg-[#F7F6FF] m-auto'>
         <header className='w-325 m-auto py-5 flex items-center justify-between'>
        <aside className='flex items-center gap-20'>
          <img className='w-[20%]' src="../../public/worktap.png" alt="" />
           <nav className='flex items-center gap-10'>
              <Link to={'/'}>Биржа</Link>
              <Link to={'/worki'}>Ворки</Link>
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

     <section className='w-325 my-20 m-auto flex flex-col items-center gap-10'>
      <p className='text-4xl font-semibold'>История <span className='text-[#FABA81]'>покупок</span></p>
      <div className='w-full flex items-center justify-between'>
        <p className='text-3xl font-semibold'>Всего 65 сделок</p>
        <div className='flex items-center gap-6'>
          <p>Показать только:</p>
          <div className='flex items-center gap-2'>
            <input type="radio" /> 
            <p>Выполняется</p>
            </div>
             <div className='flex items-center gap-2'>
            <input type="radio" /> 
            <p>Завершено</p>
            </div>
        </div>
        <button className='p-[10px_20px] font-semibold  border border-gray-700 rounded-2xl '>По возрастанию цены    <KeyboardArrowDownIcon/> </button>
      </div>
      <div className='w-full flex flex-wrap gap-4 gap-y-8'>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
         <Card3/>
      </div>
            <button className='p-[15px_30px] self-center border-2 border-[#1DBF73] rounded-2xl text-[#1DBF73] '>Загрузить еще</button>
     </section>

     <Footer/>
    </div>
  )
}

export default Makeorder
