import React, { useState } from 'react';
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

// Use the same client config as in LoginPage
export const client = createThirdwebClient({
  clientId: "8de0130ba5288b868bfc6ae75a9b5480",
});

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className=" fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">Circle</span>
          <span className="text-red-500">Dashboard</span>
        </div>

        {/* Hamburger (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 w-full md:justify-end">
          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search tournaments and teams"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Icons + ConnectButton */}
          <div className="flex items-center space-x-4">
            <div className="grid grid-cols-3 gap-1 text-blue-500 text-lg leading-tight">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>:</span>
              ))}
            </div>
            <ConnectButton client={client} theme="light" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search tournaments and teams"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Icons + ConnectButton */}
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-3 gap-1 text-blue-500 text-lg leading-tight">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>:</span>
              ))}
            </div>
            <ConnectButton client={client} theme="light" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
