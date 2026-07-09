import React from "react";
import {
  IndianRupee,
  TrendingUp,
  Wallet,
  ShoppingBag,
} from "lucide-react";

export default function Revenue() {
  const stats = {
    totalRevenue: 245600,
    monthlyRevenue: 45800,
    todayRevenue: 6500,
    totalOrders: 156,
  };

  const transactions = [
    {
      id: "TXN001",
      customer: "Roushni Kumari",
      amount: 2999,
      date: "02 Jul 2026",
      payment: "COD",
    },
    {
      id: "TXN002",
      customer: "Rahul Sharma",
      amount: 5999,
      date: "01 Jul 2026",
      payment: "Online",
    },
    {
      id: "TXN003",
      customer: "Aman Singh",
      amount: 1999,
      date: "30 Jun 2026",
      payment: "Online",
    },
  ];

  const topProducts = [
    {
      name: "Nike Air Max",
      revenue: 89991,
      sold: 31,
    },
    {
      name: "Sony Headphones",
      revenue: 51200,
      sold: 18,
    },
    {
      name: "Leather Wallet",
      revenue: 23500,
      sold: 25,
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Revenue
        </h1>

        <p className="text-gray-500">
          Sales and earnings overview
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <IndianRupee className="text-green-600 mb-4" size={35} />
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{stats.totalRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <TrendingUp className="text-blue-600 mb-4" size={35} />
          <p className="text-gray-500">Monthly Revenue</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{stats.monthlyRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <Wallet className="text-orange-500 mb-4" size={35} />
          <p className="text-gray-500">Today's Revenue</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{stats.todayRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <ShoppingBag className="text-purple-600 mb-4" size={35} />
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold mt-2">
            {stats.totalOrders}
          </h2>
        </div>

      </div>

      {/* Transactions */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Transactions
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">Transaction</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Date</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((txn) => (

              <tr
                key={txn.id}
                className="border-t"
              >

                <td className="p-3 font-semibold">
                  {txn.id}
                </td>

                <td className="p-3">
                  {txn.customer}
                </td>

                <td className="p-3 font-bold text-green-600">
                  ₹{txn.amount}
                </td>

                <td className="p-3">
                  {txn.payment}
                </td>

                <td className="p-3">
                  {txn.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Top Selling Products */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Top Revenue Products
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Sold</th>
              <th className="p-3 text-left">Revenue</th>

            </tr>

          </thead>

          <tbody>

            {topProducts.map((product) => (

              <tr
                key={product.name}
                className="border-t"
              >

                <td className="p-3">
                  {product.name}
                </td>

                <td className="p-3">
                  {product.sold}
                </td>

                <td className="p-3 font-bold text-green-600">
                  ₹{product.revenue.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}