import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DOCS_SIDEBAR_ITEMS, SETUP_SIDEBAR_ITEMS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  // Determine which items to show based on the path
  const isSetupPage = location.pathname.includes('setup');
  const items = isSetupPage ? SETUP_SIDEBAR_ITEMS : DOCS_SIDEBAR_ITEMS;
  const title = isSetupPage ? '安装准备' : '文档目录';

  // Simple function to handle hash scrolling manually since React Router HashRouter sometimes struggles with pure anchor tags within SPA
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeSidebar();
  };

  return (
    <aside
      className={`fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform border-r border-vp-border bg-vp-sidebar ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="h-full px-6 py-6 overflow-y-auto">
        <h5 className="mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {title}
        </h5>
        <ul className="space-y-3 font-medium text-sm">
          {items.map((item) => {
            // Extract hash from link (e.g., /docs#intro -> intro)
            const parts = item.link.split('#');
            const pathPart = parts[0]; // /docs or /setup
            const hashPart = parts[1]; // intro, requirements, etc.
            
            // Check if we are on the correct page and the hash matches
            const isActive = location.pathname === pathPart && location.hash === `#${hashPart}`;

            return (
              <li key={item.link}>
                <button
                  onClick={() => {
                    if (location.pathname === pathPart && hashPart) {
                      // Already on the page, just scroll
                      window.location.hash = hashPart;
                      handleScroll(hashPart);
                    } else {
                      // Navigate to page first
                      window.location.href = `/#${item.link}`;
                      closeSidebar();
                    }
                  }}
                  className={`flex items-center w-full p-2 rounded-lg transition-colors group ${
                    isActive
                      ? 'text-brand font-semibold bg-brand/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>

        {!isSetupPage && (
          <div className="mt-8 pt-8 border-t border-vp-border">
            <h5 className="mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              外部链接
            </h5>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <a href="https://github.com/jxxghp/MoviePilot" target="_blank" rel="noreferrer" className="flex items-center p-2 text-gray-300 hover:text-brand transition-colors">
                  MoviePilot GitHub
                </a>
              </li>
              <li>
                <a href="https://emby.media" target="_blank" rel="noreferrer" className="flex items-center p-2 text-gray-300 hover:text-brand transition-colors">
                  Emby 官网
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;