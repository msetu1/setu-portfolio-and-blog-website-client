'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-[95%] mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">
          rfSetu
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        
        {/* Nav Links */}
        <ul className={`lg:flex space-x-6  ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li><Link href="/" className="hover:text-green-400">Home</Link></li>
          <li><Link href="/projects" className="hover:text-green-400">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          <li>
            <Link href="/login" className="bg-green-500 hover:bg-green-600 hover:rounded-full px-4 py-2 rounded-md font-bold text-white">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
