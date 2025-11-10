
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, comments } from '../../data/mockData';
import Sidebar from '../../components/public/Sidebar';
import ErrorPage from './ErrorPage';

const ArticlePage: React.FC = () => {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug);
    const relatedArticles = article ? articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 2) : [];
    const articleComments = article ? comments.filter(c => c.articleId === article.id) : [];

    if (!article) {
        return <ErrorPage code="404" message="Article not found." />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <main className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                        <Link to={`/category/${article.category.toLowerCase()}`} className="text-primary dark:text-primary-light font-semibold text-sm uppercase">{article.category}</Link>
                        <h1 className="text-3xl md:text-4xl font-extrabold my-3 text-neutral-text dark:text-white">{article.title}</h1>
                        <div className="flex items-center space-x-4 text-sm text-neutral dark:text-gray-400 mb-6">
                            <span>By <strong>{article.author}</strong></span>
                            <span><i className="fa-solid fa-clock mr-1"></i> {article.timestamp}</span>
                            <span><i className="fa-solid fa-eye mr-1"></i> {article.views.toLocaleString()} Views</span>
                        </div>
                        
                        <img src={article.featuredImage} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-6" />

                        <div className="prose dark:prose-invert max-w-none text-lg" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                        
                        {/* Share Buttons */}
                        <div className="mt-8 pt-6 border-t dark:border-gray-700 flex items-center space-x-4">
                            <span className="font-bold text-neutral-text dark:text-white">Share:</span>
                            <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f text-2xl"></i></a>
                            <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter text-2xl"></i></a>
                            <a href="#" className="text-green-500 hover:text-green-700"><i className="fab fa-whatsapp text-2xl"></i></a>
                            <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin-in text-2xl"></i></a>
                        </div>
                    </div>

                    {/* Related Stories */}
                    <div className="mt-12">
                         <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6 dark:text-white">Related Stories</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedArticles.map(relArt => (
                                <div key={relArt.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-neutral-light dark:hover:bg-gray-800 transition-colors">
                                    <img src={relArt.featuredImage} alt={relArt.title} className="w-24 h-20 object-cover rounded" />
                                    <div>
                                    <Link to={`/category/${relArt.category.toLowerCase()}`} className="text-primary dark:text-primary-light font-semibold text-xs uppercase">{relArt.category}</Link>
                                    <h3 className="font-semibold text-md leading-tight mt-1 hover:text-primary dark:hover:text-primary-light">
                                        <Link to={`/article/${relArt.slug}`}>{relArt.title}</Link>
                                    </h3>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                    {/* Comment Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6 dark:text-white">Comments ({articleComments.length})</h2>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <form className="mb-6">
                                <textarea className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Write a comment..."></textarea>
                                <button type="submit" className="mt-2 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-md">Post Comment</button>
                            </form>
                            <div className="space-y-6">
                                {articleComments.map(comment => (
                                    <div key={comment.id} className="flex space-x-4">
                                        <img src={comment.avatar} alt={comment.author} className="w-12 h-12 rounded-full" />
                                        <div>
                                            <div className="flex items-baseline space-x-2">
                                                <h4 className="font-bold dark:text-white">{comment.author}</h4>
                                                <span className="text-xs text-neutral dark:text-gray-400">{comment.timestamp}</span>
                                            </div>
                                            <p className="mt-1 text-neutral-text dark:text-gray-300">{comment.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <div className="lg:col-span-1">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
