import React from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dummy book data for demonstration
  const books = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      description: 'The classic epic fantasy novel.',
      coverImageUrl: 'https://m.media-amazon.com/images/I/71m1zW-1+RL._SY342_.jpg',
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A beloved novel of manners.',
      coverImageUrl: 'https://m.media-amazon.com/images/I/71Q1I-97v3L._SY342_.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Book Library</h1>
      <Link to="/add" style={styles.addButton}>Add Book</Link>
      <div style={styles.bookList}>
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
  },
  addButton: {
    display: 'inline-block',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginBottom: '20px',
    fontSize: '16px',
  },
  bookList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
};

export default Home;