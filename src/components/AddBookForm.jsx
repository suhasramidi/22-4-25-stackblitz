import React from 'react';
import { Link } from 'react-router-dom';

const AddBookForm = () => {
  return (
    <div style={styles.container}>
      <h1>Add New Book</h1>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input type="text" id="title" name="title" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Author:</label>
          <input type="text" id="author" name="author" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <textarea id="description" name="description" rows="4" style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="coverImageUrl" style={styles.label}>Cover Image URL:</label>
          <input type="url" id="coverImageUrl" name="coverImageUrl" style={styles.input} />
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.submitButton}>Submit</button>
          <Link to="/" style={styles.cancelButton}>Cancel</Link>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
  },
};

export default AddBookForm;