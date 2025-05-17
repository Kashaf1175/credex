import { useContext } from 'react';
import { ThemeContext } from '../App';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'TechGrowth Inc.',
      content: 'SoftSell transformed what would have been a total loss into a significant recovery for our department. We were able to recoup over 60% of our initial investment on licenses we no longer needed after migrating to cloud services.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CFO',
      company: 'Innovate Solutions',
      content: 'As a CFO, Im always looking for ways to optimize our budget. SoftSell helped us turn our redundant software licenses into working capital. The process was seamless, secure, and surprisingly quick - we had the funds within 3 days of submission.',
      rating: 5,
    },
    {
      name: 'Julia Rodriguez',
      role: 'Operations Manager',
      company: 'Global Systems Ltd.',
      content: 'After downsizing our team, we had several expensive CAD software licenses sitting unused. SoftSell\'s platform gave us an instant valuation and handled all the paperwork. I was impressed by their knowledge of licensing regulations.',
      rating: 4
    }
  ];

  // Generate star ratings
  const renderStars = (rating) => {
    return Array(5).fill().map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by hundreds of businesses to recover value from their software assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.content}"</p>
                </blockquote>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src="/api/placeholder/100/100" 
                      alt={testimonial.name} 
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200"
          >
            Join Our Satisfied Clients
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;