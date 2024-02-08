import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OrderBy from '../Components/OrderBy';

describe('OrderBy Component', () => {
  it('should call the onOrder callback with the selected order when a new order is selected', () => {
    
    const onOrderMock = jest.fn();
    const { getByRole } = render(<OrderBy onOrder={onOrderMock} />);

    
    fireEvent.change(getByRole('combobox'), { target: { value: 'asc' } });

    
    expect(onOrderMock).toHaveBeenCalledWith('asc');
  });

  it('should set the order state when a new order is selected', () => {
    
    const onOrderMock = jest.fn();
    const { getByRole } = render(<OrderBy onOrder={onOrderMock} />);

    
    fireEvent.change(getByRole('combobox'), { target: { value: 'desc' } });

    
    expect(getByRole('combobox').value).toBe('desc');
  });
});
