import React from 'react';

const TrendingPicks = () => {
  const products = [
    {
      id: 1,
      name: "Suave Black Shoe",
      price: "Add to Cart",
      img: "https://m.media-amazon.com/images/I/71KjPeUVjZL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      name: "LV Mini Purse",
      price: "Add to Cart",
      img: "https://m.media-amazon.com/images/I/71qogAWwQBL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      name: "Ruche 2 Piece Set",
      price: "$100",
      img: "https://m.media-amazon.com/images/I/51EbcYxnlPL._AC_SY550_.jpg"
    },
    {
      id: 4,
      name: "Alo Gym Set",
      price: "$100",
      img: "https://m.media-amazon.com/images/I/710rEpIIJdL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
    }
  ];

  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Trending Picks</h1>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">←</div>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">→</div>
        </button>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h2>
              <p className="text-lg font-bold mb-2">{product.price}</p>
              <button className="text-orange-400 font-medium hover:text-orange-500 transition-colors flex items-center gap-2">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPicks;