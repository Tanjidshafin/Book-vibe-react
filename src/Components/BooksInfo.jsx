// BooksInfo.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const BooksInfo = () => {
  const { id } = useParams();
  const { books, addReadBook, addWishlistBook } = useContext(AppContext);

  const book = books.find((book) => book.bookId === parseInt(id));

  if (!book) {
    return <p className='mx-auto mt-20 max-w-screen-xl lg:h-[780px] w-full px-4 sm:px-6 lg:px-8'>Book not found.</p>;
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <section>
        <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
            <div className='relative z-10 lg:py-16'>
              <div className='relative h-64 sm:h-80 lg:h-full'>
                <img
                  alt=''
                  src={book.image}
                  className='absolute rounded-xl inset-0 h-full w-full object-cover'
                />
              </div>
            </div>

            <div className='relative flex items-center'>
              <div className='p-8 w-full'>
                <h2 className='text-2xl font-bold sm:text-3xl'>
                  {book.bookName}
                </h2>
                <p className='mt-4 text-lg text-gray-600'>By: {book.author}</p>
                <p className='mt-4 text-xl text-black font-semibold'>
                  Category: {book.category}
                </p>
                <p className='mt-4 text-gray-600'>
                  <span className='text-black font-semibold'>Review:</span>{' '}
                  {book.review}
                </p>
                <p className='mt-4 text-gray-600'>
                  <span className='text-black font-semibold'>Tag:</span>
                  {book.tags.map((tag) => (
                    <span className='whitespace-nowrap font-semibold rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700'>
                      {tag}
                    </span>
                  ))}
                </p>
                <div className='mt-5'>
                  <div className='flow-root'>
                    <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                      <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium text-gray-600'>Number of Pages</dt>
                        <dd className='text-gray-900 font-semibold sm:col-span-2'>{book.totalPages}</dd>
                      </div>

                      <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium text-gray-600'>Publisher</dt>
                        <dd className='text-gray-900 font-semibold sm:col-span-2'>
                          {book.publisher}
                        </dd>
                      </div>

                      <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium text-gray-600'>
                          Year of Publishing
                        </dt>
                        <dd className='text-gray-900 font-semibold sm:col-span-2'>
                          {book.yearOfPublishing}
                        </dd>
                      </div>

                      <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium text-gray-600'>Rating</dt>
                        <dd className='text-gray-900 font-semibold sm:col-span-2'>
                          {book.rating}
                        </dd>
                      </div>

                      
                    </dl>
                  </div>
                </div>

                <div className='flex gap-3 mt-4 flex-col lg:flex-row'>
                  <button
                    onClick={() => addReadBook(book)}
                    className='text-center rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'>
                    Read
                  </button>
                  <button
                    onClick={() => addWishlistBook(book)}
                    className='text-center rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'>
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksInfo;
