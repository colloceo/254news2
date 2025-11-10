
import React from 'react';

const StatCard: React.FC<{ title: string; value: string; icon: string; color: string }> = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
    </div>
    <div className={`text-4xl ${color}`}>
      <i className={icon}></i>
    </div>
  </div>
);

const AdminDashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Articles" value="1,250" icon="fa-solid fa-newspaper" color="text-blue-500" />
        <StatCard title="Total Views" value="2.1M" icon="fa-solid fa-eye" color="text-green-500" />
        <StatCard title="Subscribers" value="15.8K" icon="fa-solid fa-users" color="text-purple-500" />
        <StatCard title="Messages" value="312" icon="fa-solid fa-inbox" color="text-orange-500" />
      </div>
      {/* Placeholder for more content */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activity</h2>
        <p className="text-gray-600 dark:text-gray-400">Activity feed will be displayed here...</p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
