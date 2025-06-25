'use client';
import { useState } from 'react';

const AddFoodModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    imageUrl: '',
    rating: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          rating: parseFloat(formData.rating),
        }),
      });
      const result = await res.json();
      console.log('Created:', result);
      onClose();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Food</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" onChange={handleChange} value={formData.name} placeholder="Food Name" className="w-full border px-3 py-2 rounded" required />
          <select name="category" onChange={handleChange} value={formData.category} className="w-full border px-3 py-2 rounded" required>
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <input name="price" onChange={handleChange} value={formData.price} type="number" placeholder="Price" className="w-full border px-3 py-2 rounded" required />
          <input name="imageUrl" onChange={handleChange} value={formData.imageUrl} placeholder="Image URL" className="w-full border px-3 py-2 rounded" required />
          <input name="rating" onChange={handleChange} value={formData.rating} type="number" placeholder="Rating (0-5)" className="w-full border px-3 py-2 rounded" />
          <div className="flex justify-between pt-2">
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Save</button>
            <button onClick={onClose} type="button" className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
