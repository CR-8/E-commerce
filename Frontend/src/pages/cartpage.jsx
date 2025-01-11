import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';

const BasketItem = ({ image, title, size, discount, price, originalPrice }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-4">
    <div className="flex items-center gap-6">
      <img src={image} alt={title} className="w-20 h-20 object-cover" />
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">Size: {size}</p>
        <p className="text-gray-600">Discount: {discount}%</p>
      </div>
    </div>
    
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-4">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">1</span>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Plus size={16} />
        </button>
      </div>
      
      <div className="text-right min-w-[100px]">
        <p className="text-gray-400 line-through">${originalPrice}</p>
        <p className="text-xl font-medium">${price}</p>
      </div>
      
      <button className="p-1 hover:bg-gray-100 rounded">
        <X size={16} />
      </button>
    </div>
  </div>
);

const Basket = () => {
  const items = [
    {
      image: "/api/placeholder/80/80",
      title: "Laptop X",
      size: "36 x 40 x 16",
      discount: 19,
      price: 35000,
      originalPrice: 46000
    },
    {
      image: "/api/placeholder/80/80",
      title: "Fitbit Series - 5",
      size: "30 x 15 x 10",
      discount: 10,
      price: 4700,
      originalPrice: 5100
    }
  ];

  const originalTotal = 51100;
  const total = 39700;

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif">Basket</h1>
        <div className="text-right">
          <p className="text-gray-400 line-through">${originalTotal}</p>
          <div className="flex items-center gap-4">
            <span className="text-lg">Total:</span>
            <span className="text-2xl font-medium">${total}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <button className="text-gray-600 flex items-center gap-2">
          <span>←</span>
          Back to shopping
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <BasketItem key={index} {...item} />
        ))}
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
          QUICK ORDER
        </button>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
          CHECKOUT
        </button>
      </div>
    </div>
    </>
  );
};

export default Basket;