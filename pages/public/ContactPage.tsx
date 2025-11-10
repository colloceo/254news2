
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
        // Simulate API call
        setStatus('success');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold dark:text-white">Get In Touch</h1>
        <p className="text-lg text-neutral dark:text-gray-400 mt-2">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-text dark:text-gray-300">Full Name</label>
              <input type="text" id="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-text dark:text-gray-300">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-text dark:text-gray-300">Message</label>
              <textarea id="message" rows={5} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600"></textarea>
            </div>
            <div>
              <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {status === 'success' && <p className="text-green-600 mt-4 text-center">Thank you! Your message has been sent successfully.</p>}
          {status === 'error' && <p className="text-red-600 mt-4 text-center">Something went wrong. Please try again later.</p>}
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h2>
                <div className="space-y-4 text-neutral-text dark:text-gray-300">
                    <p className="flex items-start"><i className="fa-solid fa-location-dot text-primary w-6 mt-1"></i><span>123 News Avenue, Westlands, Nairobi, Kenya</span></p>
                    <p className="flex items-center"><i className="fa-solid fa-phone text-primary w-6"></i><span>+254 700 123 456</span></p>
                    <p className="flex items-center"><i className="fa-solid fa-envelope text-primary w-6"></i><span>info@news254.co.ke</span></p>
                </div>
                <div className="flex space-x-6 mt-8 text-2xl text-neutral dark:text-gray-400">
                    <a href="#" className="hover:text-primary"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-primary"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-primary"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817743930816!2d36.82194601475836!3d-1.2863890990649553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5b54f4b1d%3A0x2f9b2c2c0f2b84f3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678886472000!5m2!1sen!2sus" 
                width="100%" 
                height="350" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
