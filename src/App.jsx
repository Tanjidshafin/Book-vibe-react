import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListedPages from './Pages/ListedPages';
import PagesToRead from './Pages/PagesToRead';
import Home from './Pages/Home';
import BooksInfo from './Components/BooksInfo';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ListedPages' element={<ListedPages />} />
        <Route path='/PagestoRead' element={<PagesToRead />} />
        <Route path='/Books/:id' element={<BooksInfo />} />
      </Routes>
    </div>
  );
};

export default App;
