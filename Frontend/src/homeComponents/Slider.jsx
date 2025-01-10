import React, { useEffect, useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      title: "New Season Arrivals",
      description: "Discover the latest trends in fashion",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      title: "Summer Collection 2025",
      description: "Up to 50% off on selected items",
      buttonText: "View Collection"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Exclusive Deals",
      description: "Limited time offers on premium brands",
      buttonText: "Shop Deals"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      title: "Accessories Collection",
      description: "Complete your look with our accessories",
      buttonText: "Explore More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev % 4) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev % 4) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 4 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="carousel w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className={`carousel-item relative w-full transition-opacity duration-500 ${
              currentSlide === slide.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
              <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-left text-white max-w-xl">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl mb-8">{slide.description}</p>
                <button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-colors text-lg">
                  {slide.buttonText}
                </button>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={prevSlide}
                className="btn btn-circle bg-white/30 hover:bg-white/50 text-white border-none"
                aria-label="Previous slide"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-circle bg-white/30 hover:bg-white/50 text-white border-none"
                aria-label="Next slide"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === slide.id ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${slide.id}`}
          />
        ))}
      </div>
    </div>
  );
}
