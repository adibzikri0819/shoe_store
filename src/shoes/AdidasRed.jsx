import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, Info } from 'lucide-react';

const AdidasRed = () => {
  const [selectedSize, setSelectedSize] = useState('9 UK');
  const [selectedColor, setSelectedColor] = useState('Core Black / Cloud White / Gum');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = [
    { name: 'Core Black / Cloud White / Gum', colors: ['bg-black', 'bg-white', 'bg-yellow-600'] },
    { name: 'Cloud White / Core Black / Gum', colors: ['bg-white', 'bg-black', 'bg-yellow-600'] },
    { name: 'Core Black / Red / White', colors: ['bg-black', 'bg-red-600', 'bg-white'] },
    { name: 'Green / White / Gum', colors: ['bg-green-600', 'bg-white', 'bg-yellow-600'] },
    { name: 'Navy / Orange / White', colors: ['bg-blue-900', 'bg-orange-500', 'bg-white'] }
  ];

  const sizes = [
    '3.5 UK', '4 UK', '4.5 UK', '5 UK', '5.5 UK',
    '6 UK', '6.5 UK', '7 UK', '7.5 UK', '8 UK',
    '8.5 UK', '9 UK', '9.5 UK', '10 UK', '10.5 UK',
    '11 UK', '11.5 UK', '12 UK', '12.5 UK'
  ];

  const images = [
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center p-4 text-sm text-gray-600 mt-4">
        <button onClick={() => window.history.back()} className="flex items-center hover:text-black">
          <ChevronLeft className="w-4 h-4 mr-2" />
          <span className="font-medium text-black">Back</span>
        </button>
        <span className="mx-2">/</span>
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Men</span>
        <span className="mx-2">/</span>
        <span>Shoes</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pb-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Product Image {index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="text-left">
                <div className="text-sm text-gray-600 mb-1 text-left">Men • Originals</div>
                <h1 className="text-3xl font-bold text-black mb-2 text-left">SAMBA OG SHOES</h1>
                <div className="text-xl font-semibold text-black text-left">RM569</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">184/79</span>
              </div>
            </div>

            {/* Promotion Notice */}
            <div className="text-sm text-gray-600 text-left">
              This product is excluded from all promotional discounts and offers.
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-black text-left">Colours</h3>
              <div className="flex space-x-3 justify-start">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded border-2 flex items-center justify-center ${
                      selectedColor === color.name ? 'border-black' : 'border-gray-300'
                    }`}
                  >
                    <div className="flex space-x-0.5">
                      {color.colors.map((bgColor, colorIndex) => (
                        <div
                          key={colorIndex}
                          className={`w-2 h-8 ${bgColor} ${colorIndex === 0 ? 'rounded-l' : ''} ${
                            colorIndex === color.colors.length - 1 ? 'rounded-r' : ''
                          } ${bgColor === 'bg-white' ? 'border border-gray-300' : ''}`}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600 text-left">{selectedColor}</div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-left">Sizes</h3>
                <button className="text-sm text-gray-600 underline flex items-center">
                  <span className="w-4 h-4 border border-gray-400 rounded-sm mr-1 flex items-center justify-center text-xs">?</span>
                  Size guide
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 text-sm border rounded text-center ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 p-3 rounded text-left">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span><strong>True to size.</strong> We recommend ordering your usual size.</span>
              </div>
            </div>

            {/* Add to Bag */}
            <div className="flex space-x-3">
              <button className="flex-1 bg-black text-white py-4 px-6 font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                ADD TO BAG
                <span className="ml-2">→</span>
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border rounded ${
                  isWishlisted ? 'border-red-500 text-red-500' : 'border-gray-300'
                } hover:border-gray-400 transition-colors`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-2 text-sm text-left">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-400 rounded-full text-xs flex items-center justify-center text-black font-bold">%</span>
                <span className="underline">MID-YEAR SALE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded-full text-xs flex items-center justify-center text-white">✓</span>
                <span className="underline">FREE SHIPPING FOR ADICLUB MEMBERS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full text-xs flex items-center justify-center text-white">↺</span>
                <span className="underline">EASY RETURN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdidasRed;