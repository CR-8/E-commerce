import React, { useState } from "react";
import {
  Home,
  ShoppingCart,
  Package,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Desktop Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8 sm:ml-10">
              <a
                href="/"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <Home size={20} className="text-gray-600 hover:text-gray-900" />
                <span className="text-gray-600 hover:text-gray-900">Home</span>
              </a>
              <a
                href="/cart"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <ShoppingCart size={20} className="text-gray-600 hover:text-gray-900" />
                <span className="text-gray-600 hover:text-gray-900">Cart</span>
              </a>
              <a
                href="/orders"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <Package size={20} className="text-gray-600 hover:text-gray-900" />
                <span className="text-gray-600 hover:text-gray-900">Orders</span>
              </a>
              <a
                href="/admin"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <Settings size={20} className="text-gray-600 hover:text-gray-900" />
                <span className="text-gray-600 hover:text-gray-900">Admin</span>
              </a>
            </div>
          </div>

          {/* User Account */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <User size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Login/Signup</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} className="text-gray-600 hover:text-gray-900" /> : <Menu size={24} className="text-gray-600 hover:text-gray-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <Home size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Home</span>
            </a>
            <a
              href="/cart"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Cart</span>
            </a>
            <a
              href="/orders"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <Package size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Orders</span>
            </a>
            <a
              href="/admin"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <Settings size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Admin</span>
            </a>
            <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 w-full">
              <User size={20} className="text-gray-600 hover:text-gray-900" />
              <span className="text-gray-600 hover:text-gray-900">Login/Signup</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

