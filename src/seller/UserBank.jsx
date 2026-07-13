// src/seller/UserBanks.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function UserBanks({
  setActivePage,
  setSelectedUserBank,
}) {
  const [filters, setFilters] = useState({
    userId: "",
    userName: "",
    bankName: "",
    accountNumber: "",
    accountType: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [userBanks] = useState([
    {
      id: "UB001",
      userName: "John Smith",
      bankName: "State Bank of India",
      accountNumber: "XXXXXX4589",
      ifsc: "SBIN0001234",
      accountType: "Savings",
      status: "Active",
    },
    {
      id: "UB002",
      userName: "Rohit Sharma",
      bankName: "HDFC Bank",
      accountNumber: "XXXXXX8795",
      ifsc: "HDFC0004567",
      accountType: "Current",
      status: "Active",
    },
    {
      id: "UB003",
      userName: "Priya Singh",
      bankName: "ICICI Bank",
      accountNumber: "XXXXXX7412",
      ifsc: "ICIC0007896",
      accountType: "Savings",
      status: "Inactive",
    },
  ]);

  const filteredBanks = userBanks.filter((bank) => {
    return (
      bank.id.toLowerCase().includes(filters.userId.toLowerCase()) &&
      bank.userName
        .toLowerCase()
        .includes(filters.userName.toLowerCase()) &&
      bank.bankName
        .toLowerCase()
        .includes(filters.bankName.toLowerCase()) &&
      bank.accountNumber
        .toLowerCase()
        .includes(filters.accountNumber.toLowerCase()) &&
      (filters.accountType === "" ||
        bank.accountType === filters.accountType) &&
      (filters.status === "" ||
        bank.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      userId: "",
      userName: "",
      bankName: "",
      accountNumber: "",
      accountType: "",
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
            User Banks
          </h1>

          <p className="text-gray-500">
            Manage User Bank Accounts
          </p>
        </div>

        <button
          onClick={() => setActivePage("add-user-bank")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add User Bank
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              User ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.userId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  userId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              User Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.userName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  userName: e.target.value,
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
              Account Number
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.accountNumber}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  accountNumber: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Account Type
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.accountType}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  accountType: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Savings</option>
              <option>Current</option>
              <option>Salary</option>
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

          <div className="col-span-4 flex justify-end gap-3">

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

              <th className="p-4 text-left">User ID</th>
              <th className="p-4 text-left">User Name</th>
              <th className="p-4 text-left">Bank</th>
              <th className="p-4 text-left">Account No.</th>
              <th className="p-4 text-left">IFSC</th>
              <th className="p-4 text-left">Type</th>
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
                  {bank.userName}
                </td>

                <td className="p-4">
                  {bank.bankName}
                </td>

                <td className="p-4">
                  {bank.accountNumber}
                </td>

                <td className="p-4">
                  {bank.ifsc}
                </td>

                <td className="p-4">
                  {bank.accountType}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      bank.status === "Active"
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
                        setSelectedUserBank(bank);
                        setActivePage("edit-user-bank");
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