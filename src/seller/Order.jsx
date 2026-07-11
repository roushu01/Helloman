import React, { useState } from "react";
import {
  Search,
  Eye,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchType, setSearchType] = useState("orderId");
  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [productName, setProductName] = useState("");
  const [userName, setUserName] = useState("");

  const [orders, setOrders] = useState([
    {
      _id: "ORD1001",
      customer: "Roushni Kumari",
      phone: "7485829909",
      total: 2999,
      payment: "COD",
      status: "Pending",
      date: "02 Jul 2026",
      products: [
        {
          name: "Nike Air Max",
          qty: 2,
        },
      ],
    },
    {
      _id: "ORD1002",
      customer: "Rahul Sharma",
      phone: "9876543210",
      total: 5999,
      payment: "Online",
      status: "Shipped",
      date: "01 Jul 2026",
      products: [
        {
          name: "Sony Headphones",
          qty: 1,
        },
      ],
    },
    {
      _id: "ORD1003",
      customer: "Aman Singh",
      phone: "9874563210",
      total: 1299,
      payment: "COD",
      status: "Delivered",
      date: "29 Jun 2026",
      products: [
        {
          name: "Wallet",
          qty: 1,
        },
      ],
    },
  ]);

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) =>
        o._id === id
          ? {
              ...o,
              status,
            }
          : o
      )
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchOrderId =
      orderId === "" ||
      order._id.toLowerCase().includes(orderId.toLowerCase());

    const matchUser =
      userName === "" ||
      order.customer.toLowerCase().includes(userName.toLowerCase());

    const matchProduct =
      productName === "" ||
      order.products.some((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      );

    const matchDate =
      orderDate === "" ||
      new Date(order.date).toISOString().slice(0, 10) === orderDate;

    const matchStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return (
      matchOrderId &&
      matchUser &&
      matchProduct &&
      matchDate &&
      matchStatus
    );
    });

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Orders
          </h1>

          <p className="text-gray-500">
            Manage all customer orders
          </p>

        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-6">
      <div className="grid grid-cols-1  md:grid-cols-6 gap-4 items-end">

        {/* Order ID */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Order ID
          </label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="w-full border rounded-lg px-4 py-2.5"
          />
        </div>

        {/* Order Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Order Date
          </label>
          <input
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-2.5"
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Product Name"
            className="w-full border rounded-lg px-4 py-2.5"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            User Name
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
            className="w-full border rounded-lg px-4 py-2.5"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full border rounded-lg px-4 py-2.5"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-lg transition"
        >
          <Search size={18} />
          Search
        </button>

      </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Order
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Payment
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr
                key={order._id}
                className="border-t"
              >

                <td className="p-4">

                  <div className="font-semibold">
                    {order._id}
                  </div>

                  <div className="text-sm text-gray-500">
                    {order.date}
                  </div>

                </td>

                <td className="p-4">

                  <div>
                    {order.customer}
                  </div>

                  <div className="text-gray-500 text-sm">
                    {order.phone}
                  </div>

                </td>

                <td className="p-4 font-semibold">
                  ₹{order.total}
                </td>

                <td className="p-4">
                  {order.payment}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm

                    ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"

                        : order.status === "Confirmed"
                        ? "bg-blue-100 text-blue-700"

                        : order.status === "Shipped"
                        ? "bg-purple-100 text-purple-700"

                        : "bg-green-100 text-green-700"
                    }
                    `}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <button
                      className="p-2 rounded bg-gray-100 hover:bg-gray-200"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          order._id,
                          "Confirmed"
                        )
                      }
                      className="p-2 rounded bg-blue-100"
                    >
                      <Clock size={18} />
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          order._id,
                          "Shipped"
                        )
                      }
                      className="p-2 rounded bg-purple-100"
                    >
                      <Truck size={18} />
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          order._id,
                          "Delivered"
                        )
                      }
                      className="p-2 rounded bg-green-100"
                    >
                      <CheckCircle size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}