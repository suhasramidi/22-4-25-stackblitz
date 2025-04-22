import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookCard from './components/BookCard'; // Make sure this path is correct
import AddBookForm from './components/AddBookForm'; // Import the new component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBookForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;