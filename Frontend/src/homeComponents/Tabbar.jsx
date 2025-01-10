import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TabBar = ({ 
  initialTab = 'trending',
  onTabChange = () => {},
  showArrows = true
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'trending', name: 'Trending Now', icon: '🔥', badge: '12' },
    { id: 'new', name: 'New Arrivals', icon: '✨', badge: 'New' },
    { id: 'bestsellers', name: 'Best Sellers', icon: '⭐' },
    { id: 'deals', name: "Today's Deals", icon: '🏷️', badge: '50% OFF' },
    { id: 'premium', name: 'Premium', icon: '👑' },
    { id: 'sale', name: 'Sale', icon: '💫', badge: 'Hot' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
    
    // Smooth scroll the active tab into view
    const tabElement = document.getElementById(`tab-${tabId}`);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="w-full shadow-sm py-2 sticky top-0 border-b">
      <div className="container mx-auto px-5 relative">
        {showArrows && showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden hide-scrollbar gap-6 justify-start items-center px-8"
          role="tablist"
        >
          {categories.map((category) => (
            <motion.button
              id={`tab-${category.id}`}
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-300 hover:text-gray-900 hover:bg-gray-50'
              }`}
              role="tab"
              aria-selected={activeTab === category.id}
              aria-controls={`panel-${category.id}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg" aria-hidden="true">{category.icon}</span>
              <span className={`${
                activeTab === category.id ? 'font-semibold' : 'font-medium'
              }`}>
                {category.name}
              </span>
              
              {category.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600 font-medium">
                  {category.badge}
                </span>
              )}

              {activeTab === category.id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="h-0.5 bg-blue-600 absolute bottom-0 left-0 right-0 rounded-full"
                  initial={false}
                />
              )}
            </motion.button>
          ))}
        </div>

        {showArrows && showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TabBar;