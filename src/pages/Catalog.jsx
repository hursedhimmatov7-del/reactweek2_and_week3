import Footer from '@/Components/Footer'
import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, Outlet } from 'react-router'


export const data = [
    {
        id:1 ,
        name:'Транспортер выгрузной БР 8050 х 1700 х 161',
        article:'1056025611',
        made:'MEDO',
        width:'1700 мм',
        height:'161 шт.'
    },
      {
        id:2 ,
        name:'Колесные экскаваторы',
        article:'3254342353',
        made:'MEDO+1',
        width:'1900 мм',
        height:'202 шт.'
    },
      {
        id:3 ,
        name:'Экскаваторы-погрузчики',
        article:'9-784t607',
        made:'MEDO+s',
        width:'2200 мм',
        height:'364 шт.'
    }
]

const Catalog = () => {
  return (
    <div>
        <div className='max-w-400 bg-linear-to-b from-[#94939335] to-white m-auto'>
            <div className='w-325 m-auto py-10 flex items-start justify-between'>
                <div className='w-[30%]  flex flex-col items-start gap-5 '>
                    <p className='p-3 bg-linear-to-r from-[#2E8158] to-[#0A5E38] rounded-2xl text-white' >Свеклоуборочная техника <DownOutlined /></p>
                    {
                        data.map((elem)=>(
                            <Link key={elem.id} to={`/Catalog/${elem.id}`}>{elem.name}</Link>
                        ))
                    }
                    <p className='font-bold border-dashed border-b-2 pb-3'>Картофелеуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Транспортеры MEDO</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Комплектующие MEDO</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Почвообрабатывающая техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Кормоуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Опрыскиватели</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Разбрасыватели</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                    <p className='font-bold border-dashed border-b-2 pb-3'>Зерноуборочная техника</p>
                </div>
                <div className='w-[65%]'>
                    <Outlet/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Catalog
