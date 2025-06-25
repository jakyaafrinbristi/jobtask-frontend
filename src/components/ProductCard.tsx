/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

const ProductCard = ({ product }: any) => (
  <div className="w-[417px] h-[486px] bg-white rounded-[18px] overflow-hidden shadow-md">
    <Image
      src={product.imageUrl}
      alt={product.name}
      width={417}
      height={350}
      className="w-full h-[350px] object-cover"
    />

    {/* Name + Category */}
    <div className="flex items-center justify-between px-4 pt-2">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <span className="text-sm bg-red-500 text-white px-3 py-[2px] rounded-full">
        {product.category}
      </span>
    </div>

    {/* Rating + Price */}
    <div className="flex items-center justify-between px-4 pt-1">
      <div className="text-yellow-400 text-sm">
        {'⭐'.repeat(Math.round(product.rating))}
      </div>
      <div className="text-lg font-bold">${product.price}</div>
    </div>
  </div>
);

export default ProductCard;
