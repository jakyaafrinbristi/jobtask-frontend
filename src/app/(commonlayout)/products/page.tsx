/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import AddFoodModal from '@/components/AddFoodModal';
import AddCategoryModal from '@/components/AddCategoryModal';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:8000/api/product');
  const data = await res.json();
  return data.data;
};

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [openFoodModal, setOpenFoodModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filtered = filter === 'All' ? products : products.filter((p: any) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Our Best Seller Dishes</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full border ${
              filter === cat ? 'bg-black text-white' : 'text-black'
            }`}
          >
            {cat}
          </button>
        ))}
        <button onClick={() => setOpenFoodModal(true)} className="bg-black text-white px-4 py-1 rounded-full">Add Food</button>
        <button onClick={() => setOpenCategoryModal(true)} className="bg-black text-white px-4 py-1 rounded-full">Add Category</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Modals */}
      {openFoodModal && <AddFoodModal onClose={() => setOpenFoodModal(false)} />}
      {openCategoryModal && <AddCategoryModal onClose={() => setOpenCategoryModal(false)} />}
    </div>
  );
}
