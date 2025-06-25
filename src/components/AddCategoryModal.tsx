'use client';
import { useState } from 'react';

const AddCategoryModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const result = await res.json();
      console.log('Category created:', result);
      onClose();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Category Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <div className="flex justify-between pt-2">
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Save</button>
            <button onClick={onClose} type="button" className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
