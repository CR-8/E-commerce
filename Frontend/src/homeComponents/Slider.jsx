import React, { useEffect, useState, useCallback, useRef } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);

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
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9",
      title: "Winter Collection 2024",
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
      title: "Kidswear Collection",
      description: "For your little ones",
      buttonText: "Explore More"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      title: "New Season Arrivals",
      description: "Discover the latest trends in fashion",
      buttonText: "Shop Now"
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_960_720.jpg",
      title: "Formal Wear",
      description: "Discover the latest trends in fashion",
      buttonText: "Explore More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev % slides.length) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    sliderRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const goToSlide = useCallback((slideNumber) => {
    setCurrentSlide(slideNumber);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev % slides.length) + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 1 ? slides.length : prev - 1));
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="relative w-full h-[600px] overflow-hidden focus:outline-none z-10"
      ref={sliderRef}
      tabIndex={0}
      role="region"
      aria-label="Image slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className={`carousel-item absolute w-full h-full transition-all duration-500 ${
              currentSlide === slide.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
              </div>
            )}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
              <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-left text-white max-w-xl">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl mb-8">{slide.description}</p>
                <button 
                  className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-colors text-lg focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label={slide.buttonText}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/30 hover:bg-white/50 text-white border-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/30 hover:bg-white/50 text-white border-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          ❯
        </button>
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
            aria-current={currentSlide === slide.id}
          />
        ))}
      </div>
    </div>
  );
}
