import React, { useState, useEffect } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { api } from "../api/axios";

// Helper to safely read cookies in browser JavaScript
const getCookie = (name) => {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : "";
};

export default function Banks({
  setActivePage,
  setSelectedBank,
}) {
  const [filters, setFilters] = useState({
    bankId: "",
    bankName: "",
    ifsc: "",
    country: "",
    status: "",
    fromDate: "",
    toDate: "",
  });
  const [banks, setBanks] = useState([]);

  const getbanks = async () => {
    try {
      // Extract session token from cookies or localStorage
      const token =
        getCookie("__session") ||
        getCookie("_session") ||
        getCookie("token") ||
        localStorage.getItem("token");

      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const res = await api.get("/api/banks", { headers });
      console.log("Banks API response:", res);

      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.banks || res.data?.data || res.data?.userBanks || [];

      setBanks(data);
    } catch (error) {
      console.error("Error fetching banks:", error);
    }
  };

  useEffect(() => {
    getbanks();
  }, []);

  const filteredBanks = (Array.isArray(banks) ? banks : []).filter((bank) => {
    const bankId = String(bank.id || bank.bankId || bank.bankCode || bank._id || "");
    const bankName = String(bank.name || bank.bankName || "");
    const ifsc = String(bank.ifsc || bank.ifscCode || "");
    const country = String(bank.country || "India");
    const status = String(bank.status || "Active");

    return (
      bankId.toLowerCase().includes((filters.bankId || "").toLowerCase()) &&
      bankName.toLowerCase().includes((filters.bankName || "").toLowerCase()) &&
      ifsc.toLowerCase().includes((filters.ifsc || "").toLowerCase()) &&
      (filters.country === "" || country === filters.country) &&
      (filters.status === "" || status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      bankId: "",
      bankName: "",
      ifsc: "",
      country: "",
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
            Banks
          </h1>

          <p className="text-gray-500">
            Manage Banks
          </p>
        </div>

        <button
          onClick={() => setActivePage("add-bank")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Bank
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              Bank ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.bankId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  bankId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Bank Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.bankName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  bankName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              IFSC Code
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.ifsc}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  ifsc: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Country
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.country}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  country: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
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

          <div className="flex justify-end items-end gap-3">

            <button
              onClick={resetFilters}
              className="border rounded-lg px-5 py-3 flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            <button

              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
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

              <th className="p-4 text-left">Bank ID</th>
              <th className="p-4 text-left">Bank Name</th>
              <th className="p-4 text-left">IFSC Code</th>
              <th className="p-4 text-left">Country</th>
              <th className="p-4 text-left">Branches</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredBanks.map((bank) => (

              <tr
                key={bank.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">{bank.id}</td>

                <td className="p-4 font-medium">
                  {bank.name}
                </td>

                <td className="p-4">
                  {bank.ifsc}
                </td>

                <td className="p-4">
                  {bank.country}
                </td>

                <td className="p-4">
                  {bank.branch}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${bank.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {bank.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelectedBank(bank);
                        setActivePage("edit-bank");
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

            {filteredBanks.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500"
                >
                  No Banks Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}