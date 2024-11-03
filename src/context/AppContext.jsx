import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('data/booksData.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const addReadBook = (book) => {
    if (!readBooks.some((readBook) => readBook.bookId === book.bookId)) {
      setReadBooks((prev) => [...prev, book]);
      toast.success(`Book has been added to your read books!`); 
    } else {
      toast.info(`Book is already in your read books!`); 
    }
  };

  const addWishlistBook = (book) => {
    if (!wishlist.some((wishBook) => wishBook.bookId === book.bookId)) {
      setWishlist((prev) => [...prev, book]);
      toast.success(`Book has been added to your wishlist!`); 
    } else {
      toast.info(`Book is already in your wishlist!`); 
    }
  };

  const value = {
    books,
    readBooks,
    wishlist, 
    addWishlistBook, 
    addReadBook,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;