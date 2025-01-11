import React from 'react';

const SustainableFashionBanner = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-900">
\      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2019/04/03/20/30/nature-4101348_640.jpg')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Committed to Sustainable Fashion
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200">
          Crafted with Care, Designed for a Greener Tomorrow
        </p>
        
        <button className="mt-6 px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SustainableFashionBanner;