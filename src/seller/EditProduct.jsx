import React, { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";

export default function EditProduct({product,setActivePage}) {

  // Dummy product (Later fetch from backend)

  const [formData, setFormData] = useState({
  name: "Nike Air Max 270",
  description: "Comfortable running shoes with premium cushioning.",
  category: "Shoes",
  price: 8999,
  stock: 20,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
});

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Updated Successfully");
  };

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Edit Product
          </h1>

          <p className="text-gray-500">
            Update your product information.
          </p>
        </div>

        <button
          className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
          onClick={() => setActivePage("products")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-8 space-y-6"
      >

        {/* Product Image */}

        <div>

          <label className="font-semibold block mb-3">
            Product Image
          </label>

          <img
            src={formData.image}
            alt=""
            className="w-48 h-48 object-cover rounded-xl border"
          />

          <input
            type="file"
            className="mt-4"
          />

        </div>

        {/* Name */}

        <div>

          <label className="font-semibold block mb-2">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Description */}

        <div>

          <label className="font-semibold block mb-2">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Category */}

        <div>

          <label className="font-semibold block mb-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Shoes</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Accessories</option>
          </select>

        </div>

        {/* Price */}

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold block mb-2">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4">

          <button
            type="button"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            <Save size={18} />
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}