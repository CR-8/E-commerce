import React, { useState } from 'react';

export default function Tabbar() {
  const [activeTab, setActiveTab] = useState('trending');

  const categories = [
    { id: 'trending', name: 'Trending Now', icon: '🔥' },
    { id: 'new', name: 'New Arrivals', icon: '✨' },
    { id: 'bestsellers', name: 'Best Sellers', icon: '⭐' },
    { id: 'deals', name: 'Today\'s Deals', icon: '🏷️' },
    { id: 'premium', name: 'Premium', icon: '👑' },
    { id: 'sale', name: 'Sale', icon: '💫' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // You can add filtering logic here later
  };

  return (
    <div className="w-full bg-white shadow-sm py-3 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar gap-6 justify-start items-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className={`${activeTab === category.id ? 'font-semibold' : 'font-medium'}`}>
                {category.name}
              </span>
              {activeTab === category.id && (
                <div className="h-0.5 bg-blue-600 absolute bottom-0 left-0 right-0 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
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
}