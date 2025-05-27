import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function StartShoppingNow() {
  return (
    <div className="relative w-full bg-blue-50 py-14 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Centered Dots */}
      

      {/* Left Side: Text Content */}
      <div className="max-w-xl space-y-6 text-center md:text-left ml-31">
        <p className="text-blue-600 font-semibold text-sm md:text-base">
          Dive In and Explore
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Start Shopping Now!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore our curated collections and find the perfect item that speaks to your style and needs. With just a click, begin your journey.
        </p>
        <button className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      <div className="flex gap-2 mt-100 mr-50">
        <div className="w-2.5 h-2.5 bg-blue-300 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
      </div>

      {/* Right Side: Image + Arrows Below */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md h-64 md:h-80 mt-10 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center">
          <img
            src="/images/shoes_featured_one.jpg"
            alt="Shopping Visual"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Arrows Below Image */}
        <div className="flex gap-2 mt-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-blue-600 hover:bg-blue-100 transition">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
