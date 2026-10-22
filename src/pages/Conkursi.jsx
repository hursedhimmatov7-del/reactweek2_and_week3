import React from 'react'
import { Link } from 'react-router'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Footer from '@/compos/Footer';



const Conkursi = () => {
  return (
    <div>
       <div className='max-w-400 bg-[#F7F6FF] m-auto'>
         <header className='w-325 m-auto py-5 flex items-center justify-between'>
        <aside className='flex items-center gap-20'>
          <img className='w-[20%]' src="../../public/worktap.png" alt="" />
           <nav className='flex items-center gap-10'>
              <Link to={'/'}>Биржа</Link>
              <Link to={'/worki'}>Ворки</Link>
              <Link to={'/Conkursi'}>Конкурсы</Link>
              <Link to={'/Makeworks'}>Создать ворк</Link>
              <Link to={'/Makeorder'}>Создать заказ</Link>
           </nav>
        </aside>
        <div className='flex items-center gap-6'>
           <img src="../../public/a1.png" alt="" />
           <img src="../../public/a2.png" alt="" />
           <img src="../../public/a3.png" alt="" />
           <p>Ернар Ибрагимов</p>
           <img className='w-10 h-10' src="../../public/a4.png" alt="" />
           <KeyboardArrowDownIcon/>
        </div>
      </header>
     </div>

     <section className='max-w-400 m-auto bg-[#F7F6FF]'>
      <div className='w-325 m-auto py-20 flex items-center justify-between'>
        <div className='flex flex-col items-start w-[50%] gap-8'>
          <p className='text-xl text-[#FBA457]' >Дизайнер </p>
          <p className='text-3xl font-semibold '><span className='text-[#1DBF73]' >Ернар </span>Ибрагимов</p>
          <p>Работаю дизайнером с 1999 года. <br />
Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских <br /> домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
           <div className='w-[90%] flex flex-wrap gap-8'>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Figma </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Adobe photoshop</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Adobe illustrator</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Corel draw </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Adobe After Effects</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>HTML/CSS</p>
              </div>
              <div className='w-[80%] py-3 rounded-2xl bg-[#F2F0FE] flex items-center justify-between px-10'>
                <p>Показать подробную информацию</p>
           <KeyboardArrowDownIcon/>
              </div>
         </div>
         <div className='w-[45%] h-120 flex items-center justify-center relative'>
          <img className='absolute bottom-0 right-[30%] z-20' src="../../public/s1.png" alt="" />
          <img className='absolute bottom-20 right-10 z-0' src="../../public/s2.png" alt="" />
          <img className='absolute bottom-20 left-20 z-0' src="../../public/s3.png" alt="" />
          <img className='absolute bottom-[40%] left-10 z-20' src="../../public/s4.png" alt="" />
          <img className='absolute top-[30%] right-15 z-20' src="../../public/s5.png" alt="" />
          <img className='absolute top-[13%] right-30 z-20' src="../../public/s6.png" alt="" />
          <img className='absolute top-[13%] left-10 z-20' src="../../public/s7.png" alt="" />
          <img className='relative w-[60%] z-10 ' src="../../public/a5.png" alt="" />
         </div>
      </div>
     </section>

     <section className='w-325 m-auto flex flex-col items-start gap-12 my-15'>
      <p className='text-3xl font-semibold'>Мой ворки</p>
      <div className='w-full flex flex-wrap gap-4 gap-y-8'>
        <div className='w-[23%] h-60 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-6'>
           <AddCircleIcon fontSize='large' sx={{color:"#1DBF73",}}/>
           <p className='text-3xl font-semibold text-[#1DBF73]'>Создать ворк</p>
          </div>
        </div>
        <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
         <div className='w-[23%] h-60 flex flex-col items-start gap-2'>
          <img  className='w-full' src="../../public/f.png" alt="" />
          <p>Дизайн сайта</p>
          <p className='text-[#1DBF73]'>50 000 тенге</p>
        </div>
      </div>
      <button className='p-[15px_30px] self-center border-2 border-[#1DBF73] rounded-2xl text-[#1DBF73] '>Загрузить еще</button>
     </section>

     <section className='w-325 m-auto my-15 flex flex-col items-start gap-8'>
      <p className='text-2xl font-semibold'>Отзывы</p>
      <div className='flex gap-6'>
        <p className='text-[#1DBF73]'>Положительные (65)</p>
        <p>Отрицательные(10)</p>
      </div>
        <div className='w-full flex flex-wrap gap-4 gap-y-16'>
          <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
             <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
             <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
             <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
             <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
             <div className='w-[32%] flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <div className='w-20 h-20 rounded-[50%] inline-block bg-[#C4C4C4]'></div>
              <div className='flex flex-col items-start gap-2'>
                <p>Никита Евреев</p>
                <img className='w-[70%]' src="../../public/st.png" alt="" />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
        </div>
      <button className='p-[15px_30px] self-center border-2 border-[#1DBF73] rounded-2xl text-[#1DBF73] '>Загрузить еще</button>
     </section>

     <Footer/>
    </div>
  )
}

export default Conkursi
