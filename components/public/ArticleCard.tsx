
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  className?: string;
  imageHeight?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, className = '', imageHeight = 'h-48' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <Link to={`/article/${article.slug}`}>
        <img src={article.featuredImage} alt={article.title} className={`w-full ${imageHeight} object-cover`} />
      </Link>
      <div className="p-4">
        <Link to={`/category/${article.category.toLowerCase()}`} className="text-primary dark:text-primary-light font-semibold text-sm uppercase">{article.category}</Link>
        <h3 className="mt-2 font-bold text-lg text-neutral-text dark:text-white hover:text-primary dark:hover:text-primary-light">
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <div className="text-xs text-neutral dark:text-gray-400 mt-2">
          <span>By {article.author}</span> &bull; <span>{article.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
