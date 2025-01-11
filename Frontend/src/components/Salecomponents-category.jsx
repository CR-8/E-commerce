import React from 'react';

const ShopCategories = () => {
  const categories = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg",
      title: "Formals"
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_1280.jpg",
      title: "Casuals"
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/7109W00B3LL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Sweaters"
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/61h-IHFcqML._AC_UL480_FMwebp_QL65_.jpg",
      title: "Active Wear"
    }
  ];

  return (
    <div className="w-full py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop From Categories</h1>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200/80 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">←</div>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200/80 rounded-full p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">→</div>
        </button>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={category.img}
                  alt={category.title}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-medium text-center">{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;