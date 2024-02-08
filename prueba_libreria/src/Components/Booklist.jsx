import React, { useEffect, useState } from 'react';
import Table from './Table';
import BookFilter from './BookFilter';
import OrderBy from './OrderBy';
import BookForm from './BookForm';
import { Link } from 'react-router-dom'; 

const BookList = () => {
  const [bookData, setBookData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [orderBy, setOrderBy] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    async function fetchBookData() {
      try {
        const response = await fetch('https://anapioficeandfire.com/api/books');
        const data = await response.json();
        setBookData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    }

    fetchBookData();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  const handleFilter = ({ title }) => {
    if (!title) {
      setFilteredData(bookData);
    } else {
      const filtered = bookData.filter(book => book.name.toLowerCase().includes(title.toLowerCase()));
      setFilteredData(filtered);
    }
  };

  const handleOrder = (selectedOrder) => {
    setOrderBy(selectedOrder);
    if (selectedOrder === 'asc') {
      const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
      setFilteredData(sortedData);
    } else if (selectedOrder === 'desc') {
      const sortedData = [...filteredData].sort((a, b) => b.name.localeCompare(a.name));
      setFilteredData(sortedData);
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => { 
    setIsFormOpen(false);
  };

  const handleSubmitForm = (formData) => { 
    console.log('Form data:', formData);
    closeForm(); 
  };

  
  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Authors', accessor: 'authors' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Publisher', accessor: 'publisher' },
    { Header: '', accessor: 'favorite' }, 
  ];

  return (
    <div className='w-full flex flex-col items-center justify-center bg-black '>
      <h2 className='text-6xl font-bold tracking-wide text-white drop-shadow-2xl mb-8 mt-2'>Book List</h2>
      <div className='w-full max-w-4xl p-4 flex flex-wrap justify-center'>
        <BookFilter onFilter={handleFilter} />
        <OrderBy onOrder={handleOrder} />
        <button className="m-3 bg-cyan-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={openForm}>
          Add New Book
        </button>
        <Link to="/favorites">
          <button className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Favorites
          </button>
        </Link>
      </div>
      {isFormOpen && <BookForm isOpen={isFormOpen} onClose={closeForm} onSubmit={handleSubmitForm} />}
      <div className='w-full max-w-4xl p-4 flex justify-center'>
        {filteredData ? (
          <Table
            columns={columns}
            data={filteredData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            isFavoritesView={false} 
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
