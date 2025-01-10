import React from "react";
import { ShoppingCart, CreditCard } from "lucide-react";

// Product Card Component
const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-1/2 overflow-hidden">
        <img
          src={product.imageUrl || "/api/placeholder/400/400"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mb-4 mt-auto">
          <span className="text-xl font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>
          {product.rating && (
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">
                {product.rating}
              </span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onAddToCart(product.id)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-2 rounded-md flex items-center justify-center gap-1 transition-colors duration-300 text-sm"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={() => onBuyNow(product.id)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-md flex items-center justify-center gap-1 transition-colors duration-300 text-sm"
          >
            <CreditCard size={16} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;