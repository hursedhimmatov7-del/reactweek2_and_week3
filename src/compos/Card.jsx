import React from 'react'

const Card = ({img , name}) => {
  return (
    <div className='w-[32%] flex flex-col items-start gap-6 shadow-md p-6 rounded-xl'>
       <div className='w-full overflow-auto scrollbar-hide'>
        <div className='flex items-center gap-6  '>
        <img className='w-12 h-12' src={img} alt="" />
        <p className='font-bold text-xl whitespace-nowrap'>{name}</p>
       </div>
       </div>
       <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
        <button className='w-full rounded-2xl py-2 border-2 border-[#1DBF73] hover:bg-[#1DBF73] hover:text-white transition duration-300'>Посмотреть</button>
    </div>
  )
}

export default Card
