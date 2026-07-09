import React from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Users,
  IndianRupee,
  Package,
} from "lucide-react";

export default function Analytics() {
  const stats = {
    visitors: 12450,
    conversionRate: 6.8,
    orders: 845,
    revenue: 384500,
    productsSold: 1264,
    avgOrderValue: 455,
  };

  const categorySales = [
    {
      category: "Shoes",
      orders: 245,
      revenue: 185000,
    },
    {
      category: "Electronics",
      orders: 180,
      revenue: 115000,
    },
    {
      category: "Fashion",
      orders: 140,
      revenue: 58000,
    },
    {
      category: "Accessories",
      orders: 82,
      revenue: 26500,
    },
  ];

  const monthlySales = [
    { month: "Jan", revenue: 25000 },
    { month: "Feb", revenue: 32000 },
    { month: "Mar", revenue: 38000 },
    { month: "Apr", revenue: 42000 },
    { month: "May", revenue: 48000 },
    { month: "Jun", revenue: 56000 },
    { month: "Jul", revenue: 72000 },
  ];

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor your business performance.
        </p>
      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <Users className="text-blue-500 mb-3" size={34} />
          <p className="text-gray-500">Visitors</p>
          <h2 className="text-3xl font-bold">
            {stats.visitors.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <ShoppingBag className="text-orange-500 mb-3" size={34} />
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold">
            {stats.orders}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <IndianRupee className="text-green-500 mb-3" size={34} />
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold">
            ₹{stats.revenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <Package className="text-purple-500 mb-3" size={34} />
          <p className="text-gray-500">Products Sold</p>
          <h2 className="text-3xl font-bold">
            {stats.productsSold}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <TrendingUp className="text-green-600 mb-3" size={34} />
          <p className="text-gray-500">
            Conversion Rate
          </p>
          <h2 className="text-3xl font-bold">
            {stats.conversionRate}%
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <TrendingDown className="text-red-500 mb-3" size={34} />
          <p className="text-gray-500">
            Avg Order Value
          </p>
          <h2 className="text-3xl font-bold">
            ₹{stats.avgOrderValue}
          </h2>
        </div>

      </div>

      {/* Monthly Revenue */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Monthly Revenue
        </h2>

        <div className="space-y-4">

          {monthlySales.map((item) => (

            <div
              key={item.month}
              className="flex items-center gap-4"
            >

              <div className="w-12">
                {item.month}
              </div>

              <div className="flex-1 h-5 bg-gray-200 rounded">

                <div
                  className="h-5 rounded bg-orange-500"
                  style={{
                    width: `${item.revenue / 800}px`,
                  }}
                />

              </div>

              <div className="font-semibold">
                ₹{item.revenue.toLocaleString()}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Category Sales */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Category Wise Sales
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-3">
                Category
              </th>

              <th className="text-left p-3">
                Orders
              </th>

              <th className="text-left p-3">
                Revenue
              </th>

            </tr>

          </thead>

          <tbody>

            {categorySales.map((item) => (

              <tr
                key={item.category}
                className="border-b"
              >

                <td className="p-3">
                  {item.category}
                </td>

                <td className="p-3">
                  {item.orders}
                </td>

                <td className="p-3 font-semibold text-green-600">
                  ₹{item.revenue.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}