
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminAnalyticsPage from '../pages/admin/AdminAnalyticsPage';
import PlaceholderPage from '../pages/admin/PlaceholderPage';
import { useTheme } from '../hooks/useTheme';

const AdminHeader: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-end items-center">
             <button onClick={toggleTheme} className="focus:outline-none text-xl text-gray-600 dark:text-gray-300">
                {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
        </header>
    );
};

const ProtectedRoute: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAuthenticated) {
        return <Navigate to="/sys-mgmt-x7k9/auth-portal" replace />;
    }
    return <>{children}</>;
};

const AdminLayout: React.FC = () => {
  return (
    <ProtectedRoute>
        <div className="flex h-screen bg-gray-100 dark:bg-neutral-dark text-neutral-text dark:text-neutral-text-dark">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <AdminHeader />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-neutral-dark p-6">
            <Routes>
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="analytics" element={<AdminAnalyticsPage />} />
                <Route path="articles" element={<PlaceholderPage title="Article Management" />} />
                <Route path="categories" element={<PlaceholderPage title="Category Management" />} />
                <Route path="comments" element={<PlaceholderPage title="Comment Management" />} />
                <Route path="messages" element={<PlaceholderPage title="Message Management" />} />
                <Route path="newsletter" element={<PlaceholderPage title="Newsletter Management" />} />
                <Route path="settings" element={<PlaceholderPage title="Site Settings" />} />
                <Route index element={<Navigate to="dashboard" replace />} />
            </Routes>
            </main>
        </div>
        </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
