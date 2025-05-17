import { useContext } from 'react'; 
import { ThemeContext } from '../App'; 
import { DocumentTextIcon, CurrencyDollarIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const steps = [
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-blue-600" />,
      title: 'Upload License',
      description: 'Upload your software license details through our secure platform. We support major vendors including Microsoft, Adobe, Oracle, and more.'
    },
    {
      icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-600" />,
      title: 'Get Valuation',
      description: 'Our AI-powered system analyzes your license against current market demand to determine a fair and competitive offer within minutes.'
    },
    {
      icon: <CreditCardIcon className="h-12 w-12 text-blue-600" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via your preferred method within 48 hours. Fast, secure, and hassle-free transactions guaranteed.'
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const arrowVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, delay: 1 }
    },
    hover: {
      x: 10,
      transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 1.2, type: "spring" }
    },
    hover: { 
      scale: 1.1,
      backgroundColor: "#2563EB",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            Turn your unused software licenses into cash with our simple three-step process
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
              variants={itemVariants}
              whileHover="hover"
            >
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                  variants={arrowVariants}
                  whileHover="hover"
                >
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              )}
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 dark:bg-blue-900 mb-4"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover="hover"
            whileTap="tap"
          >
            Start Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;