import React from 'react'

const Card3 = () => {
  return (
    <div className='w-[24%] flex flex-col items-start gap-3 shadow-md'>
       <img className='w-full' src="../../public/f.png" alt="" />
       <div className='p-4 w-full flex flex-col items-start gap-3'>
        <p>Дизайн сайта </p>
        <p>Стандарт пакет</p>
        <div className='w-full flex items-center justify-between'>
            <p>50 000 тенге</p>
            <p className='text-gray-400'>26.03.2021</p>
        </div>
        <p className='text-[#F9B980]'>Выполняется</p>
        <div className='w-full flex items-center justify-between'>
            <button className='w-[45%] py-3 rounded-2xl px-5 bg-[#D7FFEC]'>В чат</button>
            <button className='w-[50%] py-3 rounded-2xl px-5 bg-[#EBE8FF]'>Подробнее </button>
        </div>
       </div>
    </div>
  )
}

export default Card3
