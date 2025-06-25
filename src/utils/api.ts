export const fetchProducts = async () => {
  const res = await fetch('http://localhost:8000/api/product');
  const data = await res.json();
  return data.data;
};
