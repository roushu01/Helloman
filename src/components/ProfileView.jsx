import React, { useState } from "react";
import {
  User,
  Package,
  Heart,
  ShoppingCart,
  LogOut,
} from "lucide-react";

export default function Profile({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="grid grid-cols-12 gap-6">

        {/* Left Sidebar */}
        <div className="col-span-3 bg-white rounded-xl shadow-md p-6">

          <div className="text-center border-b pb-5">

            <div className="w-20 h-20 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-bold">
              {user?.firstName?.charAt(0)}
            </div>

            <h2 className="mt-3 text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </h2>

            <p className="text-gray-500 text-sm">
              {user?.email}
            </p>

          </div>

          <div className="mt-6 space-y-2">

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "orders"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Package size={20} />
              My Orders
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "cart"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <ShoppingCart size={20} />
              Cart
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "wishlist"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Heart size={20} />
              Wishlist
            </button>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50"
            >
              <LogOut size={20} />
              Logout
            </button>

          </div>

        </div>

        {/* Right Content */}
        <div className="col-span-9 bg-white rounded-xl shadow-md p-8">

          {activeTab === "profile" && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                My Profile
              </h2>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold">First Name:</span>{" "}
                  {user?.firstName}
                </p>

                <p>
                  <span className="font-semibold">Last Name:</span>{" "}
                  {user?.lastName}
                </p>

                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {user?.email}
                </p>
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                My Orders
              </h2>

              <p>No orders yet.</p>
            </>
          )}

          {activeTab === "cart" && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                My Cart
              </h2>

              <p>Your cart is empty.</p>
            </>
          )}

          {activeTab === "wishlist" && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Wishlist
              </h2>

              <p>Your wishlist is empty.</p>
            </>
          )}

        </div>

      </div>

    </div>
  );
}