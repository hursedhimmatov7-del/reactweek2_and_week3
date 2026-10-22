import React from 'react'
import { Link } from 'react-router'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/compos/Footer';

const Makeworks = () => {
  return (
    <div>
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
    </div>

    <section className='max-w-400 m-auto bg-[#F6FAFD]'>
      <div className='w-325 m-auto py-20 flex flex-col items-center gap-10 '>
        <p className='text-3xl font-black'>Мой <span className='text-[#FBA457]'>кошелек</span></p>
        <div className='w-full h-75 flex items-center justify-between'>
          <div className='w-[50%] flex flex-wrap gap-4'>
           <div className='w-[48%] flex items-center justify-center p-10 rounded-2xl border border-gray-700'>
            <div className='flex flex-col items-center gap-3'>
              <p>Чистый доход</p>
              <p className='font-semibold'>1 000 000 тенге</p>
            </div>
           </div>
             <div className='w-[48%] flex items-center justify-center p-10 rounded-2xl border border-gray-700'>
            <div className='flex flex-col items-center gap-3'>
              <p>Чистый доход</p>
              <p className='font-semibold'>1 000 000 тенге</p>
            </div>
           </div>
             <div className='w-[48%] flex items-center justify-center p-10 rounded-2xl border border-gray-700'>
            <div className='flex flex-col items-center gap-3'>
              <p>Чистый доход</p>
              <p className='font-semibold'>1 000 000 тенге</p>
            </div>
           </div>
             <div className='w-[48%] flex items-center justify-center p-10 rounded-2xl border border-gray-700'>
            <div className='flex flex-col items-center gap-3'>
              <p>Чистый доход</p>
              <p className='font-semibold'>1 000 000 тенге</p>
            </div>
           </div>
          </div>
          <div className='w-[45%] h-full border border-gray-700 rounded-2xl p-10 flex items-center justify-center'>
         <div className='flex h-full flex-col items-center justify-between'>
             <p>Доступна сумма для вывода</p>
             <p className='text-[#1DBF73]'>250 000 тенге</p>
             <p>Вывести средства на</p>
             <img src="../../public/Frame.png" alt="" />
           </div>
          </div>
        </div>
      </div>
    </section>

    <section className='max-w-400 m-auto bg-[#F6FAFD]'>
      <div className='w-325 m-auto py-20 flex flex-col items-start gap-12'>
        <p className='text-3xl font-semibold'>История</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Операция </th>
              <th>Дата операции</th>
              <th>Сумма</th>
              <th>Hash операции </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="../../public/f1.png" alt="" /></td>
              <td>Пополнение баланса</td>
              <td>22 октября, 2021 года</td>
              <td>150 000 тенге</td>
              <td>c2d5abbb5d87eb9d0378e187ff0e9df5a97adf68</td>
            </tr>

              <tr>
              <td><img src="../../public/fr2.png" alt="" /></td>
              <td>Вывод средств</td>
              <td>15 октября, 2021 года</td>
              <td>300 000 тенге</td>
              <td>826ad6e3c5757747304a0c7aff4e00f6ffacd832</td>
            </tr>

              <tr>
              <td><img src="../../public/fr3.png" alt="" /></td>
              <td>Покупка услуги</td>
              <td>14 сентября, 2021 года</td>
              <td>200 000 тенге</td>
              <td>987829a3bdb628cb8bb69d4ad1eedce6193792ac</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <Footer/>
    </div>
  )
}

export default Makeworks
