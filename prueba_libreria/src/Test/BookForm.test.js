import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookForm from '../Components/BookForm';
import 'resize-observer-polyfill/dist/ResizeObserver.global';


describe('BookForm', () => {
  test('calls onSubmit when form is submitted', () => {
    const onSubmitMock = jest.fn();
    const onCloseMock = jest.fn();
    const formData = {
      name: 'Book Title',
      author: 'Author Name',
      country: 'Country Name',
      released: '2022',
    };

    const { getByLabelText, getByText } = render(
      <BookForm isOpen={true} onClose={onCloseMock} onSubmit={onSubmitMock} />
    );

    
    fireEvent.change(getByLabelText('Name:'), { target: { value: formData.name } });
    fireEvent.change(getByLabelText('Author:'), { target: { value: formData.author } });
    fireEvent.change(getByLabelText('Country:'), { target: { value: formData.country } });
    fireEvent.change(getByLabelText('Released:'), { target: { value: formData.released } });

    
    fireEvent.submit(getByText('Add Book'));

  
    expect(onSubmitMock).toHaveBeenCalledWith(formData);

   
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('closes the dialog when close button is clicked', () => {
    const onCloseMock = jest.fn();

    const { getByRole } = render(
      <BookForm isOpen={true} onClose={onCloseMock} onSubmit={() => {}} />
    );

    
    fireEvent.click(getByRole('button', { name: /close/i }));

    
    expect(onCloseMock).toHaveBeenCalled();
  });
});
