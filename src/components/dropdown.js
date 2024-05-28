import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer hover:text-gray-700">Services</div>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Automation</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Consulting</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Data & Insights</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
