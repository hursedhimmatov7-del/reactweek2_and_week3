import React, { useState } from 'react'
import { CircleFadingArrowUpIcon, MoreHorizontalIcon, Search } from "lucide-react"
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
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"


const App = () => {
    const [data ,setData]= useState([
        {
            id:1 ,
            name:"laptop",
            price:'$1200' ,
            status : true
        },
        {
            id:2 ,
            name:"iphone",
            price:'$1000',
            status : false
        }
        ,
        {
            id:3 ,
            name:"ipad",
            price:'$600',
            status : true
        }
        ,
        {
            id:4 ,
            name:"smart-watch",
            price:'$100',
            status : false
        }
    ])
    function dltUser(id){
        setData((prev) => prev.filter((elem) => elem.id !== id))
    }
    let [open , setopen] = useState(false)
    let [openinfo , setopeninfo] = useState(false)
    let [openadd , setopenadd] = useState(false)
    let [editdata , seteditdata] = useState(null)
    let [infodata , setinfodata] = useState(null)
    let [search , setsearch] = useState('')
    const [sort, sortset] = useState("all")
    let [name , setname] = useState('')
    let [price , setprice] = useState('')
      let [namei , setnamei] = useState('')
    let [pricei , setpricei] = useState('')
    let [namea , setnamea] = useState('')
    let [pricea , setpricea] = useState('')
   

    const addsave = (e)=> {
        e.preventDefault()
        let newUser = {
            id: Date.now() ,
            name : namea ,
            price : pricea,
        }
        setData((prev)=> [...prev , newUser])
        setopenadd(false)
    }

    function editShow(product){
        seteditdata(product.id)
        setname(product.name)
        setprice(product.price)
        setopen(true)
    }
     function infoshow(product){
        setinfodata(product.id)
        setnamei(product.name)
        setpricei(product.price)
        setopeninfo(true)
    }
    function editSave(){
        setData((prev) => prev.map((elem)=>
            elem.id == editdata ? {...elem , name , price} : elem
        ))
        setopen(false)
    }
    function chekfunc(id){
    setData((prev)=> prev.map((elem)=> (elem.id == id? {...elem, status : !elem.status}:elem)))
    }
   

let filteredData = data
  .filter((elem) => {
    return elem.name
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  })
  .filter((elem) => {
    if (sort === "online") {
      return elem.status === true
    } else if (sort === "offline") {
      return elem.status === false
    }

    return true
  })
 
    return (
    <div className='m-20 w-325'>
        
<div className='w-full flex items-center justify-between'>
    <div className='flex items-center gap-2'>
    <Select  onValueChange={sortset}>
  <SelectTrigger className="w-full max-w-48">
    <SelectValue>
      {sort}
    </SelectValue>
  </SelectTrigger>

  <SelectContent>
    <SelectGroup>
      <SelectLabel>Sort by Status</SelectLabel>

      <SelectItem value="all">all</SelectItem>
      <SelectItem value="online">online</SelectItem>
      <SelectItem value="offline">offline</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
        <Input  onChange={(e)=> setsearch(e.target.value)} className='w-70' type={Search} placeholder="search product"/>
</div>
  <TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      render={
        <Button onClick={()=> setopenadd(true)}
          variant="outline"
          size="icon"
        >
          <CircleFadingArrowUpIcon />
        </Button>
      }
    />

    <TooltipContent side="top" sideOffset={8}>
      <p>Add Rroduct</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
</div>
          
        <Drawer open={openinfo} swipeDirection="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Product</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div>
            <h1>{namei}</h1>
            <h1>{pricei}</h1>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose onClick={()=>setopeninfo(false)} render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
         <Dialog open={open}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle >Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={name} onChange={(e)=> setname(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input id="username-1" name="username" defaultValue={price} onChange={(e)=> setprice(e.target.value)}/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose onClick={()=> setopen(false)} render={<Button variant="outline">Cancel</Button>} />
            <Button onClick={editSave} type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

    <Dialog open={openadd}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle >Add Product</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={namea} onChange={(e)=>setnamea(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input id="username-1" name="price "defaultValue={pricea} onChange={(e)=>setpricea(e.target.value)} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose onClick={()=> setopenadd(false)} render={<Button variant="outline">Cancel</Button>} />
            <Button onClick={addsave} type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

         <Table className="w-325 m-auto my-10">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {
        filteredData.map((elem)=>(
              <TableRow key={elem.id}>
          <TableCell className="font-medium">{elem.name}</TableCell>
          <TableCell>{elem.price}</TableCell>
          <TableCell><div className='flex items-center gap-1'>{elem.status ? "in" : 'out'} 
      <Field orientation="horizontal">
        <Checkbox onCheckedChange={()=> chekfunc(elem.id)} checked = {elem.status}  id="terms-checkbox-basic" name="terms-checkbox-basic" />
      
      </Field>
   </div></TableCell>
               <Tooltip>
      <TooltipTrigger render={ <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon /><span className="sr-only">Open menu</span></Button>} />
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={()=>editShow(elem)}>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>infoshow(elem)}>info</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=> dltUser(elem.id)} variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>} />
      <TooltipContent>
        <p>Settings</p>
      </TooltipContent>
    </Tooltip>
         
        </TableRow>
        ))
      }
       
      </TableBody>
    </Table>
    </div>
  )
}

export default App
