import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: '/images/shoes_featured_one.jpg',
    title: 'Adidas Samba OG Shoes',
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
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
    {
    id: 4,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
    {
    id: 5,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
    {
    id: 6,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
    {
    id: 7,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
    {
    id: 8,
    image: '/images/shoes_featured_one.jpg',
    title: 'Organic Food Title will be here...',
    price: '10.00$',
    discount: '15.00$',
    rating: 4.2,
  },
  // ... rest of your products
];

const ExploreOurProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    if (productId === 1) {
      navigate('/adidas-red'); // Navigate to AdidasRed page
    } else {
      // You can add navigation for other products
      navigate(`/product/${productId}`);
    }
  };

  const handleWishlistClick = (e, productId) => {
    e.stopPropagation(); // Prevent navigation when clicking wishlist
    console.log(`Added product ${productId} to wishlist`);
    // Add your wishlist logic here
  };

  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-2">Explore Our Products</h2>
      <div className="text-center mb-8">
        <button className="text-gray-600 hover:text-black font-medium mr-4">NEW ARRIVAL</button>
        <button className="text-blue-500 font-medium">TRENDING</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">{product.price}</span>
                <button 
                  className="text-gray-400 hover:text-red-500 text-lg"
                  onClick={(e) => handleWishlistClick(e, product.id)}
                >
                  ♡
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 line-through">{product.discount}</span>
                <span className="text-sm text-red-500 font-medium">-20%</span>
              </div>
              <h3 className="text-sm font-medium text-black mt-2 text-left">{product.title}</h3>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-xs text-gray-400">{product.colors}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreOurProducts;