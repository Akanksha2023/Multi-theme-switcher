import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const Theme2Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen font-serif bg-gray-950 text-white">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
          }`}
        >
          {/* Topbar (only for mobile sidebar toggle) */}
          <div className="md:hidden">
            <Topbar toggleSidebar={toggleSidebar} />
          </div>

          {/* Page content */}
          <main className="p-6 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold">
                🌓 Multi-Theme Shop (Theme 2)
              </h1>

           
            </div>

            <Routes>
              <Route path="/theme2/home" element={<Home />} />
              <Route path="/theme2/about" element={<About />} />
              <Route path="/theme2/contact" element={<Contact />} />
              <Route path="/theme2/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </div>

    </div>
  );
};

export default Theme2Content;
