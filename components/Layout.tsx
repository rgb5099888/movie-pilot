import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Show sidebar on Docs page and Setup page
  const showSidebar = location.pathname.startsWith('/docs') || location.pathname.startsWith('/setup');

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-vp-bg text-vp-text font-sans selection:bg-brand selection:text-white">
      <Navbar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      {showSidebar && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          closeSidebar={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* 
         Adjust padding based on whether sidebar is shown.
         If sidebar is shown (Docs/Setup), add left padding on desktop.
         If not (Home, Order), centered layout managed by pages.
      */}
      <main 
        className={`pt-16 min-h-screen transition-all duration-300 ${
          showSidebar ? 'lg:pl-64' : ''
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;