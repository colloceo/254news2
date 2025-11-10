
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <Routes>
            <Route path="/sys-mgmt-x7k9/auth-portal" element={<AdminLoginPage />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/*" element={<PublicLayout />} />
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
