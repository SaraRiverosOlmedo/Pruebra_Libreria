import React from 'react';
import { useTable } from 'react-table';
import 'tailwindcss/tailwind.css';
import { useFavorites } from './Favorite'; 

const Table = ({ columns, data, isFavoritesView }) => {
  const { favorites, toggleFavorite } = useFavorites(); 

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  if (!data || !headerGroups || !rows || rows.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="bg-gradient-to-r from-indigo-500 to-purple-500 divide-y divide-purple-800 hover:border-collapse rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
        <thead className='bg-gradient-to-r from-indigo-700 to-purple-700'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="shadow-2xl px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='hover:bg-indigo-400'>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="shadow-2xl py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-200"
                  >
                    {cell.column.id === 'favorite' && !isFavoritesView ? (
                      <button 
                        className='text-purple-600'
                        onClick={() => toggleFavorite(row.original.name)}
                      >
                        {favorites.includes(row.original.name) ? '❤️' : '🤍'}
                      </button>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
