import React, { useEffect } from 'react'
import { Link, Outlet,  useNavigate } from 'react-router'
import { logCheck } from './Log'

const Dashboard = () => {
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem('token')
        navigate('/Login',{replace:true})
    }

    useEffect(()=>{
     const logg = async()=>{
        try {
            await logCheck()            
        } catch (error) {
            if(error.response?.status === 401){
                localStorage.removeItem('token')
                navigate('/Login' , {replace:true})
            }
        }
     }
     logg()
    }, [navigate])
  return (
    <div className='w-325 m-auto'>
       <header className='w-325 m-auto flex items-center justify-between py-3'>
        <div className='flex items-center gap-8'>
        <Link to={'/'}>Home</Link>
        <Link to={'Product'}>Product</Link>
        <Link to={'About'}>About</Link>
        </div>
        <button onClick={logout}>Log out</button>
       </header>
      <Outlet/>
    </div>
  )
}

export default Dashboard
