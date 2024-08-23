import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <div className="text-2xl font-bold cursor-pointer">
          Logo
        </div>
        <ul className="flex space-x-8">
          <li className="hover:text-gray-400 transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-400 transition duration-200 cursor-pointer">
            Projects
          </li>
          <li className="hover:text-gray-400 transition duration-200 cursor-pointer">
            Skills
          </li>
          <li className="hover:text-gray-400 transition duration-200 cursor-pointer">
            Contacts
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
