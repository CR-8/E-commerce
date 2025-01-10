import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <CreditCard className="w-10 h-10 text-blue-500" />
              <div>
                <h4 className="font-semibold text-white">Secure Payment</h4>
                <p className="text-sm">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Truck className="w-10 h-10 text-blue-500" />
              <div>
                <h4 className="font-semibold text-white">Fast Delivery</h4>
                <p className="text-sm">Free on orders over $99</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-blue-500" />
              <div>
                <h4 className="font-semibold text-white">Quality Guarantee</h4>
                <p className="text-sm">30-day money back</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Headphones className="w-10 h-10 text-blue-500" />
              <div>
                <h4 className="font-semibold text-white">24/7 Support</h4>
                <p className="text-sm">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="text-xl font-bold text-white">ShopHub</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Your premier destination for quality products. We're committed to providing 
              the best shopping experience with curated selections and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Shop Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors inline-flex items-center">
                  <span className="mr-2">›</span>FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@shophub.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Commerce St, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest offers, new arrivals, and exclusive discounts!</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm"> 2025 ShopHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <img src="https://placehold.co/40x25" alt="Visa" className="h-6" />
              <img src="https://placehold.co/40x25" alt="Mastercard" className="h-6" />
              <img src="https://placehold.co/40x25" alt="PayPal" className="h-6" />
              <img src="https://placehold.co/40x25" alt="Apple Pay" className="h-6" />
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
