// src/seller/Sidebar.jsx

import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  IndianRupee,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      value: "dashboard",
    },
    {
      title: "Products",
      icon: Package,
      value: "products",
    },
    {
      title: "Add Product",
      icon: PlusCircle,
      value: "add-product",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      value: "orders",
    },
    {
      title: "Revenue",
      icon: IndianRupee,
      value: "revenue",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      value: "analytics",
    },
    {
      title: "Profile",
      icon: User,
      value: "profile",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white shadow-lg flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-orange-500">
          HelloMem
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Seller Panel
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.value}
              onClick={() => setActivePage(item.value)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all
              ${
                activePage === item.value
                  ? "bg-orange-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Logout */}

      <div className="p-4 border-t border-slate-700">

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </aside>
  );
}