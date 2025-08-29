"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile Header with Menu Button */}
      <div className="p-4 md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay (only on mobile & when sidebar open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:z-auto`}
      >
        <h2 className="text-xl font-bold mb-6 hidden md:block">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Analytics</li>
          <li className="hover:text-gray-300 cursor-pointer">Settings</li>
          <li className="hover:text-gray-300 cursor-pointer">Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
