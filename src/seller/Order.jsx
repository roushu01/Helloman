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
    const matchSearch =
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order._id
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return matchSearch && matchStatus;
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

      <div className="flex gap-4">

        <div className="relative flex-1">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search Order ID or Customer"
            className="w-full pl-10 p-3 rounded-lg border"
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="border rounded-lg px-4"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>

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