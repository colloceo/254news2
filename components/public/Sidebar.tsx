
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/mockData';

const Sidebar: React.FC = () => {
    const latestArticles = articles.slice(0, 5);

    return (
        <aside className="space-y-8">
            {/* Latest News */}
            <div>
                <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 dark:text-white">Latest News</h3>
                <ul className="space-y-4">
                    {latestArticles.map(article => (
                        <li key={article.id} className="flex items-start space-x-3">
                            <img src={article.featuredImage} alt={article.title} className="w-20 h-16 object-cover rounded" />
                            <div>
                                <Link to={`/category/${article.category.toLowerCase()}`} className="text-primary dark:text-primary-light text-xs font-semibold uppercase">{article.category}</Link>
                                <h4 className="text-sm font-semibold leading-tight mt-1 hover:text-primary dark:hover:text-primary-light">
                                    <Link to={`/article/${article.slug}`}>{article.title}</Link>
                                </h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ad Space */}
            <div className="bg-gray-100 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
                <span className="text-neutral dark:text-gray-400">Ad Space</span>
            </div>

            {/* Newsletter */}
            <div>
                <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 dark:text-white">Newsletter</h3>
                <div className="bg-neutral-light dark:bg-gray-800 p-6 rounded-lg text-center">
                    <i className="fa-solid fa-envelope-open-text text-4xl text-primary mb-4"></i>
                    <p className="mb-4 text-sm">Subscribe to get the latest news in your inbox.</p>
                    <form>
                        <input type="email" placeholder="Your Email" className="w-full bg-white dark:bg-gray-700 px-4 py-2 rounded-md focus:outline-none mb-2" />
                        <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
             {/* Ad Space */}
             <div className="bg-gray-100 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
                <span className="text-neutral dark:text-gray-400">Ad Space 2</span>
            </div>
        </aside>
    );
};

export default Sidebar;
