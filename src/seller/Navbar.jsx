// src/seller/Navbar.jsx

import { Search, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Seller Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back 👋 Manage your store efficiently.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Notification */}

        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">

          <Bell size={22} />

          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>

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