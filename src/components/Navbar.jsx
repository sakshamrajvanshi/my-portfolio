import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => setDarkMode(!darkMode);

  const links = ['home', 'about', 'projects', 'contact'];

  return (
    <motion.nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-gray-800 dark:text-white">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Saksham.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map(link => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-500 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}

          {/* 🌙 Theme Toggle */}
          <li className="ml-4 cursor-pointer" onClick={toggleTheme}>
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 dark:text-gray-200">
            {links.map(link => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-indigo-600"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <li className="cursor-pointer" onClick={() => { toggleTheme(); setMenuOpen(false); }}>
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
