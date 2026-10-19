import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontalIcon } from 'lucide-react'
import axios from 'axios'
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

const App = () => {
    let api = 'https://to-dos-api.softclub.tj'
     let [data , setdata] = useState([])
     const [trig ,settrig] = useState(false)

     let [addmodal , setaddmodal] = useState(false)
     let [addimg , setaddimg ] = useState([])
     let [addname , setaddname ] = useState('')
     let [adddesc , setadddesc ] = useState('')

          let [infomodal , setinfomodal] = useState(false)
          let [infoname  , setinfoname ] = useState('')
          let [infodesc ,  setinfodesc ] = useState('')

       let [editmodal , seteditmodal] = useState(false)
       let [editname ,  seteditname ] = useState(null)
       let [editid ,  seteditid ] = useState(null)
       let [editdesc ,  seteditdesc ] = useState(null)

       let [search ,setsearch] = useState('')
       let [sort ,setsort] = useState("all")

       let [imgmodal , setimgmodal] = useState(false)
       let [images , setimages] = useState([])
       let [imgid , setimgid]= useState(null)
 
     const [index , setindex] = useState({id:null , index : 0})

     async function getFetch() {
        try {
          let {data} =  await axios.get(`${api}/api/to-dos`)
            setdata(data.data)
        } catch (error) {
            console.log(error)
        }
     }
     useEffect(()=> {
        if(trig){
            getFetch()
        }
        return ()=> {
            settrig(true)
        }
     } , [trig])


     
async function addsave() {
   let newUser = new FormData()
    {
    addimg.map((file) => {
     return   newUser.append("images" , file)
    }
     
    )
   }
   newUser.append("name" , addname)
   newUser.append("description" , adddesc)
    try {
        await axios.post(`${api}/api/to-dos` , newUser)
        getFetch()
        setaddmodal(false)
        setaddname('')
        setadddesc('')
        setaddimg([])
    } catch (error) {
        console.log(error)
    }
}

async function chekfunc(id) {
    try {
        await axios.put(`${api}/completed?id=${id}`)
        getFetch()
    } catch (error) {
        console.log(error)
    }
}

function editShow(elem){
seteditid(elem.id)
seteditname(elem.name)
seteditdesc(elem.description)
seteditmodal(true)
}
async function editsave() {
    try {
        await axios.put(`${api}/api/to-dos`, {
            id: editid , 
            name : editname ,
            description : editdesc
        })
getFetch()
seteditmodal(false)
    } catch (error) {
        console.log(error)
    }
}
function infoshow(elem){
    setinfoname(elem.name)
    setinfodesc(elem.description)
     setinfomodal(true)
}

let filtered = data.filter((elem)=> elem.name.toLowerCase().includes(search.trim().toLowerCase())).filter((elem)=> {
if(sort == "true")return elem.isCompleted == true
else if(sort == "false")return elem.isCompleted == false
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
    setimgmodal(true)
}

async function imgsave() {
    let newimg = new FormData()
      {
    images.map((file) => 
     newimg.append("images" , file)
    )
   }
    try {
        await axios.post(`${api}/api/to-dos/${imgid}/images` , newimg)
        getFetch()
        setimgmodal(false)
        setimages([])
    } catch (error) {
        console.log(error)
    }
}

function addclose(){
     setaddmodal(false)
     setaddname('')
     setaddimg([])
     setadddesc('')
}

function close(){
    seteditmodal(false)
   
    setimgmodal(false)
    setinfomodal(false)
}
async function  dltuser(id) {
    try {
        await axios.delete(`${api}/api/to-dos?id=${id}`)
        getFetch()
    } catch (error) {
        console.log(error)
    }
    
}
  return (
    <div>
        



        <Drawer open={infomodal} swipeDirection="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
         <div className='w-full p-10 flex flex-col items-center gap-3'>
            <div className='w-full flex items-center justify-between'><h1>name</h1><h1>{infoname}</h1></div>
            <div className='w-full flex items-center justify-between'><h1>description</h1><h1>{infodesc}</h1></div>
         </div>
        <DrawerFooter>
          <DrawerClose render={<Button onClick={close}>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    
         <div className='w-325 m-auto mt-10 flex items-center justify-between'>
            <h1>Panel</h1>
           <div className='flex items-center gap-3'>
            <select onChange={(e)=> setsort(e.target.value)}>
                <option value="all">all</option>
                <option value="true">online</option>
                <option value="false">offline</option>
            </select>
            <input type="search" placeholder='search...' onInput={(e)=>setsearch(e.target.value)} />
             <Button onClick={()=>setaddmodal(true)}>add new user +</Button>
           </div>
         </div>

          <Dialog open={addmodal}>
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
              <Label htmlFor="name-1">Image</Label>
              <Input type='file' multiple id="name-1" name="name" onChange={(e) => setaddimg(Array.from(e.target.files))}  />
            </Field>
            <Field>
                <p>Фото выбрано : {addimg.length}</p>
            </Field>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={addname} onChange={(e)=> setaddname(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue={adddesc} onChange={(e)=> setadddesc(e.target.value)} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button  onClick={addclose} variant="outline">Cancel</Button>} />
            <Button onClick={addsave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>


      <Dialog open={imgmodal}>
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
              <Label htmlFor="name-1">Image</Label>
              <Input type='file' multiple id="name-1" name="name" onChange={(e) => setimages(Array.from(e.target.files))}   />
            </Field>
            <Field>
                <p>Фото выбрано : {images.length}</p>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button onClick={close}  variant="outline">Cancel</Button>} />
            <Button onClick={imgsave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>


      <Dialog open={editmodal}>
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
              <Input id="name-1" name="name" defaultValue={editname} onChange={(e)=> seteditname(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue={editdesc} onChange={(e)=> seteditdesc(e.target.value)} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button onClick={close} variant="outline">Cancel</Button>} />
            <Button onClick={editsave} >Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>


         
       <Table className="w-325  m-auto mt-20">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>AVATAR</TableHead>
          <TableHead >STATUS</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {
        filtered.map((elem) => (
               <TableRow key={elem.id}>
          <TableCell className="font-medium">{elem.id}</TableCell>
          <TableCell>{elem.name}</TableCell>
          <TableCell className="flex items-center gap-1">
          <div className='flex items-center gap-2 '>
          <button disabled={elem.images.length < 2} onClick={() => setindex((prev)=> prev.index<1?{id:elem.id , index : elem.images.length -1}:{id:elem.id , index:prev.index-1} )}  className='border border-gray-400 p-2 rounded-md text-[10px]'>prev</button>
             {
              <div className='relative'>
                          <img className='w-15 h-15 rounded-[50%] relative'  src={index.id == elem.id ? api + "/images/" + elem?.images[index.index]?.imageName : api + "/images/" + elem?.images[0]?.imageName  } alt="" />
                          <p onClick={()=> dltimg(elem.images[index.index].id)} className='absolute right-0 top-0 border'>X</p>
              </div>
             }
              <button disabled={elem.images.length < 2} onClick={() => setindex((prev)=> prev.index==elem.images.length -1?{id:elem.id , index : 0}:{id:elem.id , index:prev.index+1} )}  className='border text-[10px] border-gray-400 p-2 rounded-md'>next</button>
           </div>
          </TableCell>
          <TableCell>{elem.isCompleted ? 'online' : 'offline'} <input type="checkbox" checked={elem.isCompleted} onChange={()=> chekfunc(elem.id)} /></TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon /><span className="sr-only">Open menu</span></Button>} />
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={()=>editShow(elem)}>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>infoshow(elem)}>info</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>imgshow(elem)} >Add Image</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=>dltuser(elem.id)} variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        ))
      }
      
      </TableBody>
    </Table>
    </div>
  )
}

export default App
