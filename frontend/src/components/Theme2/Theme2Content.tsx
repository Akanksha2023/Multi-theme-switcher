import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, NavLink, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ThemeDropdown from '../theme_dropdown';

const Theme2Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
  }, [isSidebarOpen]);

  return (
    <div className="bg-gray-900 text-white font-serif min-h-screen relative flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-gray-800 flex justify-between items-center px-4 py-3 border-b border-gray-700">
        <h2 className="text-xl font-bold">🛒 ShopMate</h2>
        <button onClick={toggleSidebar} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg px-4 py-6 z-40 transform transition-transform duration-300 
        w-4/5 sm:w-64 md:w-56 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="hidden md:block mb-8">
          <h2 className="text-2xl font-extrabold tracking-wide">🛒 ShopMate</h2>
        </div>

        <div className="mb-6">
          <ThemeDropdown />
        </div>

        <nav className="flex flex-col gap-3">
          {['home', 'about', 'faq', 'contact'].map((item) => (
            <NavLink
              key={item}
              to={`/theme2/${item}`}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `capitalize px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'hover:bg-gray-700 hover:text-indigo-300'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 md:mt-auto pt-6 text-xs text-gray-400 text-center">
          © 2025 ShopMate, Inc.
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <main className="pt-16 md:pt-8 w-full px-6 py-6 md:ml-56 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

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
