import React from 'react';

const DealOfTheDay = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-xl">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
        <img
          src="/images/shoes_featured_one.jpg"
          alt="Deal of the Day"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Content Section */}
      <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          DEAL <br /> OF THE DAY
        </h2>
        <div className="mt-5 w-16 h-1 bg-black rounded"></div>

        {/* Subtext */}
        <p className="mt-4 text-gray-500 text-sm">
          CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT
        </p>
        <p className="mt-2 text-gray-400 text-xs leading-relaxed">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to the leap into and scrambled it to the leap into y
        </p>

        {/* Countdown Boxes */}
        <div className="mt-6 flex gap-2">
          {['137', '09', '08', '17'].map((day, index) => (
            <div key={index} className="bg-blue-100 text-blue-700 text-center px-3 py-2 rounded-lg">
              <div className="text-lg font-bold">{day}</div>
              <div className="text-xs">DAY</div>
            </div>
          ))}
        </div>

        {/* Shop Now Button */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default DealOfTheDay;

