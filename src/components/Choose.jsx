import { useContext } from 'react';
import { ThemeContext } from '../App';
import {
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Choose = () => {
  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
      title: 'Secure Transactions',
      description:
        'Our platform uses bank-level encryption and security protocols to protect your data and ensure safe transactions.',
    },
    {
      icon: <BanknotesIcon className="h-10 w-10 text-blue-600" />,
      title: 'Best Market Value',
      description:
        'Get up to 70% of original license costs through our competitive pricing model and extensive reseller network.',
    },
    {
      icon: <ClockIcon className="h-10 w-10 text-blue-600" />,
      title: 'Fast Processing',
      description:
        'From valuation to payment, our streamlined process takes as little as 48 hours to complete.',
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-blue-600" />,
      title: 'Expert Support',
      description:
        'Our team of licensing experts is available to help you navigate complex license transfers and maximizing value.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose SoftSell
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide an unmatched experience for businesses looking to recover value from unused software licenses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border-t-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-blue-600 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to turn your unused licenses into cash?
              </h3>
              <p className="text-blue-100">
                Join thousands of businesses that have recovered value with SoftSell.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-sm transition-colors duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Choose;
