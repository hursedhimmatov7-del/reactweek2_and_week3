import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    let {id} = useParams()
    const datas = data.find((elem)=> elem.id == id)

  return (
    <div>
      {
        datas.map((elem)=> {
            return <p>{elem.name}</p>
        })
      }
    </div>
  )
}

export default User
