// src/seller/Users.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import EditUser from "./EditUser";
export default function Users({
  activePage,
  setActivePage,
  selectedUser,
  setSelectedUser,
}) {
  const [filters, setFilters] = useState({
    userId: "",
    name: "",
    role: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [users] = useState([
    {
      id: "U001",
      name: "Roushni Kumari",
      email: "roushni@gmail.com",
      mobile: "9876543210",
      role: "Manager",
      status: "Active",
    },
    {
      id: "U002",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      mobile: "9876543211",
      role: "Vendor",
      status: "Inactive",
    },
    {
      id: "U003",
      name: "Aman Singh",
      email: "aman@gmail.com",
      mobile: "9876543212",
      role: "Employee",
      status: "Active",
    },
    {
      id: "U004",
      name: "Priya Sharma",
      email: "priya@gmail.com",
      mobile: "9876543213",
      role: "Customer",
      status: "Active",
    },
    {
      id: "U005",
      name: "ABC Suppliers",
      email: "supplier@gmail.com",
      mobile: "9876543214",
      role: "Supplier",
      status: "Active",
    },
  ]);

  const filteredUsers = users.filter((user) => {
    return (
      user.id
        .toLowerCase()
        .includes(filters.userId.toLowerCase()) &&
      user.name
        .toLowerCase()
        .includes(filters.name.toLowerCase()) &&
      (filters.role === "" ||
        user.role === filters.role) &&
      (filters.status === "" ||
        user.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      userId: "",
      name: "",
      role: "",
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
            Users
          </h1>

          <p className="text-gray-500">
            Manage all users
          </p>
        </div>

        <button
          onClick={() =>
            setActivePage("add-user")
          }
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
        >
          <Plus size={18} />
          Add User
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
              value={filters.userId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  userId: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              User Name
            </label>

            <input
              value={filters.name}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Role
            </label>

            <select
              value={filters.role}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  role: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option value="">All</option>
              <option>Manager</option>
              <option>Vendor</option>
              <option>Employee</option>
              <option>Customer</option>
              <option>Supplier</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Status
            </label>

            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
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
              value={filters.fromDate}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  fromDate: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              To Date
            </label>

            <input
              type="date"
              value={filters.toDate}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  toDate: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="flex items-end gap-3 col-span-2 justify-end">
            <button
              onClick={resetFilters}
              className="border rounded-lg px-5 py-3 flex items-center gap-2"
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
              <th className="p-4 text-left">
                User ID
              </th>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Mobile
              </th>

              <th className="p-4 text-left">
                Role
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  {user.id}
                </td>

                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.mobile}
                </td>

                <td className="p-4">
                  {user.role}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setActivePage(
                          "edit-user"
                        );
                      }}
                      className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                  onClick={()=>{
                      alert(`Delete ${user.name}`)
                  }}
                  className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
                  >
                  <Trash2 size={18}/>
                  </button>
                  </div>
                </td>
              </tr>
            ))}
            {
            activePage === "edit-user" && (

              <EditUser

                  selectedUser={selectedUser}

                  setActivePage={setActivePage}

              />

            )
            }

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-8 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}