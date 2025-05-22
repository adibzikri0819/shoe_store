import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


export default function StartShoppingNow() {
  return (
    <div className="w-full bg-blue-50 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side: Text Content */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
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

        {/* Navigation Controls */}
        <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
          </div>
          {/* Arrows */}
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-blue-600 hover:bg-blue-100 transition">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="w-full max-w-md h-64 md:h-80 bg-white rounded-full shadow-lg flex items-center justify-center">
        <span className="text-blue-300">[Image Placeholder]</span>
      </div>
    </div>
  );
}
