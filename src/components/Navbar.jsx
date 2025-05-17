import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../App';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <svg
              className="h-8 w-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path d="M8 10H24V12H8V10Z" fill="white" />
              <path d="M8 15H20V17H8V15Z" fill="white" />
              <path d="M8 20H16V22H8V20Z" fill="white" />
              <circle cx="24" cy="21" r="4" fill="#10B981" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">SoftSell</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Enhanced Theme Toggle Button */}
            <div className="ml-4 relative">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-300 focus:outline-none shadow-inner"
                aria-label="Toggle dark mode"
              >
                <span 
                  className={`absolute left-1 transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                >
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-blue-400 shadow-md">
                    {darkMode ? (
                      <MoonIcon className="h-3 w-3 text-gray-800" />
                    ) : (
                      <SunIcon className="h-3 w-3 text-amber-500" />
                    )}
                  </span>
                </span>
                <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
              </button>
              <span className="hidden md:block absolute mt-1 text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {darkMode ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="mr-3 relative flex items-center justify-center w-10 h-5 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-300 focus:outline-none shadow-inner"
              aria-label="Toggle dark mode"
            >
              <span 
                className={`absolute left-1 transform transition-transform duration-300 ${
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              >
                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-blue-400 shadow-sm">
                  {darkMode ? (
                    <MoonIcon className="h-2 w-2 text-gray-800" />
                  ) : (
                    <SunIcon className="h-2 w-2 text-amber-500" />
                  )}
                </span>
              </span>
              <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Theme Toggle Label */}
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {darkMode ? 'Dark Mode' : 'Light Mode'} Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;