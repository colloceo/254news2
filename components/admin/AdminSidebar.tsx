
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        navigate('/sys-mgmt-x7k9/auth-portal');
    };

  const navItems = [
    { path: '/admin/dashboard', icon: 'fa-solid fa-chart-pie', label: 'Dashboard' },
    { path: '/admin/articles', icon: 'fa-solid fa-newspaper', label: 'Articles' },
    { path: '/admin/categories', icon: 'fa-solid fa-tags', label: 'Categories' },
    { path: '/admin/comments', icon: 'fa-solid fa-comments', label: 'Comments' },
    { path: '/admin/messages', icon: 'fa-solid fa-inbox', label: 'Messages' },
    { path: '/admin/newsletter', icon: 'fa-solid fa-paper-plane', label: 'Newsletter' },
    { path: '/admin/analytics', icon: 'fa-solid fa-chart-line', label: 'Analytics' },
    { path: '/admin/settings', icon: 'fa-solid fa-gears', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col">
      <div className="p-4 border-b dark:border-gray-700 text-center">
         <NavLink to="/admin/dashboard" className="text-2xl font-extrabold text-neutral-text dark:text-white">
            Admin<span className="text-primary">Panel</span>
        </NavLink>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                    `flex items-center space-x-3 px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : ''}`
                }
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t dark:border-gray-700">
        <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-2 w-full rounded-md text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
            <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center"></i>
            <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
