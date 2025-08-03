import  { useState } from 'react';
import { NavLink, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import ThemeDropdown from '../theme_dropdown';
import { useTheme } from '../../contexts/ThemeContext';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// 1️⃣ Layout Component
const Theme2Layout = () => {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`min-h-screen flex bg-gray-900 text-white font-sans ${theme}`}>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-64 md:w-56 z-40 bg-gray-800 shadow-lg px-4 py-6
          flex flex-col justify-between transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close Button */}
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        )}

        {/* Top Section */}
        <div>
          <h2 className="text-2xl font-extrabold mb-8 tracking-wide">🛒 ShopMate</h2>
          <div className="mb-6">
            <ThemeDropdown />
          </div>

          <nav className="flex flex-col gap-3">
            {['home', 'about', 'faq', 'contact'].map((item) => (
              <NavLink
                key={item}
                to={item}
                className={({ isActive }) =>
                  `py-2 px-3 rounded text-sm font-medium ${
                    isActive ? 'bg-indigo-500 text-white' : 'hover:bg-gray-700'
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-400 text-center mt-8 md:mt-auto">
          © 2025 ShopMate, Inc.
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 mt-16 md:mt-0 md:ml-56 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

// 2️⃣ Main Theme2Content with Routes
const Theme2Content = () => {
  return (
    <Routes>
      <Route path="/theme2" element={<Theme2Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
};

export default Theme2Content;
