
import { createRoot } from 'react-dom/client';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFavorites } from '../Components/Favorite'; 

describe('useFavorites hook', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

   it('should initialize favorites with empty array if localStorage is empty', () => {
    createRoot(document.createElement('div')); 
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([]);
  });

  it('should initialize favorites with values from localStorage', () => {
    const favorites = ['Book 1', 'Book 2'];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual(favorites);
  });

  it('should add a book to favorites when toggleFavorite is called with a new book', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite('Book 1');
    });
    expect(result.current.favorites).toEqual(['Book 1']);
  });

  it('should remove a book from favorites when toggleFavorite is called with an existing favorite', () => {
    const favorites = ['Book 1', 'Book 2'];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite('Book 1');
    });
    expect(result.current.favorites).toEqual(['Book 2']); 
  });

  it('should toggle favorite status correctly', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite('Book 1');
    });
    expect(result.current.favorites).toEqual(['Book 1']); 
    act(() => {
      result.current.toggleFavorite('Book 1');
    });
    expect(result.current.favorites).toEqual([]); 
  });
});
