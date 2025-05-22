import React from 'react';

const BestMonthOffer = () => {
  const mainImg = "https://via.placeholder.com/600x400?text=Main+Boots";
  const whiteBootsImg = "https://via.placeholder.com/300x200?text=White+Boots";
  const heelsImg = "https://via.placeholder.com/300x200?text=Heels";

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Best Month offer</h2>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Duis pellentesque turpis bibendum dui dictum pellentesque rhoncus. 
        fermentum tristique lobortis lacus magna. Commodo porta turpis malesuada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Main Image */}
        <div className="relative rounded-xl overflow-hidden">
          <img src={mainImg} alt="Boots Offer" className="w-full h-[400px] object-cover" />
          <div className="absolute top-5 left-5 bg-white/90 p-4 rounded-md shadow-md">
            <p className="text-xs text-gray-600 uppercase">Sale up to 30%</p>
            <h3 className="text-lg font-semibold">Walk in Comfort</h3>
            <p className="text-sm text-gray-500">NEW AUTUMN ARRIVAL 2024</p>
          </div>
        </div>

        {/* Right Column - Two stacked images */}
        <div className="grid grid-rows-2 gap-6">
          {/* White Boots */}
          <div className="relative rounded-xl overflow-hidden">
            <img src={whiteBootsImg} alt="White Boots" className="w-full h-[190px] object-cover" />
            <div className="absolute top-5 left-5 bg-white/90 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Walk in Comfort</h3>
              <p className="text-sm text-gray-500">NEW AUTUMN ARRIVAL 2024</p>
            </div>
          </div>

          {/* Heels */}
          <div className="relative rounded-xl overflow-hidden">
            <img src={heelsImg} alt="Heels" className="w-full h-[190px] object-cover" />
            <div className="absolute bottom-5 left-5 bg-white/90 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Walk in Comfort</h3>
              <p className="text-sm text-gray-500">NEW AUTUMN ARRIVAL 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMonthOffer;
