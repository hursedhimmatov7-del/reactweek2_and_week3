import { FacebookFilled } from '@ant-design/icons'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='max-w-400 m-auto bg-[#F2F0FE]'>
      <div className='w-325 py-15 m-auto flex flex-col items-center gap-10'>
        <div className='w-full flex items-start justify-between'>
            <div className='flex flex-col items-start gap-8'>
                <p className='font-semibold text-2xl'>Топ категории</p>
                <nav className='flex flex-col items-start gap-2'>
                    <p>Тексты и переводы</p>
                    <p>Разработка</p>
                    <p>Дизайн</p>
                    <p>Аудио, видео монтаж</p>
                    <p>Соцсети и реклама</p>
                    <p>Бизнес и жизнь</p>
                    <p>SEO и оптимизация</p>
                </nav>
            </div>

             <div className='flex flex-col items-start gap-8'>
                <p className='font-semibold text-2xl'>О Проекте</p>
                <nav className='flex flex-col items-start gap-2'>
                    <p>О Нас</p>
                    <p>Как Это Работает</p>
                    <p>Политика Приватности</p>
                    <p>Правила Пользования</p>
                    <p>Пресса о нас</p>
                </nav>
            </div>

             <div className='flex flex-col items-start gap-8'>
                <p className='font-semibold text-2xl'>Поддержка</p>
                <nav className='flex flex-col items-start gap-2'>
                    <p>Контакты</p>
                    <p>Политика Безопасности</p>
                    <p>FAQ</p>
                </nav>
            </div>

               <div className='flex flex-col items-start gap-4'>
                <p className='font-semibold text-2xl'>Follow</p>
                <div className='flex gap-8'>
                   <div className='p-[10px_14px] rounded-[50%] text-white bg-black'>
                      <FacebookIcon />
                   </div>
                   <div className='p-[10px_14px] rounded-[50%] text-white bg-black'>
                      <TwitterIcon />
                   </div>
                   <div className='p-[10px_14px] rounded-[50%] text-white bg-black'>
                      <InstagramIcon />
                   </div>
                   <div className='p-[10px_14px] rounded-[50%] text-white bg-black'>
                      <LinkedInIcon />
                   </div>
                </div>
            </div>
        </div>
        <p className='text-[#706F74]'>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
