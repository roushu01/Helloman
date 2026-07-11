import React from "react";
import {
  Package,
  ShoppingCart,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,

  Legend,

} from "recharts";




export default function DashboardHome() {
  // Dummy Data
  const stats = {
    totalProducts: 24,
    totalOrders: 156,
    totalUsers: 89,
    totalRevenue: 245600,
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
 //bargraph
  const monthlySales = [
    { month: "Jan", revenue: 25000 },
    { month: "Feb", revenue: 32000 },
    { month: "Mar", revenue: 38000 },
    { month: "Apr", revenue: 42000 },
    { month: "May", revenue: 48000 },
    { month: "Jun", revenue: 56000 },
    { month: "Jul", revenue: 72000 },
  ];
  const monthlyRevenue = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 61000 },
    { month: "Apr", revenue: 58000 },
    { month: "May", revenue: 70000 },
    { month: "Jun", revenue: 82000 },
    { month: "Jul", revenue: 98000 },
  ];

  const maxRevenue = Math.max(
    ...monthlyRevenue.map(item => item.revenue)
  );

  const popularCategories = [
    { category: "Shoes", orders: 245 },
    { category: "Electronics", orders: 180 },
    { category: "Fashion", orders: 140 },
    { category: "Accessories", orders: 82 },
  ];
      const maxOrders = Math.max(
    ...popularCategories.map(item => item.orders)
  );

  //address
  const customerAddresss=[
    {city:"jaipur",users:50},
    {city:"alwar",users:15},
    {city:"udaipur",users:30},
    {city:"Sitapura",users:25},
  ]
  const populerProductsSale=[
    {name:"Nike Air Max",sold:56},
    {name:"Wireless Earbuds",sold:48},
    {name:"Leather Wallet",sold:41},

  ]

  const COLORS = ["#7C3AED", "#A855F7", "#C084FC", "#DDD6FE"];
  const maxSold = Math.max(
    ...populerProductsSale.map(item => item.sold)
  );
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
    <div className="space-y-2">

      {/* Heading */}
      
      <div>
        
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-5 flex items-center  h-22 justify-center gap-2">
          <Package className="text-orange-500" size={35} />

          <p className="text-gray-500 font-medium">Products</p>

          <h2 className="text-3xl font-bold">
            {stats.totalProducts}
          </h2>
        </div>

        
        <div className="bg-white rounded-xl shadow p-5 flex items-center  h-22 justify-center gap-2">
          <ShoppingCart className="text-blue-500 " size={35} />
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold">
            {stats.totalOrders}
          </h2>
        </div>

       
        <div className="bg-white rounded-xl shadow p-5 flex items-center  h-22 justify-center gap-2">
          <IndianRupee className="text-green-500 " size={35} />
          <p className="text-gray-500">Users</p>
          <h2 className="text-3xl font-bold ">
            ₹{stats.totalUsers}
          </h2>
        </div>

       
        <div className="bg-white rounded-xl shadow p-5 flex items-center  h-22 justify-center gap-2">
          <TrendingUp className="text-purple-500 " size={35} />
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold ">
            {stats.totalRevenue}
          </h2>
        </div>

      </div>

      {/* Tables */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Orders */}

        <div>
      <h2 className="text-xl font-semibold mb-5">Monthly Sales</h2>

      <div className="bg-white rounded-xl p-4 shadow">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                {monthlySales.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.revenue === Math.max(...monthlySales.map(i => i.revenue))
                        ? "#C084FC"
                        : "#7C3AED"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

            {/* Top Products */}

            <div>
      <h2 className="text-xl font-semibold mb-5">Monthly Revenue</h2>

      <div className="bg-white rounded-xl p-4 shadow">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "Revenue"]} />

              <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                {monthlyRevenue.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.revenue === maxRevenue
                        ? "#22C55E" // Highest revenue
                        : "#16A34A" // Other bars
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    </div>


      <div className="w-full">
        <h2 className="text-xl font-semibold mb-5">
          Popular Categories
        </h2>

        <div className="bg-white rounded-xl shadow p-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popularCategories}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />

                <Bar dataKey="orders" radius={[6, 6, 0, 0]}>
                  {popularCategories.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        entry.orders === maxOrders
                          ? "#FBBF24"
                          : "#F59E0B"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-semibold mb-5">
          Customers by City
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={customerAddresss}
                dataKey="users"
                nameKey="city"
                outerRadius={100}
                label
              >
                {customerAddresss.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-5">
        Popular Product Sales
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={populerProductsSale}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="sold" radius={[6, 6, 0, 0]}>
              {populerProductsSale.map((item, index) => (
                <Cell
                  key={index}
                  fill={
                    item.sold === maxSold
                      ? "#FBBF24" // Highlight highest sales
                      : "#F59E0B"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

        
      </div>
  </div>
)
}