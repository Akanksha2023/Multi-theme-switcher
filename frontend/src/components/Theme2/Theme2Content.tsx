import { Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ThemeDropdown from "../theme_dropdown";

const Theme2Layout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar */}
     <aside className="w-full md:w-64 bg-gray-800 shadow-lg px-4 py-6 flex flex-col justify-start md:fixed md:h-screen max-h-[50vh] md:max-h-none overflow-y-auto">

        <h2 className="text-2xl font-extrabold mb-8 tracking-wide">🛒 ShopMate</h2>

        {/* Dropdown toggle */}
        <div className="mb-6">
          <ThemeDropdown />
        </div>

        <nav className="flex flex-col gap-3">
          {["home", "about", "faq", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/theme2/${item}`}
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

      {/* Page Content */}
      <main className="w-full md:ml-64 px-6 py-8 mt-4 md:mt-0 overflow-x-hidden">

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
