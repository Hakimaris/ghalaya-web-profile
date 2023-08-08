import React, { useState } from 'react';

const Dropdownlang = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center>
        Dropdown
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300">
          <li className="py-2 px-4 hover:bg-gray-100">Item 1</li>
          <li className="py-2 px-4 hover:bg-gray-100">Item 2</li>
          <li className="py-2 px-4 hover:bg-gray-100">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdownlang;
