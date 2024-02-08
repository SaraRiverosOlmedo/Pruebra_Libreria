import { useEffect, useState } from "react";


const getFavoritesFromStorage = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromStorage());

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  return { favorites, toggleFavorite };
};
