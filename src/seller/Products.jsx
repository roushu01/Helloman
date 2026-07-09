// src/seller/Products.jsx

import { useEffect, useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

export default function Products({
  setActivePage,
  setSelectedProduct,
}) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Dummy Data
    setProducts([
      {
        _id: "1",
        name: "Nike Air Max 270",
        category: "Shoes",
        price: 8999,
        stock: 12,
        sold: 35,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      },
      {
        _id: "2",
        name: "Apple Watch Series 9",
        category: "Electronics",
        price: 39999,
        stock: 4,
        sold: 18,
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      },
      {
        _id: "3",
        name: "Laptop Backpack",
        category: "Bags",
        price: 2499,
        stock: 0,
        sold: 56,
        image:
          "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
      },
    ]);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((item) => item._id !== id));
    }
  };

  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <button
          onClick={() => setActivePage("add-product")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Product
        </button>

      </div>

      {/* Search */}

      <div className="relative mb-6 w-full md:w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th className="text-left">
                Product
              </th>

              <th>
                Category
              </th>

              <th>
                Price
              </th>

              <th>
                Stock
              </th>

              <th>
                Sold
              </th>

              <th>
                Status
              </th>

              <th>
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                </td>

                <td className="font-semibold">
                  {product.name}
                </td>

                <td>
                  {product.category}
                </td>

                <td>
                  ₹{product.price.toLocaleString()}
                </td>

                <td>
                  {product.stock}
                </td>

                <td>
                  {product.sold}
                </td>

                <td>

                  {product.stock > 5 ? (

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      In Stock
                    </span>

                  ) : product.stock > 0 ? (

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Low Stock
                    </span>

                  ) : (

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      Out of Stock
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setActivePage("edit-product");
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={20} />
                    </button>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
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