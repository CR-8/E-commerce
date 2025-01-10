import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Settings, LogOut, Package } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 sticky top-0 z-[500]">
      {/* Main Navbar */}
      <div className="navbar shadow-sm px-4 h-16 w-full z-50 bg-transparent backdrop-blur-[2rem]">
        {/* Logo Section */}
        <div className="flex-1">
          <a className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">ShopHub</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-none hidden md:block mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-96 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-none flex items-center space-x-4">
          {/* Mobile Search */}
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Wishlist */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
            <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-blue-600 text-white rounded-full">3</span>
          </button>

          {/* Cart */}
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
              <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-blue-600 text-white rounded-full">8</span>
            </button>
            <div tabIndex={0} className="dropdown-content mt-3 w-80 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 z-[60]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold dark:text-white">Cart (8)</span>
                <span className="text-blue-600">$999.00</span>
              </div>
              <div className="max-h-96 overflow-auto custom-scrollbar">
                {/* Cart Item Example */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b dark:border-gray-700">
                  <img src="https://placehold.co/80x80" alt="Product" className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium dark:text-white">Product Name</h3>
                    <p className="text-sm text-gray-500">1 × $129.00</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Cart
                </button>
                <button className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="w-10 h-10 rounded-full ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-gray-900 overflow-hidden">
              <img src="https://placehold.co/100x100" alt="User" className="w-full h-full object-cover" />
            </button>
            <ul tabIndex={0} className="dropdown-content mt-3 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-2 z-[60]">
              <li className="px-4 py-2">
                <span className="text-sm text-gray-500">Welcome back!</span>
                <span className="block font-medium dark:text-white">John Doe</span>
              </li>
              <li><hr className="my-2 dark:border-gray-700" /></li>
              <li>
                <a className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-200">Profile</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                  <Package className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-200">Orders</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-200">Settings</span>
                </a>
              </li>
              <li><hr className="my-2 dark:border-gray-700" /></li>
              <li>
                <a className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-lg md:hidden z-50">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;