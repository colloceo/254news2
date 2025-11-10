
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">News<span className="text-primary-light">254</span></h3>
            <p className="text-sm text-gray-400">Your trusted source for credible, timely, and in-depth news coverage from Kenya and around the world.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          {/* Categories Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map(cat => (
                <li key={cat.slug}><Link to={`/category/${cat.slug}`} className="text-sm hover:text-primary-light transition-colors">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-light transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-sm hover:text-primary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-primary-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest news headlines delivered directly to your inbox.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your Email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none" />
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-r-md">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-8">
          &copy; {new Date().getFullYear()} News254. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
