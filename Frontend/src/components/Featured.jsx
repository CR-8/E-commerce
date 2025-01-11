import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "High-Waisted Recycled Jeans",
      price: 100,
      img: "/api/placeholder/400/500"
    },
    {
      id: 2,
      name: "Organic Cotton Oversized T-shirt",
      price: 100,
      img: "/api/placeholder/400/500"
    },
    {
      id: 3,
      name: "Recycled Denim Jacket",
      price: 100,
      img: "/api/placeholder/400/500"
    },
    {
      id: 4,
      name: "Eco-Friendly Knit Sweater",
      price: 100,
      img: "/api/placeholder/400/500"
    }
  ];

  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">←</div>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">→</div>
        </button>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-medium mb-2">{product.name}</h2>
              <p className="text-xl font-bold mb-3">${product.price}</p>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;