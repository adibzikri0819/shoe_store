import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StartShoppingNow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const shoes = [
    {
      id: 1,
      brand: "ADICOLOR",
      title: "Undeniable icons. Made iconic by you.",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=1200&fit=crop&crop=center",
      background: "from-gray-900 via-gray-800 to-black",
      accent: "text-white",
      category: "Classic Stripes"
    },
    {
      id: 2,
      brand: "AIRMAX",
      title: "Revolutionary comfort. Timeless design.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1200&fit=crop&crop=center",
      background: "from-blue-900 via-blue-800 to-indigo-900",
      accent: "text-blue-100",
      category: "Performance"
    },
    {
      id: 3,
      brand: "YEEZYS",
      title: "Future forward. Street approved.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1200&fit=crop&crop=center",
      background: "from-orange-900 via-red-800 to-pink-900",
      accent: "text-orange-100",
      category: "Innovation"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shoes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shoes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shoes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shoes.length) % shoes.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentShoe = shoes[currentSlide];

  return (
    <div className={`relative w-full min-h-screen bg-gradient-to-br ${currentShoe.background} transition-all duration-1000 overflow-hidden`}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform skew-x-12"></div>
      </div>

      {/* Navigation Bar - Fixed with proper spacing */}
      <nav className="relative z-20 w-full px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl md:text-3xl font-black tracking-wider ${currentShoe.accent} transition-colors duration-500`}>
            {currentShoe.brand}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`${currentShoe.accent} hover:opacity-70 transition-opacity font-medium`}>Shop</a>
            <a href="#" className={`${currentShoe.accent} hover:opacity-70 transition-opacity font-medium`}>Collections</a>
            <a href="#" className={`${currentShoe.accent} hover:opacity-70 transition-opacity font-medium`}>About</a>
          </div>
        </div>
      </nav>

      {/* Main Content Container with proper spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
          
          {/* Left Side: Brand & Content */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className={`w-20 h-1 ${currentShoe.accent.includes('white') ? 'bg-white' : 'bg-current'} mx-auto lg:mx-0 transition-colors duration-500`}></div>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight ${currentShoe.accent} transition-colors duration-500`}>
              {currentShoe.title}
            </h1>

            {/* Category */}
            <p className={`text-lg md:text-xl lg:text-2xl font-medium ${currentShoe.accent} opacity-80 transition-colors duration-500`}>
              {currentShoe.category}
            </p>

            {/* CTA Button */}
            <div className="pt-4 lg:pt-8">
              <button className="group relative px-8 py-4 bg-white text-black font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="flex items-center gap-3">
                  SHOP NOW
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 border-2 border-white/20 transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            </div>
          </div>

          {/* Center: Large Product Image with proper spacing */}
          <div className="lg:col-span-4 flex justify-center py-8 lg:py-0">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px]">
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={currentShoe.image}
                  alt={`${currentShoe.brand} ${currentShoe.category}`}
                  className="w-full h-full object-cover transition-all duration-1000 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                aria-label="Previous shoe"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                aria-label="Next shoe"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Side: Additional Images with proper spacing */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            {/* Detail Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center"
                  alt="Shoe detail 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center"
                  alt="Shoe detail 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Brand Logo with adequate spacing from images */}
            <div className="flex justify-center lg:justify-end pt-6 lg:pt-12">
              <div className={`w-16 h-16 lg:w-20 lg:h-20 ${currentShoe.accent.includes('white') ? 'bg-white' : 'bg-current'} rounded-full flex items-center justify-center transition-colors duration-500 shadow-2xl`}>
                <div className={`w-8 h-8 lg:w-10 lg:h-10 ${currentShoe.accent.includes('white') ? 'bg-black' : 'bg-white'} rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation with proper spacing from content */}
        <div className="flex justify-center pt-12 lg:pt-16">
          <div className="flex gap-4">
            {shoes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}