
import React from 'react';
import { articles } from '../../data/mockData';
import ArticleCard from '../../components/public/ArticleCard';
import Sidebar from '../../components/public/Sidebar';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredArticle = articles.find(a => a.isFeatured);
  const trendingArticles = articles.filter(a => a.isTrending).slice(0, 4);
  const recentArticles = articles.filter(a => !a.isFeatured).slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Section */}
      {featuredArticle && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={featuredArticle.featuredImage} alt={featuredArticle.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
              <Link to={`/category/${featuredArticle.category.toLowerCase()}`} className="bg-secondary text-white px-2 py-1 text-xs font-bold rounded">{featuredArticle.category}</Link>
              <h1 className="text-white text-3xl font-bold mt-2 leading-tight">
                <Link to={`/article/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
              </h1>
              <p className="text-gray-300 text-sm mt-2">{featuredArticle.author} &bull; {featuredArticle.timestamp}</p>
            </div>
          </div>
          <div className="space-y-4">
             <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 dark:text-white">Trending News</h2>
             {trendingArticles.map(article => (
               <div key={article.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-neutral-light dark:hover:bg-gray-800 transition-colors">
                 <img src={article.featuredImage} alt={article.title} className="w-24 h-20 object-cover rounded" />
                 <div>
                   <Link to={`/category/${article.category.toLowerCase()}`} className="text-primary dark:text-primary-light font-semibold text-xs uppercase">{article.category}</Link>
                   <h3 className="font-semibold text-md leading-tight mt-1 hover:text-primary dark:hover:text-primary-light">
                    <Link to={`/article/${article.slug}`}>{article.title}</Link>
                   </h3>
                 </div>
               </div>
             ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2">
            <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6 dark:text-white">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </main>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
