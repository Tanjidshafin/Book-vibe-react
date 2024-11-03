import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ReadBooks from '../Components/ReadBooks';
import Wishlist from '../Components/Wishlist';
import { toast } from 'react-toastify';

const ListedPages = () => {
  const [toggle, setToggle] = useState('Read');
  const [sortCriteria, setSortCriteria] = useState('');
  const { books } = useContext(AppContext);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);

    if (criteria === 'rating') {
      toast.success('Sorted by Rating');
    } else if (criteria === 'pages') {
      toast.success('Sorted by Page Numbers');
    } else {
      toast.success('Sorted by Publishing Years');
    }
  };

  return (
    <div className='mx-auto mt-20 max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <p className='text-2xl lg:text-4xl font-semibold bg-gray-100 text-center py-4 rounded-md'>
        Books
      </p>
      <div className='flex gap-3 justify-center mt-4 flex-col lg:flex-row'>
        <a
          onClick={() => handleSort('rating')}
          className='cursor-pointer text-center rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'>
          Sort By Rating
        </a>
        <a
          onClick={() => handleSort('pages')}
          className='cursor-pointer text-center rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'>
          Sort By Page Numbers
        </a>
        <a
          onClick={() => handleSort('year')}
          className='cursor-pointer text-center rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'>
          Sort By Publishing Years
        </a>
      </div>
      <div className='mt-5 flex items-center'>
        <p
          onClick={() => setToggle('Read')}
          className={`p-4 font-semibold cursor-pointer ${
            toggle === 'Read'
              ? 'rounded-md rounded-b-none border-b-0 border-2'
              : ''
          }`}>
          Read Books
        </p>
        <p
          onClick={() => setToggle('Wishlist')}
          className={`p-4 font-semibold cursor-pointer ${
            toggle === 'Wishlist'
              ? 'rounded-md rounded-b-none border-b-0 border-2'
              : ''
          }`}>
          Wishlist Books
        </p>
      </div>
      <div>
        {toggle === 'Read' ? (
          <ReadBooks sortCriteria={sortCriteria} />
        ) : (
          <Wishlist sortCriteria={sortCriteria} />
        )}
      </div>
    </div>
  );
};

export default ListedPages;
