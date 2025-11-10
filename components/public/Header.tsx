
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { categories } from '../../data/mockData';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white dark:bg-neutral-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="text-sm text-neutral dark:text-gray-400">
            {new Date().toLocaleDateString(language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/about" className="text-sm hover:text-primary dark:hover:text-primary-light">About</NavLink>
            <NavLink to="/contact" className="text-sm hover:text-primary dark:hover:text-primary-light">Contact</NavLink>
            <div className="flex items-center space-x-2">
                 <button onClick={toggleLanguage} className="text-sm font-semibold">
                    {language === 'en-KE' ? 'SW' : 'EN'}
                </button>
                <button onClick={toggleTheme} className="focus:outline-none">
                    {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button>
            </div>
          </div>
        </div>
        
        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-3xl font-extrabold text-neutral-text dark:text-white">
            News<span className="text-primary">254</span>
          </NavLink>
          <div className="relative w-1/3">
            <input type="text" placeholder={t('search')} className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            <i className="fa-solid fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="bg-primary dark:bg-primary-dark">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-6">
            {categories.map(category => (
              <li key={category.slug}>
                <NavLink 
                  to={`/category/${category.slug}`}
                  className="block py-3 text-white font-semibold uppercase text-sm tracking-wider hover:text-yellow-300 transition-colors duration-200"
                  style={({ isActive }) => ({ borderBottom: isActive ? '3px solid #FBBF24' : '3px solid transparent' })}
                >
                  <i className={`${category.icon} mr-2`}></i>{t(category.slug)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
