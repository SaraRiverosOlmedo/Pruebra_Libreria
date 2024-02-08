import React, { useState, useEffect } from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';

const BookFavoritesView = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleToggleFavorite = (name) => {
    const updatedFavorites = favorites.includes(name)
      ? favorites.filter(fav => fav !== name)
      : [...favorites, name];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  const bookData = favorites.map((bookName, index) => ({
    id: index + 1,
    name: bookName,
    authors: 'Author ' + (index + 1),
    country: 'Country ' + (index + 1), 
    publisher: 'Publisher ' + (index + 1), 
  }));

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Authors', accessor: 'authors' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Publisher', accessor: 'publisher' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-4xl p-4">
        <h2 className="flex items-center justify-center text-6xl font-bold tracking-wide text-white drop-shadow-2xl mb-8 mt-2">Favorite Books</h2>
      </div>
      <div className="flex flex-row justify-end mx-3 py-2 mb-2 px-4 bg-blue-500 shadow-lg hover:bg-blue-700 shadow-blue-500/50 text-white font-bold  rounded">
        <Link to='/'>
          <button>Back to Booklist</button>
        </Link>
      </div>
      <div className="w-full max-w-4xl p-4 flex justify-center">
        <Table
          className="border border-slate-400"
          columns={columns}
          data={bookData}
          toggleFavorite={handleToggleFavorite}
          isFavoritesView={true}
        />
      </div>
    </div>
  );
};

export default BookFavoritesView;
