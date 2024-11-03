import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ReadBooks = ({ sortCriteria }) => {
  const { readBooks } = useContext(AppContext);

  const sortedBooks = [...readBooks].sort((a, b) => {
    switch (sortCriteria) {
      case 'rating':
        return b.rating - a.rating; 
      case 'pages':
        return b.totalPages - a.totalPages;
      case 'year':
        return b.yearOfPublishing - a.yearOfPublishing; 
      default:
        return 0;
    }
  });

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>
      {sortedBooks.length > 0 ? (
        sortedBooks.map((book) => (
          <div key={book.bookId} className='group relative block bg-black'>
            <img
              alt=''
              src={book.image}
              className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
            />
            <div className='relative p-4 sm:p-6 lg:p-8'>
              <p className='text-sm font-medium uppercase tracking-widest text-pink-500'>
                {book.author}
              </p>
              <p className='text-xl font-bold text-white sm:text-2xl'>
                {book.bookName}
              </p>
              <div className='mt-32 sm:mt-48 lg:mt-64'>
                <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-md text-white'>By: {book.publisher}</p>
                  <div className='flex mt-5 justify-between items-center'>
                  <p className='text-md text-white'><span className='font-semibold'>Pages:</span> {book.totalPages}</p>
                  <p className='text-md text-white'><span className='font-semibold'>Years:</span> {book.yearOfPublishing}</p>
                  </div>
                  <div className='flex mt-5 justify-between items-center'>
                    <p className='text-md text-white'>
                      Category: {book.category}
                    </p>
                    <p className='text-md flex justify-between gap-1 items-center text-white'>
                      {book.rating}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='size-5'>
                        <path
                          fillRule='evenodd'
                          d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No books have been marked as read.</p>
      )}
    </div>
  );
};

export default ReadBooks;