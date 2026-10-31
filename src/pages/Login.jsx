import { LogAccess } from '@/Log'
import React from 'react'
import { Navigate, useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    if(token){
        return <Navigate to={'/'}/>
    }

const logging = async (e) => {
  e.preventDefault()
  const obj = {
    email: e.target.email.value,
    password: e.target.password.value,
  }

  const token = await LogAccess(obj)
  if (token) {
    localStorage.setItem('token', token)
    navigate('/', { replace: true })
  }
}

  return (
    <div>
        <div className='w-100 m-auto'>
            <form  onSubmit={logging} className='w-full my-20 flex items-start flex-col gap-10 border-2 border-gray-700 rounded-3xl p-10'>
              <input  type="email" className='w-full border-2 border-gray-700 rounded-2xl py-2 px-5'  placeholder='Enter email' name='email' />
              <input type="password" className='w-full border-2 border-gray-700 rounded-2xl py-2 px-5'  placeholder='Enter Password' name='password' />
              <button type='submit'>Save</button>
            </form> 
        </div>
        
    </div>
  )
}

export default Login
