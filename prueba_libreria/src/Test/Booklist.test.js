import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookList from '../Components/Booklist';

describe('BookList component', () => {
  test('renders book list correctly with provided data', async () => {
    console.log(screen.debug()); 
    await screen.findByRole('Table');
  
    expect(screen.getByRole('cell', { name: /A Game of Thrones/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /Harry Potter and the Philosopher's Stone/i })).toBeInTheDocument();

    render(
      <MemoryRouter>
        <BookList bookData={bookData} />
      </MemoryRouter>
    );

    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();

    
    expect(screen.getByText('Add New Book')).toBeInTheDocument();

    
    expect(screen.getByText('View Favorites')).toBeInTheDocument();
  });

  test('renders loading indicator when no book data is provided', async () => {
    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );

   
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

 
});
