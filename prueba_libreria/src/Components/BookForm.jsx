import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const BookForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    country: '',
    released: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      author: '',
      country: '',
      released: '',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto bg-opacity-60">
      <div className="flex items-center justify-center min-h-screen ">
        <Dialog.Overlay className="fixed inset-0 bg-gray-700 opacity-60" />

        <div className=" bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg w-96 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-600 px-3 py-1 font-bold hover:rounded-full hover:bg-gray-400  focus:outline-none"
          >
           X
          </button>

          <Dialog.Title className="text-lg font-bold mb-4">Add New Book</Dialog.Title>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-indigo-500 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Author:
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-indigo-500 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-indigo-500 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="released" className="block text-sm font-medium text-gray-700">
                Released:
              </label>
              <input
                type="text"
                id="released"
                name="released"
                value={formData.released}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-indigo-500 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="released" className="block text-sm font-medium text-gray-700">
                Publisher:
              </label>
              <input
                type="text"
                id="released"
                name="released"
                value={formData.released}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-indigo-500 rounded-md"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}

export default BookForm;
