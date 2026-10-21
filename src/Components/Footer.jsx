import { TelegramFilled, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-400 bg-[#EFEFEF]  m-auto'>
        <footer className='w-325 m-auto mt-20 flex flex-col items-center gap-10 py-10'>
      <div className='w-full flex items-center justify-between'>
        <img src="../../public/logo.png" alt="" />
        <div className='flex items-center gap-5'>
            <p className='p-[10px_14px] bg-[#0077FF] rounded-[50%] text-white'>vk</p>
            <div  className='p-[10px_14px] bg-[#29A0E5] rounded-[50%] text-white'><WhatsAppOutlined /></div>
            <div  className='p-[10px_14px] bg-[#2CA138] rounded-[50%] text-white'><TelegramFilled /></div>
        </div>
      </div>
      <div className='w-full flex items-start justify-between'>
        <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl font-bold'>Информация</p>
            <p>О нас</p>
            <p>Партнерам</p>
            <p>Карьера</p>
            <p>Контакты</p>
        </div>
         <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl font-bold'>Каталог</p>
            <p>Свеклоуборочная  <br /> техника</p>
            <p>Картофелеуборочная <br /> техника</p>
            <p>Транспортеры MEDO</p>
            <p>Комплектующие MEDO</p>
        </div>
         <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl font-bold'>Блог</p>
            <p>Новости</p>
            <p>События</p>
        </div>
         <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl font-bold'>Адрес</p>
            <p>юридический и фактический:</p>
            <p className='font-semibold'>117638, Россия, г. Москва <br />,ул. Криворожская, д. 6А, стр. 2 <br />, пом. 236</p>
            <p>адрес производства:</p>
            <p className='font-semibold'>г. Брянск, Московский проезд, д10а</p>
        </div>
         <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl font-bold'>Контакты</p>
            <p>звонок бесплатный <br /> <b>8 800 505 72 32</b></p>
            <p>электронная почта <br /> <b>info@kd-grupp.com</b></p>
            <button className='p-[6px_14px] rounded-2xl border-2 border-green-500 text-green-500'>написать нам</button>
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <p className='text-gray-500'>© 2020 ООО «КД-Групп». Все права защищены</p>
        <p className='text-gray-500'>Разработка и продвижение SilverDuck</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
