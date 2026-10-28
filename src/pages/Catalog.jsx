import axios from 'axios'
import React, { useEffect, useState } from 'react'

const api = 'https://test-swagger-2ph6.onrender.com/catalogs'

const Catalog = () => {

    const [data , setdata] = useState([])
    
    async function fetch() {
        try {
            const {data} = await axios.get(api)
           setdata(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetch()
    }, [])
  return (
    <div>
      {
        data.map((elem)=>{
            return <div>
                <h1>{elem.name}</h1>
            </div>
        })
      }
    </div>
  )
}

export default Catalog
