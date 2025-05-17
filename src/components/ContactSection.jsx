import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions about our software licenses or bulk purchasing options? Contact our team for personalized assistance.
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="text-blue-600 mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-gray-600">123 Software Lane, Tech District, City, 10001</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-blue-600 mr-3">
                  <i className="fas fa-phone"></i>
                </div>
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-gray-600">info@softsell.com</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-3">Business Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;