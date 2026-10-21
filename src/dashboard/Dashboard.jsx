import { CaretDownOutlined, MailOutlined, PhoneFilled, SearchOutlined, TelegramFilled, WhatsAppOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
       <header className='w-325 m-auto my-5 flex flex-col items-center gap-5'>
        <div className='w-full flex items-center justify-between'>
          <Link to={"/"}>  <img src="/public/logo.png" alt="" /></Link>
            <h1>Качественные детали и узлы <br />для сельскохозяйственной техники</h1>
            <h1>звонок бесплатный <br /> <p className='flex gap-1'><PhoneFilled /> 8 800 505 72 32</p></h1>
            <h1>отвечаем быстро <br /><p className='flex gap-1'><MailOutlined /> info@kd-grupp.com</p></h1>
            <div className='flex gap-3'>
                <img src="../../public/vk.png" alt="" />
                <button className='flex gap-3 p-[6px_16px] rounded-2xl bg-[#39B36E] text-white'><WhatsAppOutlined /> WhatsApp</button>
                <button className='flex gap-3 p-[6px_16px] rounded-2xl bg-[#238DBB] text-white'><TelegramFilled /> Telegram</button>
            </div>
        </div>
        <nav className='w-full flex items-center justify-between'>
            <div className='w-[60%] flex items-center justify-between'>
                 <Link className='text-[#39B36E] font-bold' to={`/`}>Главная</Link>
                 <Link to={'Catalog'} className='flex gap-4'>Каталог <CaretDownOutlined /></Link>
                 <Link to={'About'}>О нас</Link>
                 <Link>Новости</Link>
                 <Link>Партнеры</Link>
                 <Link>Контакты</Link>
            </div>
            <div className='flex gap-3 items-center justify-start bg-[#F3F3F3] rounded-2xl p-2'>
                <SearchOutlined />
                <input className='outline-0' type="search" placeholder='поиск по каталогу' />
            </div>
        </nav>
       </header>
      <Outlet/>
    </div>

  )
}

export default Dashboard