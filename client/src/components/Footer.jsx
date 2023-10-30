import React from 'react';

import { FacebookLogo,InstagramLogo,TwitterLogo } from 'phosphor-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">snubby</h2>
            <p className="text-gray-400">
              Your go-to destination for trendy and fashionable clothing.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#">New Arrivals</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">123 Fashion Street</p>
            <p className="mb-2">City, Country</p>
            <p>Email: info@snubby.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex justify-center items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
              <FacebookLogo size={32}className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              < TwitterLogo size={32}className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <InstagramLogo size={32} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400">&copy; 2023 snubby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
