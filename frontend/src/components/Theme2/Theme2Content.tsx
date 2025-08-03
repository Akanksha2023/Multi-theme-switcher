import { useState } from 'react';
import { NavLink, Outlet, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ThemeDropdown from "../theme_dropdown";

const Theme2Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar's open state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // The main container is now a simple wrapper for the layout.
    // The scrolling is handled by the main content area, which is more reliable.
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Mobile Menu Button - visible only on small screens */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800 border-b border-gray-700 fixed w-full z-10">
        <h2 className="text-xl font-extrabold tracking-wide">🛒 ShopMate</h2>
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none">
          {/* Hamburger icon using an SVG */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar: Fixed to the top on mobile, to the side on desktop.
          It is conditionally rendered based on the isSidebarOpen state on mobile.
          The transition adds a smooth open/close animation. */}
      <aside className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg px-4 py-6 flex flex-col justify-start z-20 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* The sidebar content */}
        <h2 className="text-2xl font-extrabold mb-8 tracking-wide hidden md:block">🛒 ShopMate</h2>
        <div className="mb-6">
          <ThemeDropdown />
        </div>
        
        {/* Your original navigation links, untouched */}
        <nav className="flex flex-col gap-3">
          {["home", "about", "faq", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/theme2/${item}`}
              onClick={toggleSidebar} // Close sidebar when a link is clicked on mobile
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

      {/* Main Content: Has a top margin on mobile to account for the fixed header,
          and a left margin on desktop to make space for the sidebar.
          The rest of the content will now scroll naturally within the body. */}
      <main className="md:ml-64 pt-16 md:pt-4 px-6 py-8 overflow-y-auto">
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
