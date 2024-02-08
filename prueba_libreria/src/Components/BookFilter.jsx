import React, { useState } from 'react';

function BookFilter({ onFilter }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='pt-3'>
        <input
          className='w-3/5 h-9 bg-transparent border-4 border-white text-cyan-50 border-double rounded px-3'
          type="text"
          placeholder="Search by title"
          value={title}
          onChange={handleTitleChange}
        />
        <button className="mx-3 bg-cyan-500 shadow-lg  shadow-cyan-500/50 hover:bg-purple-500 text-white font-bold py-2 px-4  rounded" type="submit">Search</button>
      </div>
    </form>
  );
}

export default BookFilter;
