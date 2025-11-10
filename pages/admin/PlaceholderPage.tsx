
import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{title}</h1>
      <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-md text-center">
        <i className="fa-solid fa-person-digging text-6xl text-primary mb-4"></i>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Under Construction</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">This feature is currently being developed. Please check back later!</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
