import React from "react";
import {
  Package,
  ShoppingCart,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

export default function DashboardHome() {
  // Dummy Data
  const stats = {
    totalProducts: 24,
    totalOrders: 156,
    totalRevenue: 245600,
    inStock: 18,
  };

  const recentOrders = [
    {
      id: "ORD1021",
      customer: "Roushni Kumari",
      amount: 2899,
      status: "Delivered",
    },
    {
      id: "ORD1022",
      customer: "Rahul Sharma",
      amount: 1499,
      status: "Pending",
    },
    {
      id: "ORD1023",
      customer: "Anjali Singh",
      amount: 3999,
      status: "Shipped",
    },
  ];

  const topProducts = [
    {
      name: "Nike Air Max",
      sold: 56,
    },
    {
      name: "Wireless Earbuds",
      sold: 48,
    },
    {
      name: "Leather Wallet",
      sold: 41,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back Seller 👋
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <Package className="text-orange-500 mb-4" size={35} />
          <p className="text-gray-500">Products</p>
          <h2 className="text-3xl font-bold mt-2">
            {stats.totalProducts}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <ShoppingCart className="text-blue-500 mb-4" size={35} />
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold mt-2">
            {stats.totalOrders}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <IndianRupee className="text-green-500 mb-4" size={35} />
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{stats.totalRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <TrendingUp className="text-purple-500 mb-4" size={35} />
          <p className="text-gray-500">In Stock</p>
          <h2 className="text-3xl font-bold mt-2">
            {stats.inStock}
          </h2>
        </div>

      </div>

      {/* Tables */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Orders */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Orders
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-2">Order</th>

                <th className="text-left py-2">Customer</th>

                <th className="text-left py-2">Amount</th>

                <th className="text-left py-2">Status</th>

              </tr>

            </thead>

            <tbody>

              {recentOrders.map((order) => (

                <tr key={order.id} className="border-b">

                  <td className="py-3">
                    {order.id}
                  </td>

                  <td>
                    {order.customer}
                  </td>

                  <td>
                    ₹{order.amount}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm

                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"

                          : order.status === "Pending"

                          ? "bg-yellow-100 text-yellow-700"

                          : "bg-blue-100 text-blue-700"
                      }
                      `}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Top Products */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-5">
            Top Selling Products
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-2">
                  Product
                </th>

                <th className="text-left py-2">
                  Sold
                </th>

              </tr>

            </thead>

            <tbody>

              {topProducts.map((product) => (

                <tr
                  key={product.name}
                  className="border-b"
                >

                  <td className="py-3">
                    {product.name}
                  </td>

                  <td>
                    {product.sold}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}