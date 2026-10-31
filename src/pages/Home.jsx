import { api } from '@/Api'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'




const Home = () => {
    const token = localStorage.getItem('token')
    let [data , setdata] = useState([])
    const [editingUser, setEditingUser] = useState(null)
    const addmodal = useRef()
    const editmodal = useRef()
    async function fetch() {
        try {
            let {data} = await axios.get(api + '/users' , {
                headers : {Authorization:`Bearer ${token}`}
            })
            setdata(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetch()
    }, [])

 async function dltUser(id) {
    try {
      await axios.delete(api + '/users/' + id , {
        headers:{Authorization:`Bearer ${token}`}
      })
      fetch()
    } catch (error) {
        console.log(error)
    }
 }
 const addUser = async(e) => {
    e.preventDefault()
    let obj = {
        name : e.target.name.value ,
        email : e.target.email.value ,
        password : e.target.password.value ,
        role : e.target.role.value ,
        city : e.target.city.value 
    }
    try {
        await axios.post(api + '/users' , obj, {
            headers:{Authorization:`Bearer ${token}`}
        })
        fetch()
        addmodal.current.close()
    } catch (error) {
        console.log(error)
    }
 }
 function editShow(elem){
    setEditingUser(elem)
    editmodal.current.showModal()
 }

 const editUser = async(e) => {
    e.preventDefault()
    let obj = {
        name : e.target.name.value ,
        email : e.target.email.value ,
        password : e.target.password.value ,
        role : e.target.role.value ,
        city : e.target.city.value 
    }
    try {
        await axios.put(api + '/users/'+ editingUser.id , obj, {
            headers:{Authorization:`Bearer ${token}`}
        })
        fetch()
        editmodal.current.close()
        addmodal.current.close()
    } catch (error) {
        console.log(error)
    }
 }

    
  return (
    <div>
        <button onClick={()=>addmodal.current.showModal()} className='p-2 border border-gray-700 rounded-xl'>Adduser+</button>
     <div className='w-full my-15 flex flex-wrap gap-6 border-2 border-gray-700 rounded-2xl p-10'>
         {
        data.map((elem)=>{
            return <div className='flex w-[32%] items-start flex-col gap-4 p-5 border-2 border-gray-700 rounded-2xl' key={elem.id}>
                <h1>{elem.name}</h1>
                <h1>{elem.email}</h1>
                <h1>{elem.role}</h1>
                <h1>{elem.city}</h1>
                <div className='flex items-center gap-4'>
                    <button onClick={()=>dltUser(elem.id)}>Delete</button>
                    <button onClick={()=>editShow(elem)}>Edit</button>
                    <Link to={`Home/${elem.id}`}>Info</Link>
                </div>
            </div>
        })
      }
     </div>

  <dialog className='m-auto'  ref={addmodal}>
        <form onSubmit={addUser} className='flex flex-col' >
            <input  type="text" placeholder='name...' name='name' />
            <input  type="email" placeholder='email...' name='email' />
            <input  type="text" placeholder='password...' name='password' />
            <input  type="text" placeholder='role...' name='role' />
            <input  type="text" placeholder='city...' name='city' />
            <button type='submit'>Save</button>
        </form>
     </dialog>
   <dialog ref={editmodal}>
       <form onSubmit={editUser} key={editingUser?.id}>
         <input type="text" placeholder='name...' name='name' defaultValue={editingUser?.name}/>
        <input type="text" placeholder='email...' name='email' defaultValue={editingUser?.email}/>
        <input type="text" placeholder='password...' name='password' defaultValue={editingUser?.password}/>
        <input type="text" placeholder='role...' name='role' defaultValue={editingUser?.role}/>
        <input type="text" placeholder='city...' name='city' defaultValue={editingUser?.city}/>
        <button type='submit'>Edit</button>
       </form>
      </dialog>
   </div>
  )
}

export default Home
