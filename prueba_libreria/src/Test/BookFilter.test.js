import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookFilter from '../Components/BookFilter';

describe('BookFilter Component', () => {
  it('should call the onFilter callback with the entered title when form is submitted', () => {
    
    const onFilterMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<BookFilter onFilter={onFilterMock} />);
    const input = getByPlaceholderText('Search by title');
    const submitButton = getByText('Search');

    
    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    fireEvent.click(submitButton);

    
    expect(onFilterMock).toHaveBeenCalledWith({ title: 'Harry Potter' });
  });

  it('should update the input value when user types in the input field', () => {
    
    const { getByPlaceholderText } = render(<BookFilter onFilter={() => {}} />);
    const input = getByPlaceholderText('Search by title');

    
    fireEvent.change(input, { target: { value: 'React' } });

    
    expect(input.value).toBe('React');
  });
});
