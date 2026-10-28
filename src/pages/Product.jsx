import axios from 'axios'
import React, { useEffect, useState } from 'react'

const api = 'https://test-swagger-2ph6.onrender.com/products?catalogId=1&search=%D1%83%D1%82%D0%B5%D0%BF%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C&page=1&limit=8'

const Product = () => {
    const [data , setdata] = useState([])

    async function fetch() {
        try {
            let {data} = await axios.get(api)
            setdata(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetch()
    },[])
  return (
    <div>
      {
        data.map((elem) => {
            return <div>
                <h1>{elem.name}</h1>
            </div>
        })
      }
    </div>
  )
}

export default Product
