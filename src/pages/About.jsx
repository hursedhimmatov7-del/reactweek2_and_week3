import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const About = () => {
    const api = 'https://to-dos-api.softclub.tj'
    const [data , setdata] = useState([])
    const [index , setindex] = useState({index:0})
    const [search , setsearch] = useState('')
    const [sort , setsort] = useState('all')


    async function chekFunc(id) {
        try {
            await axios.put(`${api}/completed?id=${id}`)
            getFetch()
        } catch (error) {
            console.log(error)
        }
    }
    

    async function getFetch() {
        try {
            let {data} = await axios.get(`${api}/api/to-dos`)
            setdata(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
     getFetch()
    } , [] )

 async function dltUser(id) {
    try {
        await axios.delete(`${api}/api/to-dos?id=${id}`)
        getFetch()
    } catch (error) {
        console.log(error)
    }
}

    const filtered = data.filter((elem) => elem.name.toLowerCase().includes(search.trim().toLowerCase())).filter((elem)=> {
        if(sort == 'true') return elem.isCompleted == true
       else if(sort == 'false') return elem.isCompleted == false
       return true
    })
  return (
    <div>
     <section className='max-w-400 m-auto bg-[#FEDAD5]'>
            <div className='w-325 m-auto py-20 flex items-center justify-between'>
                <div className='flex items-start flex-col gap-8'>
                    <p className='font-bold text-6xl'>Enjoy studying <br />
with Createx <br /> Online Courses</p>
<div className='flex items-center gap-6'><button className='p-[20px_30px] rounded-xl border-2 border-[#F95316] text-[#F95316] '>About us</button>
<button className='p-[20px_30px] rounded-xl bg-[#F95316] text-white '>Explore courses</button></div>
                </div>
                <img className='w-[40%]' src="../../public/illustration.png" alt="" />
            </div>
        </section>

        <section className='w-325 m-auto my-15  flex items-center justify-between'>
            <img src="../../public/image.png" alt="" />
            <div className='flex flex-col items-start gap-6'>
                <p>Who we are</p>
                <p className='text-4xl font-semibold'>Why Createx?</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <button className='p-[20px_30px] rounded-xl bg-[#F95316] text-white'>More about us</button>
            </div>
        </section>

        <section className='w-325 m-auto my-15 flex flex-col items-start gap-8'>
            <p>Ready to learn?</p>
            <div className='w-full flex items-center justify-between'>
                <p className='text-4xl font-semibold'>Featured Courses</p>
                <button className='p-[20px_30px] rounded-xl border-2 text-[#F95316] border-[#F95316] '>View all courses</button>
            </div>
              <div className='w-full flex flex-wrap gap-4'>
                    <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>

                      <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>

                      <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>

                      <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>

                      <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>

                      <div className='w-[48%] flex gap-8 border-2 items-center border-gray-700'>
                        <img src="../../public/gg.jpg" alt="" />
                        <div className='flex flex-col items-start gap-3 p-8'>
                            <p className='p-2 text-white rounded-xl bg-[#03CEA4]'>Marketing</p>
                            <p className='text-2xl font-semibold'>The Ultimate Google Ads Training Course</p>
                            <p><span className='text-[#F95316]'>$100 </span> by Jerome Bell</p>
                        </div>
                    </div>
                </div>
        </section>

        <section className='w-325 m-auto flex flex-col  my-15 items-center gap-12'>
            <p>Our benefits</p>
            <p className='text-4xl font-semibold'>That’s how we do it</p>
            <div className='w-full flex items-center justify-between'>
                <p className='border-2 border-[#F95316] text-[#F95316] p-3 rounded-xl'>  Experienced Tutors</p>
                <p>Feedback & Support</p>
                <p>24/7 Online Library</p>
                <p>Community</p>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col items-start gap-8'>
                    <p className='text-2xl font-semibold'>Only practicing tutors</p>
                   <p className='w-[60%]'>
                    Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                   </p>
                </div> 
                <img src="../../public/w.png" alt="" />
            </div>
        </section>
        
       <section className='max-w-400 my-15 bg-[#F4F5F6] '>
        <div className='w-325 m-auto py-20 flex flex-col items-start gap-12'>
            <p>Best tutors are all here</p>
            <div className='w-full flex items-center justify-between'>
                <p className='text-3xl font-semibold'>Meet our team</p>
                <div className='flex items-center gap-5'>
                    <button className='p-[10px_15px] rounded-xl border-2 text-[#FF3F3A] '>prev</button>
                    <button className='p-[10px_15px] rounded-xl bg-[#FF3F3A] text-white'>next</button>
                </div>
                 </div>
                 <div className='w-full flex items-start gap-4'>
                    <input onChange={(e)=>setsearch(e.target.value)} type="search" placeholder='search'  className='p-3 border-2  border-[#FF3F3A] text-[#FF3F3A] ' />
                    <select onChange={(e)=>setsort(e.target.value)} className='p-3 border-2  border-[#FF3F3A] text-[#FF3F3A] ' >
                        <option value="all">all</option>
                        <option value="true">online</option>
                        <option value="false">offline</option>
                    </select>
                    <button className='p-3 border-2  border-[#FF3F3A] text-[#FF3F3A] '>adduser</button>
                 </div>
                 
                 <div className='w-full flex flex-wrap gap-4 m'>
                    {
                   filtered.map((elem) => {
                    return <div key={elem.id} className='w-[24%] border-2 text-xl font-semibold border-[#FF3F3A] p-5 rounded-md flex flex-col items-center gap-6'>
                      <img className='w-15 h-15 rounded-[50%] relative'  src={index.id == elem.id ? api + "/images/" + elem?.images[index.index]?.imageName : api + "/images/" + elem?.images[0]?.imageName  } alt="" />
                        <p>{elem.name}</p>
                        <div className='flex items-center gap-2'>
                            <p>{elem.isCompleted ? 'online' : 'offline'}</p>
                            <input type="checkbox" checked = {elem.isCompleted} onChange={()=>chekFunc(elem.id)} />
                        </div>
                        <div className='flex items-center gap-3'>
                            <button onClick={()=> dltUser(elem.id)} className='p-[6px_12px] border-2 border-[#FF3F3A] text-[#FF3F3A] rounded-md'>delete</button>
                            <button className='p-[6px_12px] border-2 border-[#FF3F3A] text-[#FF3F3A] rounded-md'>edit</button>
                           <Link to={'about/' + elem.id} className='p-[6px_12px] border-2 border-[#FF3F3A] text-[#FF3F3A] rounded-md'> info</Link>
                        </div>
                    </div>
                   })
                    }
                 </div>
        </div>
       </section>

       <section className='w-325 m-auto flex items-start flex-col gap-10'>
        <p>Our blog</p>
        <div className='w-full flex items-center justify-between'>
            <p className='text-3xl font-semibold'>Latest posts</p>
             <button className='p-[10px_15px] rounded-xl bg-[#FF3F3A] text-white'>Go to blog</button>
        </div>
            <div className='w-full flex items-center justify-between'>
                <div className='w-[32%] flex flex-col items-start gap-5'>
                     <img src="../../public/im.png" alt="" />
                     <p>Marketing
September 4, 2020
36 min</p>
<p className='font-semibold'>What is traffic arbitrage and does it really make money?</p>
<p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
<p>Listen</p>
                </div>

                    <div className='w-[32%] flex flex-col items-start gap-5'>
                     <img src="../../public/im.png" alt="" />
                     <p>Marketing
September 4, 2020
36 min</p>
<p className='font-semibold'>What is traffic arbitrage and does it really make money?</p>
<p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
<p>Listen</p>
                </div>

                    <div className='w-[32%] flex flex-col items-start gap-5'>
                     <img src="../../public/im.png" alt="" />
                     <p>Marketing
September 4, 2020
36 min</p>
<p className='font-semibold'>What is traffic arbitrage and does it really make money?</p>
<p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
<p>Listen</p>
                </div>
             </div>
       </section>

       <section className='max-w-400 bg-[#FEDCD1] my-15'>
        <div className='w-325 py-20 m-auto flex  flex-col items-center gap-10 text-center'>
            <p>Don’t miss anything</p>
            <p className='text-4xl font-bold'>Subscribe to the Createx School <br /> announcements</p>
            <div className='flex items-center gap-8'>
                <input type="search" placeholder='Your working email' className='outline-0 bg-white py-4 px-5 rounded-xl w-75' />
                <button className='p-[10px_15px] rounded-md bg-[#F95514] text-white ' >Your working email</button>
            </div>
        </div>
       </section>

       <footer className='max-w-400 m-auto mt-15 bg-[#1E212C]'>
        <div className='w-325 m-auto text-white py-20 flex items-start justify-between'>
            <div className='flex w-[30%] text-white items-start gap-4 flex-col'>
                <img src="../../public/logo.png" alt="" />
                <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
                <img src="../../public/socials.png" alt="" />
            </div>
                 <div className='flex flex-col items-start gap-3'>
                <p className='text-2xl font-semibold'>SITE MAP</p>
                <p>  About Us</p>
                <p>Courses</p>
                <p>Event</p>
                <p>Blog</p>
                <p>ontacts</p>
            </div>

             <div className='flex flex-col items-start gap-3'>
                <p className='text-2xl font-semibold'>COURSES</p>
                <p>  About Us</p>
                <p>Courses</p>
                <p>Event</p>
                <p>Blog</p>
                <p>ontacts</p>
            </div>

             <div className='flex flex-col items-start gap-3'>
                <p className='text-2xl font-semibold'>CONTACT USP</p>
                <p>  About Us</p>
                <p>Courses</p>
                <p>Event</p>
                <p>Blog</p>
                <p>ontacts</p>
            </div>

             <div className='flex flex-col items-start gap-3'>
                <p className='text-2xl font-semibold'>SITE MAP</p>
                <p>  About Us</p>
                <p>Courses</p>
                <p>Event</p>
                <p>Blog</p>
                <p>ontacts</p>
            </div>
        </div>
       </footer>
    </div>
  )
}

export default About
