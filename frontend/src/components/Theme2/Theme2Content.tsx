import { useState, useEffect } from 'react';
import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ThemeDropdown from "../theme_dropdown";

const Theme2Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar's open state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Lock body scroll when sidebar is open
 useEffect(() => {
  if (isSidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [isSidebarOpen]);


  return (
    <div className="bg-gray-900 text-white font-serif min-h-screen relative">
      {/* Top Nav - Mobile Only */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800 border-b border-gray-700 fixed top-0 left-0 right-0 z-30">
        <h2 className="text-xl font-extrabold tracking-wide">🛒 ShopMate</h2>
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
  className={`absolute md:fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg px-4 py-6 z-40 transform transition-transform duration-300 md:translate-x-0 ${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>

        <h2 className="text-2xl font-extrabold mb-8 tracking-wide hidden md:block">🛒 ShopMate</h2>
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
        <div className="mt-6 md:mt-auto pt-6 text-xs text-gray-500 text-center">
          © 2025 ShopMate, Inc.
        </div>
      </aside>

      {/* Backdrop - Mobile only */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main
  className={`transition-all duration-300 px-6 py-8 w-full min-h-screen overflow-x-hidden ${
    isSidebarOpen ? 'opacity-50 blur-sm pointer-events-none' : ''
  } pt-16 md:pt-6 md:ml-64`}
>
  <Outlet />
</main>

    </div>
  );
};

const Theme2Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Theme2Layout />}>
        <Route index element={<Navigate to="theme2/home" />} />
        <Route path="theme2/home" element={<Home />} />
        <Route path="theme2/about" element={<About />} />
        <Route path="theme2/contact" element={<Contact />} />
        <Route path="theme2/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
};

export default Theme2Content;
