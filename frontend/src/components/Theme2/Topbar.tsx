import { Menu } from "lucide-react";
import ThemeDropdown from "../theme_dropdown";

const Topbar = ({ toggleSidebar }:any) => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-gray-900 shadow-md md:hidden">
      {/* Menu toggle */}
      <button onClick={toggleSidebar} className="text-white">
        <Menu size={24} />
      </button>

      {/* Title */}
      <h1 className="text-lg font-bold text-white">Multi-Theme Switcher</h1>

      {/* Theme Switcher */}
      <ThemeDropdown />
    </header>
  );
};

export default Topbar;
