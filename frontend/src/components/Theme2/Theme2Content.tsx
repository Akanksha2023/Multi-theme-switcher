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
        className={`fixed md:static top-0 left-0 h-full z-40 bg-gray-800 text-white shadow-lg px-4 py-6 
        w-64 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:flex md:flex-col`}
      >
        <h2 className="text-2xl font-extrabold mb-8 tracking-wide">🛒 ShopMate</h2>
        <div className="mb-6">
          <ThemeDropdown />
        </div>
        <nav className="flex flex-col gap-3">
          {["home", "about", "faq", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/theme2/${item}`}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `capitalize px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "hover:bg-gray-700 hover:text-indigo-300"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6 text-xs text-gray-400 text-center">
          © 2025 ShopMate, Inc.
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="md:hidden bg-gray-800 p-4 flex justify-between items-center shadow-md z-50">
          <h2 className="text-xl font-bold">🛒 ShopMate</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto pt-16 md:pt-6">
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
