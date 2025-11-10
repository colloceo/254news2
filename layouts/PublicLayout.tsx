
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';
import BreakingNewsBanner from '../components/public/BreakingNewsBanner';
import HomePage from '../pages/public/HomePage';
import ArticlePage from '../pages/public/ArticlePage';
import ContactPage from '../pages/public/ContactPage';
import AboutPage from '../pages/public/AboutPage';
import ErrorPage from '../pages/public/ErrorPage';

const PublicLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-light dark:bg-gray-900 text-neutral-text dark:text-neutral-text-dark">
            <Header />
            <BreakingNewsBanner />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:slug" element={<ArticlePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Simplified category page for prototype */}
                    <Route path="/category/:categorySlug" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage code="404" message="Page Not Found" />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
