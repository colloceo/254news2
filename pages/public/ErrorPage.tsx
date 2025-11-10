
import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  code: string;
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code, message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-8xl font-extrabold text-primary">{code}</h1>
      <p className="text-2xl font-semibold mt-4 text-neutral-text dark:text-white">{message}</p>
      <p className="text-neutral dark:text-gray-400 mt-2">
        {code === '404' ? "Sorry, the page you're looking for doesn't exist." : "Something went wrong on our end. Please try again later."}
      </p>
      <Link 
        to="/" 
        className="mt-8 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
