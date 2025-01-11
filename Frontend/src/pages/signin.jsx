import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl flex rounded-lg overflow-hidden shadow-xl">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                Welcome Back <span>👋</span>
              </h1>
              <p className="text-gray-600">
                A brand new day is here. It's your day to shape.
                Sign in and get started on your projects.
              </p>
            </div>

            <form className="space-y-6">
              {/* Email Input */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Example@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-green-600 
                           focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-green-600 
                           focus:border-transparent"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-gray-600 hover:text-green-600">
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-900 text-white rounded-md 
                         hover:bg-green-800 focus:outline-none focus:ring-2 
                         focus:ring-green-600 focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                           flex items-center justify-center gap-2 hover:bg-gray-50 
                           focus:outline-none focus:ring-2 focus:ring-green-600 
                           focus:ring-offset-2 transition-colors"
                >
                  <img
                    src="/path-to-google-icon.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                           flex items-center justify-center gap-2 hover:bg-gray-50 
                           focus:outline-none focus:ring-2 focus:ring-green-600 
                           focus:ring-offset-2 transition-colors"
                >
                  <img
                    src="/path-to-facebook-icon.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                  Sign in with Facebook
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600">
                Don't you have an account?{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Sign up
                </a>
              </p>
            </form>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 mt-8">
              © 2025 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full relative">
            <img
              src="/path-to-monstera-image.jpg"
              alt="Monstera leaves"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;