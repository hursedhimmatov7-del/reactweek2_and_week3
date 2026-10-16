import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  EditIcon,
  InfoIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from 'antd'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { ArrowUpIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider ,
} from "@/components/ui/tooltip"

const api = 'https://to-dos-api.softclub.tj/'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
    const [editmodal ,seteditmodal] = useState(false)
    const [addmodal ,setaddmodal] = useState(false)
const[editid ,seteditid] = useState()
const[editname , seteditname] = useState()
const[editdesc , seteditdesc] = useState()
const[editstat , seteditstat] = useState()
const [infomodal , setinfomodal] = useState(false)
const[infoid ,   setinfoid] = useState()
const[infoname , setinfoname] = useState()
const[infodesc , setinfodesc] = useState()
const[infostat , setinfostat] = useState()
const[infoimg , setinfoimg] = useState()

const[addname , setaddname] = useState('')
const[adddesc , setadddesc] = useState('')
const[addimg ,  setaddimg] = useState([])

const[search , setsearch] = useState('')

const [imgmodal, setimgmodal] = useState(false)   
const [imgtodoid, setimgtodoid] = useState()     
const [newimgs, setnewimgs] = useState([])        


  async function getFetch() {
    setLoading(true)
    setError(null)
    try {
      let {data} = await axios.get(api + "api/to-dos")
      const datas = data.data
      setData(datas)
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
     getFetch()
 
  }, [])

  if (loading) return<Button disabled size="sm"><Spinner data-icon="inline-start" />  Loading...</Button>

  if (error) return <p>Произошла ошибка: {error}</p>


  async function dltUser(id){
   try {
    await axios.delete(`${api}api/to-dos?id=${id}`)
    getFetch()
   } catch (error) {
    console.log(error)
   }
  }
   function editShow(elem){
    seteditid(elem.id)
    seteditname(elem.name)
    seteditdesc(elem.description)
    seteditstat(elem.isCompleted)
    seteditmodal(true)
  }
  function infoshow(elem){
    setinfoid(elem.id)
    setinfoname(elem.name)
    setinfodesc(elem.description)
    setinfostat(elem.isCompleted)
    setinfomodal(true)
    setinfoimg(elem.images[0].imageName)
  }
async function editsave() {
  try {
     await axios.put(`${api}api/to-dos`, {
      id: editid ,
      name : editname ,
     description : editdesc ,
     isCompleted : editstat == 'true'
    })
    seteditmodal(false)
    getFetch()
  } catch (error) {
    console.log(error)
  }
}

async function addSave(){
  const newuser = new FormData()

  newuser.append('Name' , addname )
  newuser.append('Description' , adddesc )

  addimg.forEach((file) => {
    newuser.append('Images', file)
  })

  try {
    await axios.post(`${api}api/to-dos` , newuser)
    setaddmodal(false)
    setaddname('')
    setadddesc('')
    setaddimg([])

    getFetch()
  } catch (error) {
    console.log(error)
  }
}

async function dltimg(id){
  try {
    await axios.delete(`${api}api/to-dos/images/${id}`)
    getFetch()
  } catch (error) {
    console.log(error)
  }
}

function imgShow(elem) {
  setimgtodoid(elem.id)   
  setnewimgs([])         
  setimgmodal(true)
}

async function addImgSave() {
  const fd = new FormData()
  newimgs.forEach((file) => fd.append('Images', file))
  try {
    await axios.post(`${api}api/to-dos/${imgtodoid}/images`, fd)
    setimgmodal(false)
    setnewimgs([])
    getFetch()
  } catch (error) {
    console.log(error)
  }
}

async function editImg(todoId, imageId, file) {
  const fd = new FormData()
  fd.append('Images', file)

  try {
    await axios.delete(`${api}api/to-dos/images/${imageId}`)  
    await axios.post(`${api}api/to-dos/${todoId}/images`, fd)
    getFetch()
  } catch (error) {
    console.log(error)
  }
}

let filtered = data.filter((elem)=> elem.name.toLowerCase().includes(search.trim().toLowerCase()))
  return (
    <div className='w-325 m-auto my-25 flex flex-col items-center gap-2'>
<div className='w-full flex items-center justify-between'>
  <input type="search" placeholder='search...' onInput={(e)=> setsearch(e.target.value)} />
    <TooltipProvider>
           <Tooltip>
      <TooltipTrigger render={  <Button onClick={()=>setaddmodal(true)} variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>} />
      <TooltipContent>
        <p>Add User +</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>
      
       <Drawer open={infomodal} swipeDirection="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className='p-10 w-full flex flex-col gap-5 '>
          <img src={`${api}images/${infoimg}`} alt="" />
          <div className='w-full flex items-center justify-between'><p>Name : </p><p>{infoname}</p></div>
                   <div className='w-full flex items-center justify-between'><p>Description : </p><p>{infodesc}</p></div>
            <div className='w-full flex items-center justify-between'><p>Status : </p><p>{infostat ? 'online' : 'offline'}</p></div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button onClick={()=> setinfomodal(false)}>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
        <Dialog open={editmodal} >
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input key={editid} id="name-1" name="name" defaultValue={editname} onChange={(e)=>seteditname(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="desc-1">Description</Label>
              <Input key={editid} id="desc-1" name="desc" defaultValue={editdesc} onChange={(e)=>seteditdesc(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="stat-1">Status</Label>
        <Select
  id="stat-1"
  value={String(editstat)}
  onChange={(value) => seteditstat(String(value))}
  className="w-full"
  options={[
    { value: 'true', label: 'online' },
    { value: 'false', label: 'offline' },
  ]}
/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button onClick={()=>seteditmodal(false)} variant="outline">Cancel</Button>} />
            <Button onClick={editsave} >Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

      <Dialog open={addmodal} >
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
             <Field>
              <Label htmlFor="img-1">Image</Label>
     <Input
  type="file"
  accept="image/*"
  multiple
  id="img-1"
  name="img"
  onChange={(e) => {
    setaddimg((prev) => [...prev, ...Array.from(e.target.files)])
    e.target.value = ''
  }}
/>
<p>Выбрано фото: {addimg.length}</p>
            </Field>
            <Field>
              <Label htmlFor="add-name">Name</Label>
              <Input  id="add-name" name="name" onChange={(e)=>setaddname(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="add-desc">Description</Label>
              <Input  id="add-desc" name="desc" onChange={(e)=>setadddesc(e.target.value)}  />
            </Field>
            <Field>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button onClick={()=>setaddmodal(false)} variant="outline">Cancel</Button>} />
            <Button type="button" onClick={addSave} >Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

    <Dialog open={imgmodal}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add photos</DialogTitle>
          <DialogDescription>Выберите фото для этой карточки.</DialogDescription>
        </DialogHeader>

        <Input
          type="file"
          multiple
          onChange={(e) => {
            setnewimgs((prev) => [...prev, ...Array.from(e.target.files)])
            e.target.value = ''
          }}
        />
        <p>Выбрано фото: {newimgs.length}</p>

        <DialogFooter>
          <Button variant="outline" onClick={() => setimgmodal(false)}>Cancel</Button>
          <Button type="button" onClick={addImgSave} disabled={!newimgs.length}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

     <div className='w-325 m-auto my-20 flex items-center gap-5 flex-wrap justify-between'>
       {
        filtered.map((elem)=> (
       <Card key={elem.id} className="relative mx-auto w-full max-w-sm pt-0">
      <div className='w-full flex overflow-auto h-60'>
        {elem.images.map(image => (
    <div
      key={image.id}
      className="w-full h-full flex-none relative"
    >
      <img
        className="w-full h-full object-cover"
        src={`${api}/images/${image.imageName}`}
        alt={elem.name}
      />
      <button  onClick={()=> dltimg(image.id)} className='absolute top-0 right-0 text-white' >delete</button>

     
      <label className="absolute top-0 left-0 text-white cursor-pointer">
        edit
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => editImg(elem.id, image.id, e.target.files[0])}
        />
      </label>
    </div>
  ))}
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{elem.isCompleted ? 'online' : 'offline'}</Badge>
        </CardAction>
        <CardTitle>{elem.name}</CardTitle>
        <CardDescription>
       {elem.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
         <Menubar className="w-full">
      <MenubarMenu>
        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>  <SettingsIcon className='w-4' /> Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem  onClick={()=> editShow(elem)}>
            <EditIcon/>
              Edit
            </MenubarItem>
            <MenubarItem onClick={()=> imgShow(elem)}>
              <EditIcon/>
              Add photos
            </MenubarItem>
            <MenubarItem onClick={()=> infoshow(elem)} >
              <InfoIcon  />
              Info
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={()=> dltUser(elem.id)} variant="destructive">
              <TrashIcon />
              Delete
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
      </CardFooter>
        
    </Card>
        ))
       }
     </div>
    </div>
  )
}

export default App