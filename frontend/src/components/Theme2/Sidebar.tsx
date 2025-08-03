import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ThemeDropdown from "../theme_dropdown";

const Sidebar = ({ isOpen, toggleSidebar }:any) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:flex`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">🛒 ShopMate</h2>

        {/* Collapse button - mobile only */}
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Only show theme dropdown on desktop */}
      <div className="hidden md:block px-4 my-4">
        <ThemeDropdown />
      </div>

      <nav className="flex flex-col gap-4 mt-4 px-4">
        {["home", "about", "faq", "contact"].map((item) => (
          <NavLink
            key={item}
            to={`/theme2/${item}`}
            className={({ isActive }) =>
              `capitalize px-3 py-2 rounded-lg hover:bg-gray-800 ${
                isActive ? "bg-gray-800 font-semibold" : "text-gray-300"
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
