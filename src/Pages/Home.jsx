import React from 'react';
import HomeBooks from '../Components/HomeBooks';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mx-auto mt-20 max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div className='bg-[#1313130D] rounded-lg p-3 lg:p-28 items-center flex flex-col-reverse lg:flex-row lg:justify-between'>
        <div className='lg:basis-1/2 py-5'>
          <p className='lg:text-5xl text-xl py-3 lg:my-10 lg:max-w-[30rem] font-semibold'>
            Books to freshen up your bookshelf
          </p>
          <NavLink
            className='group relative inline-flex items-center overflow-hidden rounded bg-[#23BE0A] px-8 py-3 text-white focus:outline-none focus:ring active:scale-95 duration-150'
            to='/ListedPages'>
            <span className='absolute -end-full transition-all group-hover:end-4'>
              <svg
                className='size-5 rtl:rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:me-4'>
              {' '}
              View The List{' '}
            </span>
          </NavLink>
        </div>
        <div className='lg:basis-1/2 flex justify-center lg:justify-end'>
          <img
            className=' rounded-lg lg:w-1/2'
            src='https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png'
            alt=''
          />
        </div>
      </div>
      <div className='mt-10'>
        <p className='text-2xl lg:text-4xl text-center font-semibold'>Books</p>
        <HomeBooks></HomeBooks>
      </div>
    </div>
  );
};

export default Home;
