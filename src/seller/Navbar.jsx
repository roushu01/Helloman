// src/seller/Navbar.jsx

import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex justify-end items-center">

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <UserCircle
            size={42}
            className="text-orange-500"
          />

          <div className="hidden md:block">
            <h3 className="font-semibold text-slate-800">
              Seller
            </h3>

            <p className="text-xs text-gray-500">
              seller@gmail.com
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}