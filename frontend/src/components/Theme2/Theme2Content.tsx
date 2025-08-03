import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "../footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const Theme2Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // collapsed by default on mobile

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white font-serif">
      {/* Flex wrapper for layout */}
      <div className="flex flex-1">
        {/* Sidebar - visible on desktop or toggled on mobile */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Topbar - visible only on mobile */}
          <div className="block md:hidden">
            <Topbar toggleSidebar={toggleSidebar} />
          </div>

          {/* Main Page */}
          <main className="flex-grow p-4 sm:p-6">
            <Routes>
              <Route path="/theme2/home" element={<Home />} />
              <Route path="/theme2/about" element={<About />} />
              <Route path="/theme2/contact" element={<Contact />} />
              <Route path="/theme2/faq" element={<FAQ />} />
            </Routes>
          </main>

          {/* Footer always at the bottom */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Theme2Content;
