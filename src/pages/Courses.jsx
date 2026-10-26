import React from 'react'

const Courses = () => {

  return (
    <div>
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
                <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
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

export default Courses
