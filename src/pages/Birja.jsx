import Footer from '@/compos/Footer'
import  Card  from '../compos/Card'
import React from 'react'

const Birja = () => {
  const data = [
  {
    id: 1,
    name: 'Марина Королёва',
    profession: 'Разработчик PHP',
    projects: 65,
    img: '../../public/marina.png',
  },
  {
    id: 2,
    name: 'Семён Сергеев',
    profession: 'Копирайтер',
    projects: 104,
    img: '../../public/semen.png',
  },
  {
    id: 3,
    name: 'Ангелина Сорокина',
    profession: 'Дизайнер сайтов',
    projects: 25,
    img: '../../public/angelina.png',
  },
  {
    id: 4,
    name: 'Никита Зайцев',
    profession: 'Маркетолог',
    projects: 144,
    img: '../../public/nikita.png',
  },
  {
    id: 5,
    name: 'Наталья Захарова',
    profession: 'Motion дизайнер',
    projects: 71,
    img: '../../public/natalya.png',
  },
]
  return (
    <div >
      <div className='m-auto max-w-400 border-2 border-black border-dashed bg-[#F7F6FF]'>
          <section className='w-325 m-auto flex items-center justify-between pt-10 pb-30'>
            <aside className='flex flex-col items-start gap-8 w-[45%]'>
              <p className='font-semibold text-4xl'>Покупайте фриланс-услуги в <span className='text-[#1DBF73]'>два клика</span></p>
              <p className='text-xl'>Ворк — единица работы продавца, которую <br /> можно купить как товар в магазине </p>
              <div className='w-[80%] flex items-center justify-between bg-[#F2F0FE] rounded-4xl'>
                <input className='outline-0 p-3' type="search" placeholder='Что нужно сделать?' />
                <button className='bg-[#FBA457] p-[12px_40px] rounded-4xl text-white'>Найти</button>
              </div>
              <p>Выберите рубрику, чтобы начать</p>
              <div className='w-[90%] flex flex-wrap gap-8'>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Тексты и переводы </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Разработка</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Дизайн</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Аудио, видео монтаж </p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>SEO и оптимизация</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Бизнес и жизнь</p>
                <p className='p-[5px_12px] bg-[#F7F6FF] rounded-3xl'>Соцсети и реклама</p>
                <p className='p-[5px_12px] border-[#FBA457] border-2 text-[#FBA457] rounded-3xl'>Все категории</p>
              </div>
            </aside>
          <img className='w-[50%]' src="../../public/Group.png" alt="" />
        </section>
      </div>


        <section className='w-325 m-auto my-20 flex flex-col items-start gap-15'>
          <p className='font-bold text-3xl'>Актуальные ворки</p>
          <div className='w-full flex flex-wrap gap-4'>
            <Card img="../../public/Ellips.png" name="Сделать дизайн интернет-магазина"/>
            <Card img="../../public/e2.png" name="Верстка landing page"/>
            <Card img="../../public/e3.png" name="Сделать дизайн сайта-каталога и посадить на какой нибудь ко..."/>
            <Card img="../../public/e4.png" name="Продвижение instagram "/>
            <Card img="../../public/e5.png" name="Срочно! Нужен веб дизайнер!"/>
            <div className='w-[32%] h-72 bg-[#F2F0FE] flex items-center justify-center rounded-2xl shadow-md text-[#1DBF73] font-bold'>Смотреть все ворки</div>
          </div>
        </section>

        <section className='w-325 m-auto my-10 flex flex-col items-start gap-10'>
          <p className='font-bold text-3xl'>Топ фрилансеров</p>
          <div className='w-full flex flex-wrap items-center gap-4 gap-y-8'>
            {
              data.map((elem)=>{
                return <div key={elem.id} className='w-[32%] h-70 flex flex-col items-center gap-6 gap-y-8 p-6 shadow-md'>
                   <div className='w-full flex items-center justify-between'>
                    <img className='w-[40%]' src={elem.img} alt="" />
                    <div className='flex flex-col items-start gap-2'>
                      <p>{elem.name}</p>
                      <p className='text-[#FBA457] font-semibold'>{elem.profession}</p>
                      <p>Выполено проектов: {elem.projects}</p>
                      <img src="../../public/st.png" alt="" />
                    </div>
                   </div>
                   <button className='w-full py-2 rounded-3xl border-2 border-[#1DBF73] hover:bg-[#1DBF73] transition duration-300 hover:text-white'>Написать</button>
                </div>
              })
            }
            <div className='w-[32%] h-70 flex items-center justify-center bg-[#F2F0FE] shadow-md font-bold text-[#1DBF73]'>Посмотреть всех ТОП фрилансеров</div>
          </div>
        </section>

                <section className='w-325 m-auto my-10 flex flex-col items-start gap-10'>
          <p className='font-bold text-3xl'>Топ фрилансеров</p>
          <p>Идеально подходит для бизнеса и частных лиц</p>     
          <div className='w-full flex items-center justify-between'>
           <div className='w-[32%] flex flex-col items-start gap-6'>
             <img src="../../public/g1.png" alt="" />
             <p className='text-xl font-semibold'>Выберите услугу</p>
             <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
           </div>
            <div className='w-[32%] flex flex-col items-start gap-6'>
             <img src="../../public/g2.png" alt="" />
             <p className='text-xl font-semibold'>Оплатите</p>
             <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
           </div>
            <div className='w-[32%] flex flex-col items-start gap-6'>
             <img src="../../public/g3.png" alt="" />
             <p className='text-xl font-semibold'>Получите результат</p>
             <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
           </div>
            </div>   
        </section>

        <section className='max-w-400 m-auto h-160 mt-30 bg-[url(../../public/bg.png)]'>
           <div className='w-300 py-10 m-auto flex flex-col items-start gap-12'>
             <p className='text-2xl text-white'>Как WorkTap помогает бизнесу?</p>
             <div className='w-[40%] flex flex-col items-start gap-8'>
              <div className='w-full bg-white rounded-2xl py-3 px-10 flex items-center gap-7'>
                <img src="../../public/c1.png" alt="" className='w-[10%]'/>
                <p className='text-[#222222]'>Оплачивайте с р/с или карты компании</p>
              </div>

                <div className='w-full bg-white rounded-2xl py-3 px-10 flex items-center gap-7'>
                <img src="../../public/c2.png" alt="" className='w-[10%]'/>
                <p className='text-[#222222]'>Экономьте до 87% бюджета на фрилансе</p>
              </div>

                <div className='w-full bg-white rounded-2xl py-3 px-10 flex items-center gap-7'>
                <img src="../../public/c3.png" alt="" className='w-[10%]'/>
                <p className='text-[#222222]'>Экономьте до 75% времени на решении фриланс задач</p>
              </div>
             </div>
             <p className='text-white text-3xl font-semibold'>WorkTap — быстро, просто и безопасно!</p>
             <button className='p-[20px_60px] text-2xl bg-[#5E4EDB] text-white font-bold rounded-4xl'>Начать!</button>
           </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Birja
