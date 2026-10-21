import React  from 'react'
import {  Navigate,  useParams } from 'react-router'
import { data } from '../pages/Catalog' 
import { RightOutlined } from '@ant-design/icons'

const Product = () => {
  const {id} = useParams()
  const datas = data.find((elem)=> elem.id == id)


   if (!datas) {
  return <Navigate to="/NotFound"  />
}


 
  return (
    <div className='w-full flex flex-col items-start gap-10'>
     <div className='flex items-center gap-4 text-gray-500'>
      <RightOutlined />
      <p>Каталог</p>
      <RightOutlined />
      <p>Свеклоуборочная техника</p>
      <RightOutlined />
       <p>{datas.name}</p>
     </div>
     <h1 className='text-4xl font-bold text-[#146841]'>{datas.name}</h1>
     <div className='w-full flex justify-between items-start '>
       <img src="/public/loc.png" alt="" />
       <div className='flex flex-col items-start gap-4 w-[60%]'>
        <h1>Основные характеристики:</h1>
        <div className='w-full flex items-center justify-between border-b-2 border-dashed border-gray-500 pb-4'>
          <p>Артикул</p>
          <p>{datas.article}</p>
        </div>
         <div className='w-full flex items-center justify-between border-b-2 border-dashed border-gray-500 pb-4'>
          <p>Производитель</p>
          <p>{datas.made}</p>
        </div>
         <div className='w-full flex items-center justify-between border-b-2 border-dashed border-gray-500 pb-4'>
          <p>Ширина</p>
          <p>{datas.width}</p>
        </div>
         <div className='w-full flex items-center justify-between border-b-2 border-dashed border-gray-500 pb-4'>
          <p>Кол-во прутков</p>
          <p>{datas.height}</p>
        </div>
        <button className='p-4 rounded-2xl bg-linear-to-r from-[#2C7F56] to-[#085C36] text-white'>Узнать стоимость</button>
       </div>
     </div>
     <button className='p-4 rounded-2xl bg-linear-to-r from-[#2C7F56] to-[#085C36] text-white'>Оплата и доставка</button>
     <div className='flex flex-col gap-5 items-start'>
      <p>Поставляем оригинальные запчасти, а также качественные аналоги. <br /> Оказываем услуги по Ремонту и восстановлению деталей, узлов и механизмов</p>
      <p className='text-[14px] text-justify'>Поставляем оригинальные запчасти, а также качественные аналоги.Оказываем услуги по Ремонту и восстановлению деталей, узлов и механизмов.Помогаем специалистам правильно дефектовать технику и подобрать именно те детали, которые действительно необходимы <br /> Оказываем информационную поддержку технических специалистов при работе с каталогами и определением правильных параметров и характеристик деталей. Проводим консультации для руководителей о правильной <br /> эксплуатации техники, а также определении причин аварийных поломок вследствие нарушений правил выполнения работ и технологии.</p>
      <p className='text-[14px]'>Проводим консультации для руководителей о правильной эксплуатации техники, а также определении причин аварийных <br /> поломок вследствие нарушений правил выполнения работ и технологии</p>
     </div>
     <div className='w-full h-80 rounded-2xl bg-[url(../../public/bg.png)] flex items-center'>
     <div className='w-[80%] flex flex-col items-start gap-5 text-white m-auto'>
      <p className='text-2xl font-semibold'>Остались вопросы?</p>
      <p className='text-[#FFFFFF]'>Оставьте заявку на подбор нужного товара <br /> и бесплатную консультацию специалиста</p>
      <div className='w-[50%] flex flex-col items-start gap-5 p-6 rounded-3xl bg-white'>
        <input type="text" placeholder='номер телефона'  className='outline-0 border-2 w-full border-gray-500 rounded-xl p-2 text-gray-900'/>
        <button className='p-4 rounded-2xl bg-linear-to-r w-full from-[#2C7F56] to-[#085C36] text-white'>получить консультацию</button>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Product
