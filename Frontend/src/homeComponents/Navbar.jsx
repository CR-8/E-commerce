import React, { useState } from "react";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-sm px-4 h-16">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">ShopHub</span>
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex-none hidden md:block mx-4">
        <div className="form-control relative">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-96 bg-gray-50 focus:bg-white transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-none flex items-center space-x-4">
        {/* Mobile Search */}
        <button className="btn btn-ghost btn-circle md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Wishlist */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="badge badge-sm indicator-item bg-blue-600 text-white border-none">3</span>
          </div>
        </button>

        {/* Cart */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item bg-blue-600 text-white border-none">8</span>
            </div>
          </div>
          <div tabIndex={0} className="card dropdown-content mt-3 w-80 bg-white shadow-xl rounded-xl">
            <div className="card-body p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">Shopping Cart (8)</span>
                <span className="text-blue-600 font-semibold">$999.00</span>
              </div>
              <div className="max-h-96 overflow-auto">
                {/* Sample Cart Item */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b">
                  <img src="https://placehold.co/80x80" alt="Product" className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Product Name</h3>
                    <p className="text-sm text-gray-500">1 × $129.00</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">×</button>
                </div>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-block bg-blue-600 hover:bg-blue-700 text-white">View Cart</button>
                <button className="btn btn-block btn-outline border-blue-600 text-blue-600 hover:bg-blue-50">Checkout</button>
              </div>
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
              <img alt="User avatar" src="https://placehold.co/100x100" />
            </div>
          </div>
          <ul tabIndex={0} className="menu dropdown-content mt-3 w-60 bg-white shadow-xl rounded-xl p-2">
            <li className="menu-title px-4 py-2">
              <span className="text-sm text-gray-500">Welcome back!</span>
              <span className="font-medium text-gray-800">John Doe</span>
            </li>
            <div className="divider my-0"></div>
            <li><a className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </a></li>
            <li><a className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Orders
            </a></li>
            <li><a className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a></li>
            <div className="divider my-0"></div>
            <li><a className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-lg md:hidden">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full bg-gray-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;