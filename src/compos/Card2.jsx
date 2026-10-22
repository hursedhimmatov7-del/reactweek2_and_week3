import React from 'react'

const Card2 = () => {
  return (
   <div className='w-full h-60 flex items-center justify-between rounded-xl p-10 shadow-md'>
    <div className='flex w-[70%] flex-col gap-6 items-start'>
        <p className='text-2xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</p>
       <div className='flex items-center gap-8'>
       <img className='w-25 h-25' src="../../public/marina.png" alt="" />
       <div className='flex flex-col items-start gap-2'>
        <p>Екатерина Иванова</p>
        <p>Размещено проектов на бирже: 25</p>
        <div className='flex items-center gap-6'>
            <img  src="../../public/st.png" alt="" />
            <p>15 отзывов</p>
        </div>
       </div>
       </div>
    </div>
    <div className='flex flex-col items-end justify-between h-full'>
        <div className='flex flex-col items-end gap-2'>
            <p className='text-2xl text-[#1DBF73]'>Бюджет: 50 000 тенге</p>
            <p>4 часа 28 минут назад</p>
        </div>
        <p>Предложений: 50</p>
    </div>
   </div>
  )
}

export default Card2
