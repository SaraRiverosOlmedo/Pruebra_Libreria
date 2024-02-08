import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Table from '../Components/Table';

describe('Table Component', () => {
  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Authors', accessor: 'authors' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Publisher', accessor: 'publisher' },
    { Header: '', accessor: 'favorite' }, 
  ];

  const data = [
    { name: 'Book 1', authors: ['Author 1'], country: 'Country 1', publisher: 'Publisher 1' },
    { name: 'Book 2', authors: ['Author 2'], country: 'Country 2', publisher: 'Publisher 2' },
  ];

  it('renders table with data', async () => {
    const { getByText } = render(<Table columns={columns} data={data} />);
    
    await waitFor(() => {
      expect(getByText('Book 1')).toBeInTheDocument();
      expect(getByText('Book 2')).toBeInTheDocument();
      expect(getByText('Author 1')).toBeInTheDocument();
      expect(getByText('Author 2')).toBeInTheDocument();
      expect(getByText('Country 1')).toBeInTheDocument();
      expect(getByText('Country 2')).toBeInTheDocument();
      expect(getByText('Publisher 1')).toBeInTheDocument();
      expect(getByText('Publisher 2')).toBeInTheDocument();
    });
  });

  it('renders table with no data message', async () => {
    const { getByText } = render(<Table columns={columns} data={[]} />);
    
    await waitFor(() => {
      expect(getByText('No data available')).toBeInTheDocument();
    });
  });

  it('toggles favorites correctly', async () => {
    const { getAllByText } = render(<Table columns={columns} data={data} />);
    const favoriteButtons = getAllByText('🤍', { selector: 'button' }); 

    fireEvent.click(favoriteButtons[0]); 
    await waitFor(() => {
      expect(favoriteButtons[0].textContent).toBe('❤️'); 
    });

    fireEvent.click(favoriteButtons[0]); 
    await waitFor(() => {
      expect(favoriteButtons[0].textContent).toBe('🤍'); 
    });
  });
});
