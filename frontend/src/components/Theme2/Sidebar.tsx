import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeDropdown from "../theme_dropdown";

const Sidebar = ({ isOpen, toggleSidebar }:any) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Header with toggle */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
        <h2 className="text-xl font-bold tracking-wide">🛒 ShopMate</h2>

        {/* Toggle button - visible only on mobile */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

        {/* Theme Switcher (Only Desktop) */}
<div className="hidden md:block px-4 py-3 border-b border-gray-700">
  <ThemeDropdown />
</div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4 mt-6 px-4">
        {["home", "about", "faq", "contact"].map((item) => (
          <NavLink
            key={item}
            to={`/theme2/${item}`}
            className={({ isActive }) =>
              `capitalize px-3 py-2 rounded-lg hover:bg-gray-800 transition ${
                isActive ? "bg-gray-800 text-white font-semibold" : "text-gray-300"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
