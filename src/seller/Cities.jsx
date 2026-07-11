
// src/seller/Cities.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function Cities({
  setActivePage,
  setSelectedState,
}) {
  const [filters, setFilters] = useState({
    CityId: "",
    CityName: "",
    CityCode: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [Cities] = useState([
    {
      id: "C001",
      name: "India",
      iso: "IN",
      phoneCode: "+91",
      currency: "INR",
      status: "Active",
    },
    {
      id: "C002",
      name: "United Cities",
      iso: "US",
      phoneCode: "+1",
      currency: "USD",
      status: "Active",
    },
    {
      id: "C003",
      name: "United Kingdom",
      iso: "GB",
      phoneCode: "+44",
      currency: "GBP",
      status: "Inactive",
    },
    {
      id: "C004",
      name: "Australia",
      iso: "AU",
      phoneCode: "+61",
      currency: "AUD",
      status: "Active",
    },
  ]);

  const filteredCities = Cities.filter((City) => {
    return (
      City.id
        .toLowerCase()
        .includes(filters.CityId.toLowerCase()) &&
      City.name
        .toLowerCase()
        .includes(filters.CityName.toLowerCase()) &&
      City.iso
        .toLowerCase()
        .includes(filters.CityCode.toLowerCase()) &&
      (filters.status === "" ||
        City.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      CityId: "",
      CityName: "",
      CityCode: "",
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
            Cities
          </h1>

          <p className="text-gray-500">
            Manage Cities
          </p>
        </div>

        <button
          onClick={() =>
            setActivePage("add-cities")
          }
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
        >
          <Plus size={18} />
          Add City
        </button>

      </div>

      {/* Search Section */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              City ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.CityId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  CityId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              City Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.CityName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  CityName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              City Code
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="IN"
              value={filters.CityCode}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  CityCode: e.target.value,
                })
              }
            />
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

          <div className="col-span-2 flex justify-end items-end gap-3">

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

              <th className="p-4 text-left">
                City ID
              </th>

              <th className="p-4 text-left">
                City Name
              </th>

              <th className="p-4 text-left">
                ISO Code
              </th>

              <th className="p-4 text-left">
                Phone Code
              </th>

              <th className="p-4 text-left">
                Currency
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

            {filteredCities.map((City) => (

              <tr
                key={City.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {City.id}
                </td>

                <td className="p-4 font-medium">
                  {City.name}
                </td>

                <td className="p-4">
                  {City.iso}
                </td>

                <td className="p-4">
                  {City.phoneCode}
                </td>

                <td className="p-4">
                  {City.currency}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      City.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {City.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelectedCity(City);
                        setActivePage(
                          "edit-City"
                        );
                      }}
                      className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

            {filteredCities.length === 0 && (

              <tr>

                <td
                  colSpan="7"
                  className="text-center p-8 text-gray-500"
                >
                  No Cities Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}