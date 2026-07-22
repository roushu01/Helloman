import React, { useState,useEffect } from "react";
import { Search, RotateCcw, Plus, Pencil, Trash2 } from "lucide-react";

import { getSellerProducts } from "../api/ProductApi";

export default function Products({
  setActivePage,
  setSelectedProduct,
}) {


  const [filters, setFilters] = useState({
    productId: "",
    productName: "",
    category: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const data = await getSellerProducts();

    const products = data.products || [];
    setProducts(products);

    // Check if there is at least one published/active product
    const hasPublishedProduct = products.some(
      (product) => product.isActive === true
      // or product.status === "Published"
      // depending on your backend
    );

    if (!hasPublishedProduct) {
      setActivePage("products");
    }
  } catch (err) {
    console.error("Fetch products error:", err);
    setProducts([]);
    setActivePage("products");
  } finally {
    setLoading(false);
  }
};
const filteredProducts = Array.isArray(products)
  ? products.filter((product) => {
  const productId = product._id?.toLowerCase() || "";
  const productName = product.name?.toLowerCase() || "";
  const category = product.category || "";
  const status = product.status || "";

  return (
    productId.includes(filters.productId.toLowerCase()) &&
    productName.includes(filters.productName.toLowerCase()) &&
    (filters.category === "" || category === filters.category) &&
    (filters.status === "" || status === filters.status)
  );
}):[];

  const resetFilters = () => {
    setFilters({
      productId: "",
      productName: "",
      category: "",
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
            Products
          </h1>

          <p className="text-gray-500">
            Manage your products
          </p>
        </div>
        <button
          onClick={() => setActivePage("add-product")}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg"
        >
          Add Product
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              Product ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.productId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  productId: e.target.value,
                })
              }
            />
          </div>

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
              <option>Shoes</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Fashion</option>
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

          <div className="flex items-end gap-3 col-span-2 justify-end">

            <button
              onClick={resetFilters}
              className="px-5 py-3 border rounded-lg flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            <button
              className="px-6 py-3 bg-orange-500 text-white rounded-lg flex items-center gap-2"
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

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.image}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">{product.id}</td>

                <td className="p-4 font-medium">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  ₹{product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.isActive=== "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.isActive?"Active":"Inactive"}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setActivePage("edit-product");
                        }}
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                      >
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