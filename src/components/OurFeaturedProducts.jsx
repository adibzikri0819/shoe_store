import React from 'react';

const products = [
  {
    id: 1,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '20.00$',
    discount: '25.00$',
    rating: 4.5,
  },
  {
    id: 2,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
  {
    id: 3,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '20.00$',
    discount: '28.00$',
    rating: 4.7,
  },
  {
    id: 4,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '15.00$',
    discount: '20.00$',
    rating: 4.3,
  },
  {
    id: 5,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '24.00$',
    discount: '30.00$',
    rating: 4.1,
  },
  {
    id: 6,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '34.00$',
    discount: '40.00$',
    rating: 4.8,
  },
  {
    id: 7,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '20.00$',
    discount: '25.00$',
    rating: 4.6,
  },
  {
    id: 8,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '30.00$',
    discount: '35.00$',
    rating: 4.4,
  },
];

const OurFeaturedProducts = () => {
  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-left mb-2">Our Featured Products</h2>
      <div className="text-center mb-8">
        {/* optional subheading or content */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">-20%</span>
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl">♡</button>
            </div>
            <h3 className="text-sm font-medium text-gray-800 text-left">{product.title}</h3>
            <div className="flex items-center space-x-2 mt-2 text-left">
              <span className="text-lg font-bold text-orange-600">{product.price}</span>
              <span className="text-sm text-gray-400 line-through">{product.discount}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-left">{product.rating} ⭐ reviews</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeaturedProducts;