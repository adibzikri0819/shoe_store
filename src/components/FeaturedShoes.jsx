import React from 'react';

const featuredShoes = [
  {
    name: 'Strawberry',
    products: 10,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Green Cabbage',
    products: 8,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Black Berry',
    products: 6,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Dragon Fruit',
    products: 12,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Pumpkin',
    products: 9,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Pumpkin',
    products: 9,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Pumpkin',
    products: 9,
    image: '/images/shoes_featured_one.jpg',
  },
  {
    name: 'Pumpkin',
    products: 9,
    image: '/images/shoes_featured_one.jpg',
  },
];

const FeaturedShoes = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Scrollable container */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {featuredShoes.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 sm:w-48 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 sm:h-40 object-contain mx-auto rounded-md"
              />
              <p className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">
                {item.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {item.products} products
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedShoes;
