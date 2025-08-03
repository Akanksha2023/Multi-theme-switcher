import { Menu } from "lucide-react";
import ThemeDropdown from "../theme_dropdown";

const Topbar = ({ toggleSidebar }: any) => {
  return (
    // Only visible on mobile
    <header className="flex items-center justify-between px-4 py-4 bg-gray-900 shadow-md md:hidden">
      {/* Sidebar toggle button */}
      <button
        className="text-gray-300 hover:text-white transition"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Title + Theme Dropdown (centered) */}
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-bold text-white whitespace-nowrap">
          Multi-Theme Switcher
        </h1>
        <ThemeDropdown />
      </div>

      {/* Spacer to balance layout */}
      <div className="w-6" />
    </header>
  );
};

export default Topbar;
