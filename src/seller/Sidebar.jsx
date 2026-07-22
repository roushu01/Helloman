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
  ChevronDown,
  ChevronRight,
  Settings,
  CreditCard,
  FolderTree,
  Users,
} from "lucide-react";

import { useState } from "react";

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    value: "dashboard",
  },

  {
    title: "Sales",
    icon: ShoppingCart,
    children: [
      { title: "Orders", value: "orders" },
    ],
  },

  {
    title: "Product Catalog",
    icon: Package,
    children: [
      { title: "Products", value: "products" },
      { title: "Product Reviews", value: "product-reviews" },
      { title: "Bulk Upload", value: "bulk-upload" },
      { title: "Image Upload", value: "image-upload" },
      { title: "Product Variants", value: "product-variants" },
    ],
  },

  {
    title: "Account",
    icon: CreditCard,
    children: [
      { title: "Banks", value: "banks" },
      { title: "User Bank", value: "user-bank" },
      { title: "Vendor Payment", value: "vendor-payment" },
      { title: "Vendor Commission", value: "vendor-commission" },
    ],
  },

  // {
  //   title: "Basic Details",
  //   icon: FolderTree,
  //   children: [
  //     { title: "Colors", value: "colors" },
  //     { title: "Categories", value: "categories" },
  //     { title: "Size", value: "size" },
  //     { title: "Tags", value: "tags" },
  //     { title: "Manufacturer", value: "manufacturer" },
  //     { title: "Currency", value: "currency" },
  //     { title: "Attachment", value: "attachment" },
  //     { title: "Payment Methods", value: "payment-methods" },
  //   ],
  // },

  {
    title: "User Management",
    icon: Users,
    children: [
      { title: "Users", value: "users" },
      {title:"Countries",value:"countries"},
      {title:"States",value:"states"},
      {title:"Cities",value:"cities"},
    ],
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
const [openMenus, setOpenMenus] = useState({
  Sales: true,
  "Product Catalog": true,
  Account: false,
  "Basic Details": false,
  "User Management": false,
});
const toggleMenu = (title) => {
  setOpenMenus((prev) => ({
    ...prev,
    [title]: !prev[title],
  }));
};

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
      <div className="flex-1 p-4 overflow-y-auto">
      {menuItems.map((item) => {
        const Icon = item.icon;

        // Dropdown Menu
        if (item.children) {
          return (
            <div key={item.title} className="mb-2">
              <button
                onClick={() => toggleMenu(item.title)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span>{item.title}</span>
                </div>

                {openMenus[item.title] ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {openMenus[item.title] && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.value}
                      onClick={() => setActivePage(child.value)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition ${
                        activePage === child.value
                          ? "bg-orange-500 text-white"
                          : "text-gray-300 hover:bg-slate-800"
                      }`}
                    >
                      {child.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }

          // Normal Menu
          return (
            <button
              key={item.value}
              onClick={() => setActivePage(item.value)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activePage === item.value
                  ? "bg-orange-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}
      </div>
    </aside>
  );
}