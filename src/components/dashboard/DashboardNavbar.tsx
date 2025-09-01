"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const dashboardPages = [
    { name: "Admin Home", path: "/dashboard/admin/home" },
    { name: "Add Items", path: "/dashboard/admin/addItems" },
    { name: "Manage Item", path: "/dashboard/admin/manageItem" },
    { name: "Manage Bookings", path: "/dashboard/admin/manageBookings" },
    { name: "Add Users", path: "/dashboard/admin/addUsers" },
  ];

  return (
    <div className="">
      {/* Mobile Header with Menu Button */}
      <div className="px-4 md:px-6 py-1 md:py-4 lg:hidden w-screen bg-[#d1a054] flex justify-between">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link href={"/"}>
          <h2 className="text-[18px] md:text-[22px] font-extrabold custom-text">
            BISTRO BOSS
          </h2>
          <h4 className="sText text-[11px] md:text-[16px] font-bold">
            Restaurant
          </h4>
        </Link>
      </div>

      {/* Overlay (only on mobile & when sidebar open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#d1a054] text-black p-6 transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:z-auto`}
      >
        <Link href={"/"}>
          <div className="mb-8 md:mb-10 lg:mb-14">
            <h2 className="text-[22px] font-extrabold custom-text">
              BISTRO BOSS
            </h2>
            <h4 className="sText text-[16px] font-bold">Restaurant</h4>
          </div>
        </Link>
        <ul className="space-y-4">
          {dashboardPages.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`cursor-pointer transition-colors ${
                  pathName === item.path
                    ? "text-white font-semibold"
                    : "hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
