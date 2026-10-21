import React, { useState } from 'react'
import { useSearchParams } from 'react-router'

const Basa = () => {
    const [searchpar , setsearchpar] =  useSearchParams()
    const [search ,setsearch] = useState(searchpar.get("searchname")?searchpar.get("searchname"):"")
  const [data , setdata] = useState([
    {
        id:1,
        name:"Ahmad"
    },{
        id:2,
        name:"Maga"
    },{
        id:3,
        name:"Peter Parket"
    },
  ])

  const SearchFunc = (val)=> {
    setsearch(val)
    setsearchpar([["searchname" , val]])
  }

  return (
  <div className='w-325 m-auto flex flex-col items-start gap-5'>
    <input value={search} onChange={(e)=>SearchFunc(e.target.value)} type="search" placeholder='search...' className='border-2 border-dashed p-3 text-gray-700 border-gray-700 rounded-2xl' />
      <div className='w-325 m-auto flex flex-wrap gap-4 items-center'>
      {
        data.filter((elem)=> elem.name.toLowerCase().includes(search.trim().toLowerCase())).map((elem)=>{
            return <div className='w-[32%] text-2xl font-bold border-2 border-dashed border-gray-700 text-gray-700 p-5'>
                <h1>{elem.name}</h1>
            </div>
        })
      }
    </div>
  </div>
  )
}

export default Basa
