import { useState } from 'react';
import { NavLink, Outlet, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ThemeDropdown from "../theme_dropdown";

const Theme2Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white font-sans">

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen z-40 bg-gray-800 shadow-lg px-2 py-6
        w-20 md:w-24 transition-transform duration-300
        flex flex-col justify-between
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0`}
      >
        {/* Top: Logo + Theme + Nav */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold text-center">ShopMate</h2>

          <div className="w-full px-1">
            <ThemeDropdown />
          </div>

          <nav className="flex flex-col items-center gap-3 text-xs w-full">
            {["home", "about", "faq", "contact"].map((item) => (
              <NavLink
                key={item}
                to={`/theme2/${item}`}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-1.5 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 font-semibold text-white"
                      : "hover:bg-gray-700 hover:text-indigo-300"
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer at bottom */}
        <footer className="text-[10px] text-gray-400 text-center px-1 w-full">
          © 2025 ShopMate, Inc.
        </footer>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar (mobile only) */}
        <div className="md:hidden bg-gray-800 p-4 flex justify-between items-center shadow-md z-50">
          <h2 className="text-base font-bold">ShopMate</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 md:ml-24 pt-20 md:pt-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
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
