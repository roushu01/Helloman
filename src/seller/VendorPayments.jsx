// src/seller/VendorPayments.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function VendorPayments({
  setActivePage,
  setSelectedPayment,
}) {
  const [filters, setFilters] = useState({
    paymentId: "",
    vendorName: "",
    orderId: "",
    paymentMode: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [payments] = useState([
    {
      id: "PAY001",
      vendor: "ABC Traders",
      orderId: "ORD1001",
      orderAmount: 5000,
      commission: 500,
      netAmount: 4500,
      paymentMode: "NEFT",
      status: "Paid",
    },
    {
      id: "PAY002",
      vendor: "XYZ Fashion",
      orderId: "ORD1002",
      orderAmount: 3200,
      commission: 320,
      netAmount: 2880,
      paymentMode: "UPI",
      status: "Pending",
    },
    {
      id: "PAY003",
      vendor: "PQR Electronics",
      orderId: "ORD1003",
      orderAmount: 8400,
      commission: 840,
      netAmount: 7560,
      paymentMode: "RTGS",
      status: "Paid",
    },
  ]);

  const filteredPayments = payments.filter((payment) => {
    return (
      payment.id
        .toLowerCase()
        .includes(filters.paymentId.toLowerCase()) &&
      payment.vendor
        .toLowerCase()
        .includes(filters.vendorName.toLowerCase()) &&
      payment.orderId
        .toLowerCase()
        .includes(filters.orderId.toLowerCase()) &&
      (filters.paymentMode === "" ||
        payment.paymentMode === filters.paymentMode) &&
      (filters.status === "" ||
        payment.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      paymentId: "",
      vendorName: "",
      orderId: "",
      paymentMode: "",
      status: "",
      fromDate: "",
      toDate: "",
    });
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Vendor Payments
          </h1>

          <p className="text-gray-500">
            Manage Vendor Payment Settlements
          </p>
        </div>

        <button
          onClick={() => setActivePage("add-vendor-payment")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Vendor Payment
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              Payment ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.paymentId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  paymentId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Vendor Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.vendorName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  vendorName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Order ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.orderId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  orderId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Payment Mode
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.paymentMode}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  paymentMode: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>NEFT</option>
              <option>RTGS</option>
              <option>IMPS</option>
              <option>UPI</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Payment Status
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              From Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.fromDate}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  fromDate: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              To Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.toDate}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  toDate: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-end gap-3 justify-end col-span-1">

            <button
              onClick={resetFilters}
              className="border px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Search size={18} />
              Search
            </button>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Payment ID</th>
              <th className="p-4 text-left">Vendor</th>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Order Amount</th>
              <th className="p-4 text-left">Commission</th>
              <th className="p-4 text-left">Net Amount</th>
              <th className="p-4 text-left">Mode</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredPayments.map((payment) => (

              <tr
                key={payment.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">{payment.id}</td>

                <td className="p-4 font-medium">
                  {payment.vendor}
                </td>

                <td className="p-4">
                  {payment.orderId}
                </td>

                <td className="p-4">
                  ₹{payment.orderAmount}
                </td>

                <td className="p-4 text-red-600">
                  ₹{payment.commission}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  ₹{payment.netAmount}
                </td>

                <td className="p-4">
                  {payment.paymentMode}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelectedPayment(payment);
                        setActivePage("edit-vendor-payment");
                      }}
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                    >
                      <Trash2 size={18} />
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