import Footer from '@/Components/Footer'
import { DownOutlined } from '@ant-design/icons'
import React from 'react'

const Main = () => {
  return (
    <>
          <section className="w-325 h-100 relative m-auto my-10 bg-cover bg-center flex items-center">
            <img className='absolute z-0  h-full' src="../../public/Subtract.png" alt="" />
            <div className='relative z-10 w-[80%] m-auto  flex items-center justify-between'>
                <div className='w-[50%] flex flex-col items-start gap-5'>
                    <p className='text-2xl font-bold text-white'>Бренд MEDO - российское производство транспортных лент, прутковых транспортеров для сельхозтехники по уробке урожая овощных культур</p>
                    <button className='text-green-700 p-[5px_13px] bg-white rounded-2xl'>Оставить заявку</button>
                </div>
                <img className='w-[40%]' src="../../public/img.png" alt="" />
            </div>
             <div  className='bg-linear-to-r from-[#2B7E55] to-[#0C613A] inline-block p-[15px_20px] text-white font-bold rounded-[50%] absolute right-[48.6%] -bottom-10'>
         <DownOutlined />
     </div>
      </section>

      
      <section className='w-325 m-auto my-35 flex flex-col items-center justify-center gap-5'>
        <p className='text-3xl font-bold'>Каталог товаров</p>
        <p className='flex flex-col items-center gap-1'><span>Небольшое описание блока</span> <span> размеров в две строки</span></p>
        <div className='w-full flex items-center justify-between'>
            <div className='w-[32%] flex flex-col items-start  p-5 rounded-xl h-70 bg-linear-to-r  from-[#2B7E55] to-[#0C613A]'>
             <h1 className='text-white text-2xl font-semibold'>Свеклоуборочная <br /> техника</h1>
             <img className='w-[80%] self-end' src="../../public/truck.png" alt="" />
            </div>
            <div className='w-[32%] flex flex-col items-start  p-5 rounded-xl h-70  shadow-md '>
             <h1 className='text-[#0C613A] text-2xl font-semibold'>Свеклоуборочная <br /> техника</h1>
             <img className='w-[80%] self-end' src="../../public/tr2.png" alt="" />
            </div>
            <div className='w-[32%] flex flex-col items-start  p-5 rounded-xl h-70  x shadow-md '>
             <h1 className='text-[#0C613A] text-2xl font-semibold'>Свеклоуборочная <br /> техника</h1>
             <img className='w-[80%] self-end' src="../../public/img.png" alt="" />
            </div>
        </div>
        <button className='bg-linear-to-r from-[#2B7E55] to-[#0C613A] p-[6px_16px] rounded-2xl text-white'>перейти в каталог</button>
      </section>

      <section className='w-325 m-auto my-35 flex flex-col items-center justify-center gap-15'>
        <p className='text-4xl font-bold'>О компании</p>
        <div className='flex flex-col items-center gap-3'>
           <p className='text-[18px]'> ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких направлениях, как сельскохозяйственная и специальная техника. Основной состав компании сформирован из инженеров-производственников, которые не по наслышке знают все трудности и проблемы, с которыми Вам приходится сталкиваться в процессе работы с техникой. Мы всегда готовы прийти Вам на помощь.</p>
           <p className='text-[18px]'>А также, наша компания предлагает к поставке прутковые транспортеры и комплектующие собственного производства под брендом MEDO.В кратчайшие сроки выполним заказ на изготовление транспортера для сельхозтехники по уборке урожая овощных культур.Дополнительно, мы оказывает услуги по восстановлению ваших б/у транспортёров с заменой всех ремней, пластинок, заклёпок и замков.</p>       
        </div>
         <div className='flex items-center gap-10 '>
             <div className='flex flex-col gap-1 items-start'>
                <p className='text-4xl font-bold text-[#0C613A]'>500</p>
                <p>товаров</p>
             </div>
             <div className='flex flex-col gap-1 items-start'>
                <p className='text-4xl font-bold text-[#0C613A]'>300+</p>
                <p>клиентов</p>
             </div>
             <div className='flex flex-col gap-1 items-start'>
                <p className='text-4xl font-bold text-[#0C613A]'>15</p>
                <p>специалистов</p>
             </div>
            </div> 
            <img src="../../public/gallery.png" alt="" />
      </section>
      <Footer/>
    </>
  )
}

export default Main
