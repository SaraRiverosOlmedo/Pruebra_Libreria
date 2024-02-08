import React, { useState } from 'react';

const OrderBy = ({ onOrder }) => {
  const [order, setOrder] = useState('');

  const handleChange = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    onOrder(selectedOrder);
  };

  return (
    <div className='pt-3 '>
      <select 
      className='w-w-1/4 h-9 bg-transparent border-4 border-white text-cyan-50 border-double rounded px-3'
      value={order} 
      onChange={handleChange}>
        <option className='bg-black text-white' value="">Select Order</option>
        <option className='bg-black text-white' value="asc">A-Z</option>
        <option className='bg-black text-white' value="desc">Z-A</option>
      </select>
    </div>
  );
}

export default OrderBy;

