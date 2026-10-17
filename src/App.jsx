import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  let api = 'https://to-dos-api.softclub.tj'
  const [data , setdata] = useState([])
  const[trig ,settrig] = useState(false)
  const [index , setindex]= useState({id:null , index:0,})

  const [addimg , setaddimg] = useState([])
  const [addname , setaddname] = useState(null)
  const [adddesc , setadddesc] = useState(null)

   const [editname , seteditname] = useState(null)
   const [editid , seteditid] = useState(null)
  const  [editdesc , seteditdesc] = useState(null)
   

  const addmodal = useRef(null)
  const editmodal = useRef(null)

  const [search , setsearch] =useState('')
  const[sort ,setsort] = useState('all')

  const [img , setimg] = useState([])
  const [imgid , setimgid] = useState(null)
  const imgmodal = useRef(null)

  async function getFetch() {
    try {
      const {data} = await axios.get(`${api}/api/to-dos`)
      setdata(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  async function chekFunc(id){
    try {
      await axios.put(`${api}/completed?id=${id}`)
      getFetch()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    if(trig){
      getFetch()
    }
    return () => {
      settrig(true)
    }

  },[trig])

  async function dltUser(id) {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`)
      getFetch()
    } catch (error) {
      console.log(error)
    }
  }
  async function addsave() {
  const newUser = new FormData()
  newUser.append('name', addname)
  newUser.append('description', adddesc)
  addimg.forEach((file) => newUser.append('images', file))

  try {
    await axios.post(`${api}/api/to-dos`, newUser)
    getFetch()
    setaddname('')
    setadddesc('')
    setaddimg([])
    addmodal.current.close()
  } catch (error) {
    console.log(error)
  }
}

function editshow(user){
  seteditid(user.id)
  seteditname(user.name)
  seteditdesc(user.description)
  editmodal.current.showModal()
}

 async function editsave() {
  try {
    await axios.put(`${api}/api/to-dos/`, {
      id : editid ,
      name: editname ,
      description : editdesc ,
    })
    getFetch()
    editmodal.current.close()
  } catch (error) {
    console.log(error)
  }
}

let filtered = data.filter((elem) => elem.name.toLowerCase().includes(search.trim().toLowerCase())).filter((elem) => {
  if(sort == 'true') return elem.isCompleted == true
  else if(sort == 'false') return elem.isCompleted == false
  return true
})


async function dltimg(id) {
  try {
   await axios.delete(`${api}/api/to-dos/images/${id}`)
    getFetch()
  } catch (error) {
    console.log(error)
  }
}

function imgshow(elem){
setimgid(elem.id)
setimg([])
imgmodal.current.showModal()
}
async function imgadd() {
  const newImg = new FormData()
  {
    img.forEach((file) => {
      newImg.append("images" , file)
    })
  }
  try {
    await axios.post(`${api}/api/to-dos/${imgid}/images` , newImg)
    getFetch()
    imgmodal.current.close()
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>

      <dialog ref={imgmodal}>
        <input type="file" 
        multiple
        onChange={(e) => {setimg((prev)=> [...prev , ...Array.from(e.target.files),])}} />
        <p>Выбрано файлов : {img.length}</p>
        <button onClick={imgadd}>save</button>
      </dialog>
      <input type="search" placeholder='search...' onInput={(e)=> setsearch(e.target.value)} />
      <select onChange={(e)=> setsort(e.target.value)}>
        <option value="all">all</option>
        <option value="true">online</option>
        <option value="false">offline</option>
      </select>
      <button onClick={()=>addmodal.current.showModal()}>add user</button>
      <dialog className='m-auto my-25 ' ref={addmodal} >
       <div className='flex items-center flex-col gap-3'>
         <input
         type="file"
         multiple
         onChange={(e) => setaddimg((prev) => [...prev , ...Array.from(e.target.files)])}
           />
        <p>Файлов выбрано : {addimg.length}</p>
        <input type="text" placeholder='name...' onChange={(e) => setaddname(e.target.value)} />
        <input type="text" placeholder='desc...' onChange={(e) => setadddesc(e.target.value)} />
        <button>close</button>
        <button onClick={addsave}>save</button>
       </div>
      </dialog>
      

  <dialog  className='m-auto my-25 ' ref={editmodal} >
       <div className='flex items-center flex-col gap-3'>
        <input type="text" placeholder='name...' defaultValue={editname} onChange={(e) => seteditname(e.target.value)} />
        <input type="text" placeholder='desc...' defaultValue={editdesc} onChange={(e) => seteditdesc(e.target.value)} />
        <button>close</button>
        <button onClick={editsave} >save</button>
       </div>
      </dialog>


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>avatar</th>
            <th>name</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((elem) => {
              return <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>
                  <div className='flex items-center gap-2'>
                    <button disabled={elem.images.length < 2} onClick={() => setindex((prev)=> prev.index<1?{id:elem.id , index : elem.images.length -1}:{id:elem.id , index:prev.index-1} )}  className='border border-gray-400 p-2 rounded-md'>prev</button>
                    {
                  <div className='w-full relative'>
                    <img className='w-full  relative h-20'  src={index.id == elem.id ? api + "/images/" + elem?.images[index.index]?.imageName : api + "/images/" + elem?.images[0]?.imageName  } alt="" />
                    <p onClick={()=> dltimg(elem.images[index.index].id)} className='font-bold text-white text-1xl absolute right-0 top-0'>x</p>
                  </div>
                    }
                    <button disabled={elem.images.length < 2} onClick={() => setindex((prev)=> prev.index==elem.images.length -1?{id:elem.id , index : 0}:{id:elem.id , index:prev.index+1} )}  className='border border-gray-400 p-2 rounded-md'>next</button>
                  </div>
                  </td>
                <td>{elem.name}</td>
                <td>{elem.isCompleted ? "online" : 'offline'}</td>
                <td><div className='flex gap-2'>
                  <button onClick={()=> dltUser(elem.id)}  className='border border-gray-500 px-5 py-2 rounded-md'>delete</button>
                  <button onClick={()=> editshow(elem)} className='border border-gray-500 px-5 py-2 rounded-md'>edit</button>
                  <button className='border border-gray-500 px-5 py-2 rounded-md'>info</button>
                  <input type="checkbox" checked = {elem.isCompleted} onChange={()=> chekFunc(elem.id)} />
                  <button onClick={() => imgshow(elem)}>add img</button>
                  </div></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
