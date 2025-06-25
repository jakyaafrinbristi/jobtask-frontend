/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import AddFoodModal from './AddFoodModal';
import AddCategoryModal from './AddCategoryModal';

const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/product');
    const data = await res.json();
    console.log('✅ API theke asha data:', data.data); // Console log added
    return data.data;
  } catch (error) {
    console.error('❌ API fetch error:', error);
    return [];
  }
};

const ProductGridSection = () => {
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
      <h1 className="text-3xl font-bold text-center mb-2">Our Best Seller Dishes</h1>
      <p className="text-center max-w-2xl mx-auto text-gray-500 mb-6">
        Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full border transition ${
              filter === cat ? 'bg-black text-white' : 'text-black border-gray-400'
            }`}
          >
            {cat}
          </button>
        ))}
        <button onClick={() => setOpenFoodModal(true)} className="bg-black text-white px-4 py-1 rounded-full">Add Food</button>
        <button onClick={() => setOpenCategoryModal(true)} className="bg-black text-white px-4 py-1 rounded-full">Add Category</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {filtered.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Modals */}
      {openFoodModal && <AddFoodModal onClose={() => setOpenFoodModal(false)} />}
      {openCategoryModal && <AddCategoryModal onClose={() => setOpenCategoryModal(false)} />}
    </div>
  );
};

export default ProductGridSection;
