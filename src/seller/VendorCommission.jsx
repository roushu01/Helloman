// src/seller/VendorCommission.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function VendorCommission({
  setActivePage,
  setSelectedCommission,
}) {

  const [filters, setFilters] = useState({
    vendorId: "",
    vendorName: "",
    category: "",
    commissionType: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [commissions] = useState([
    {
      id: "COM001",
      vendorId: "V001",
      vendorName: "ABC Traders",
      category: "Electronics",
      commissionType: "Percentage",
      commissionValue: 10,
      gst: 18,
      status: "Active",
    },
    {
      id: "COM002",
      vendorId: "V002",
      vendorName: "XYZ Fashion",
      category: "Clothing",
      commissionType: "Percentage",
      commissionValue: 12,
      gst: 18,
      status: "Active",
    },
    {
      id: "COM003",
      vendorId: "V003",
      vendorName: "PQR Mobiles",
      category: "Mobiles",
      commissionType: "Fixed",
      commissionValue: 150,
      gst: 18,
      status: "Inactive",
    },
  ]);

  const filteredCommissions = commissions.filter((commission) => {
    return (
      commission.vendorId
        .toLowerCase()
        .includes(filters.vendorId.toLowerCase()) &&
      commission.vendorName
        .toLowerCase()
        .includes(filters.vendorName.toLowerCase()) &&
      (filters.category === "" ||
        commission.category === filters.category) &&
      (filters.commissionType === "" ||
        commission.commissionType === filters.commissionType) &&
      (filters.status === "" ||
        commission.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      vendorId: "",
      vendorName: "",
      category: "",
      commissionType: "",
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
            Vendor Commission
          </h1>

          <p className="text-gray-500">
            Manage vendor commission rules
          </p>

        </div>

        <button
          onClick={() => setActivePage("add-vendor-commission")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Commission
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>

            <label className="text-sm font-medium">
              Vendor ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.vendorId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  vendorId: e.target.value,
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
              Category
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.category}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  category: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Mobiles</option>
              <option>Furniture</option>
            </select>

          </div>

          <div>

            <label className="text-sm font-medium">
              Commission Type
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.commissionType}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  commissionType: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Percentage</option>
              <option>Fixed</option>
            </select>

          </div>

          <div>

            <label className="text-sm font-medium">
              Status
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
              <option>Active</option>
              <option>Inactive</option>
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

          <div className="flex items-end gap-3 justify-end">

            <button
              onClick={resetFilters}
              className="border px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
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

              <th className="p-4 text-left">Vendor ID</th>
              <th className="p-4 text-left">Vendor</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Commission</th>
              <th className="p-4 text-left">GST</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>
                        {filteredCommissions.map((commission) => (

              <tr
                key={commission.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {commission.vendorId}
                </td>

                <td className="p-4 font-medium">
                  {commission.vendorName}
                </td>

                <td className="p-4">
                  {commission.category}
                </td>

                <td className="p-4">
                  {commission.commissionType}
                </td>

                <td className="p-4 font-semibold text-orange-600">

                  {commission.commissionType === "Percentage"
                    ? `${commission.commissionValue}%`
                    : `₹${commission.commissionValue}`}

                </td>

                <td className="p-4">
                  {commission.gst}%
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      commission.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {commission.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelectedCommission(commission);
                        setActivePage("edit-vendor-commission");
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
      