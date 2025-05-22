import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-sm text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="#" className="hover:underline">Cookie Settings</a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Terms and Conditions</a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:underline">Imprint</a>
        <span className="hidden sm:inline">|</span>
        <span className="text-gray-400">© 2020 adidas Malaysia Sdn Bhd</span>
      </div>
    </footer>
  );
};

export default Footer;

