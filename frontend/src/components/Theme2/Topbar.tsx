import { Menu } from "lucide-react";
import ThemeDropdown from "../theme_dropdown";

const Topbar = ({ toggleSidebar }: any) => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-gray-900 shadow-md">
      {/* Menu Icon to open sidebar */}
      <button
        className="text-gray-300 hover:text-white transition"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Page Title */}
      <h1 className="text-lg font-bold text-white">Multi-Theme Switcher</h1>

      {/* Theme Dropdown */}
      <div>
        <ThemeDropdown />
      </div>
    </header>
  );
};

export default Topbar;
