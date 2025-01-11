import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "High-Waisted Recycled Jeans",
      price: 100,
      img: "https://m.media-amazon.com/images/I/519iDAn3VkL._AC_SX679_.jpg"
    },
    {
      id: 2,
      name: "Organic Cotton Oversized T-shirt",
      price: 100,
      img: "https://m.media-amazon.com/images/I/81EXL-Wd+JL._AC_SX679_.jpg"
    },
    {
      id: 3,
      name: "Recycled Denim Jacket",
      price: 100,
      img: "https://m.media-amazon.com/images/I/913sL+OvALL._AC_SY741_.jpg"
    },
    {
      id: 4,
      name: "Eco-Friendly Knit Sweater",
      price: 100,
      img: "https://m.media-amazon.com/images/I/71TzdE5RxiL._AC_SX569_.jpg"
    }
  ];

  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      
      <div className="relative max-w-7xl mx-auto">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">←</div>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">→</div>
        </button>

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