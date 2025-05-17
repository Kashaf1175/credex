import { useContext } from 'react';
import { ThemeContext } from '../App';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-gray-900 transition-colors duration-300 animate-slide-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
              Turn Unused Software Licenses Into Cash
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              SoftSell helps businesses recover value from unused or excess software licenses with a fast, secure, and transparent process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200"
              >
                Sell My Licenses
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-300"
              >
                Learn How It Works
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <div className="relative rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 p-1 transition-colors duration-300">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 transition-colors duration-300">
                <div className="space-y-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">Software License Management Made Easy</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center transition-colors duration-300">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Get instant license valuations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center transition-colors duration-300">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Secure, transparent process</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center transition-colors duration-300">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Payment within 48 hours</span>
                  </div>
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;