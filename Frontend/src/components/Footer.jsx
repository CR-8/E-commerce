import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-6 overflow-x-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Help Centre Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Help Centre</h2>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-black">How to Shop</a>
              <a href="#" className="text-gray-600 hover:text-black">Source a Product</a>
              <a href="#" className="text-gray-600 hover:text-black">Size Guide</a>
              <a href="#" className="text-gray-600 hover:text-black">Track Your Order</a>
              <a href="#" className="text-gray-600 hover:text-black">Shop Worldwide</a>
              <a href="#" className="text-gray-600 hover:text-black">Gift Cards</a>
            </nav>
          </div>

          {/* About Us Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">About Us</h2>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-black">About Us</a>
              <a href="#" className="text-gray-600 hover:text-black">Diversity</a>
              <a href="#" className="text-gray-600 hover:text-black">Global Shipping</a>
              <a href="#" className="text-gray-600 hover:text-black">Careers</a>
              <a href="#" className="text-gray-600 hover:text-black">Become An Affiliate</a>
              <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Resources</h2>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-black">Terms and Conditions</a>
              <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-black">Community</a>
              <a href="#" className="text-gray-600 hover:text-black">Success Stories</a>
              <a href="#" className="text-gray-600 hover:text-black">Accessibility</a>
              <a href="#" className="text-gray-600 hover:text-black">Sitemap</a>
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Company</h2>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-black">About Us</a>
              <a href="#" className="text-gray-600 hover:text-black">Stakeholders</a>
              <a href="#" className="text-gray-600 hover:text-black">Careers</a>
              <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-black">Partners</a>
              <a href="#" className="text-gray-600 hover:text-black">Press Centre</a>
            </nav>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold">Sign Up for Email Deals & Cashback</h2>
          <div className="flex gap-2 max-w-md">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a472a]"
            />
            <button 
              className="px-4 py-2 bg-[#1a472a] text-white rounded-md hover:bg-[#143620] transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex gap-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

