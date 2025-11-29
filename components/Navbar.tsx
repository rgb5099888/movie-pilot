import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, Github } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full h-16 border-b border-vp-border bg-vp-nav/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              NP
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap text-white">
              NAS Pilot
            </span>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand ${
                  isActive ? 'text-brand' : 'text-gray-300'
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <NavLink
            to="/order"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-brand hover:bg-brand-dark rounded-full transition-colors"
          >
            <ShoppingCart size={16} />
            立即定制
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
