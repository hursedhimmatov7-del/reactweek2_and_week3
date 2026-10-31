import axios from 'axios'
import React, { useEffect, useState } from 'react'

let api = 'https://test-swagger-2ph6.onrender.com'

const Product = () => {
const [search ,setSearch] = useState("")
const [selectCatalog ,setSelectCatalog] = useState("")
const [dataCatalog,setDataCatalog] = useState([])
const [dataProducts,setDataProducts] = useState([])
const [dataProductsTotal,setDataProductsTotal] = useState([])
const [dataProductsLimit,setDataProductsLimit] = useState(5)
const [dataProductsTotalPage,setDataProductsTotalPage] = useState([])
const [dataProductsPage,setDataProductsPage] = useState(1)
const token = localStorage.getItem("token")
const GetCatalog =async ()=>{
  try {
      const {data} = await axios.get(api+"/catalogs")
      setDataCatalog(data)
  } catch (error) {
      console.error(error);
      
  }
}
const GetProducts =async ()=>{
  try {
      const {data} = await axios.get(api+`/products?limit=${dataProductsLimit}&page=${dataProductsPage}${search?`&search=${search}`:""}${selectCatalog?`&catalogId=${selectCatalog}`:""}`,{
        headers:{
          Authorization:"Bearer "+token
        }
      })
      setDataProducts(data.data)
      setDataProductsTotal(data.total)
      setDataProductsTotalPage(data.totalPages)
      setDataProductsLimit(data.limit)

  } catch (error) {
      console.error(error);
      
  }
}


  useEffect(()=>{
   GetCatalog()
   
  },[])
  useEffect(()=>{
    GetProducts()
  },[dataProductsLimit,dataProductsPage,search,selectCatalog])
  return (
    <div className='border border-black rounded-2xl p-6 flex flex-col gap-6'>
      <div className='flex flex-wrap items-center gap-4'>

     <h1 className='text-3xl font-semibold tracking-tight mr-auto'>Products</h1> 
     <input className='border border-black rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-black' type="search" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
     <select className='border border-black rounded-xl px-3 py-2 outline-none cursor-pointer'   onChange={(e)=>setSelectCatalog(e.target.value)} name="" id="">
      <option value="">All categories</option>
      
     {
        dataCatalog.map((e)=>{
          return <div>
            <option value={e.id}>{e.name}</option>
          </div>
        })
      }
     </select>
      </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
     {
        dataProducts.map((e)=>{
          return <div className='flex items-center gap-3 border border-black rounded-xl p-4 transition-colors hover:bg-black hover:text-white'>
            <p className='border border-current rounded-md px-2 text-sm'>{e.id}</p>
            <h1 className='font-medium'>{e.name}</h1>
          </div>
        })
      }
     </div>
     <div className='flex flex-wrap items-center justify-between gap-4'>
     <select className='border border-black rounded-xl px-3 py-2 outline-none cursor-pointer' onChange={(e)=>setDataProductsLimit(e.target.value)} name="" id="">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
     </select>
      <div className='flex flex-wrap gap-2'>
        {
          Array.from({length:dataProductsTotalPage}).map((e,i)=>{
            const page = i+1
            return <p onClick={()=>setDataProductsPage(page)} className={`border border-black w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer select-none transition-colors hover:bg-black hover:text-white ${page === dataProductsPage ? 'bg-black text-white' : ''}`}>{page}</p>
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Product