// src/seller/ProductVariants.jsx

import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function ProductVariants() {

  const [filters, setFilters] = useState({
    productName: "",
    color: "",
    size: "",
    status: "",
  });

  const [variants] = useState([
    {
      id: "V001",
      product: "Nike Air Max",
      color: "Black",
      size: "8",
      sku: "NK-BLK-8",
      price: 4999,
      stock: 20,
      status: "Active",
    },
    {
      id: "V002",
      product: "Nike Air Max",
      color: "White",
      size: "9",
      sku: "NK-WHT-9",
      price: 4999,
      stock: 15,
      status: "Active",
    },
    {
      id: "V003",
      product: "Wireless Earbuds",
      color: "Blue",
      size: "-",
      sku: "WB-BLU",
      price: 2999,
      stock: 35,
      status: "Inactive",
    },
  ]);

  const filteredVariants = variants.filter((item) => {
    return (
      item.product
        .toLowerCase()
        .includes(filters.productName.toLowerCase()) &&
      item.color
        .toLowerCase()
        .includes(filters.color.toLowerCase()) &&
      item.size
        .toLowerCase()
        .includes(filters.size.toLowerCase()) &&
      (filters.status === "" ||
        item.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      productName: "",
      color: "",
      size: "",
      status: "",
    });
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Product Variants
          </h1>

          <p className="text-gray-500">
            Manage product colors, sizes and stock
          </p>

        </div>

        <button className="bg-orange-500 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-600">

          <Plus size={18} />

          Add Variant

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>

            <label className="text-sm font-medium">
              Product Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.productName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  productName: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="text-sm font-medium">
              Color
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.color}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  color: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="text-sm font-medium">
              Size
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.size}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  size: e.target.value,
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

          <div className="col-span-4 flex justify-end gap-3">

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

              <th className="p-4 text-left">Variant ID</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Color</th>
              <th className="p-4 text-left">Size</th>
              <th className="p-4 text-left">SKU</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredVariants.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.id}
                </td>

                <td className="p-4 font-medium">
                  {item.product}
                </td>

                <td className="p-4">
                  {item.color}
                </td>

                <td className="p-4">
                  {item.size}
                </td>

                <td className="p-4">
                  {item.sku}
                </td>

                <td className="p-4">
                  ₹{item.price}
                </td>

                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200">

                      <Pencil size={18} />

                    </button>

                    <button className="p-2 bg-red-100 rounded-lg hover:bg-red-200">

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