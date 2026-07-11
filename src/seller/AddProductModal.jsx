// AddProductModal.jsx (Part 1)

import React, { useState } from "react";
import { X, Upload } from "lucide-react";

export default function AddProductModal({ onClose }) {
  const [form, setForm] = useState({
    // Basic Details
    productName: "",
    productId: "",
    sku: "",
    brand: "",
    manufacturer: "",
    category: "",
    subCategory: "",
    shortDescription: "",
    description: "",

    // Pricing
    mrp: "",
    sellingPrice: "",
    costPrice: "",
    gst: "",
    discount: "",

    // Inventory
    stock: "",
    minStock: "",
    warehouse: "",
    barcode: "",

    // Shipping
    weight: "",
    length: "",
    width: "",
    height: "",
    shippingCharge: "",

    // SEO
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    slug: "",

    // Variants
    color: "",
    size: "",
    material: "",

    // Status
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Product Saved Successfully");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">

      <div className="max-w-7xl mx-auto my-10 bg-white rounded-xl shadow-lg">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-2xl font-bold">
              Add Product
            </h2>

            <p className="text-gray-500 text-sm">
              Fill product information carefully.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        <form onSubmit={saveProduct}>

          {/* BASIC DETAILS */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Product Basic Details
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <div>
                <label>Product Name</label>

                <input
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Product ID</label>

                <input
                  name="productId"
                  value={form.productId}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>SKU</label>

                <input
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Brand</label>

                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Manufacturer</label>

                <input
                  name="manufacturer"
                  value={form.manufacturer}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Category</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                >
                  <option>Select</option>
                  <option>Shoes</option>
                  <option>Fashion</option>
                  <option>Electronics</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div>
                <label>Sub Category</label>

                <input
                  name="subCategory"
                  value={form.subCategory}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

            </div>

            <div className="mt-5">

              <label>Short Description</label>

              <textarea
                rows={2}
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />

            </div>

            <div className="mt-5">

              <label>Description</label>

              <textarea
                rows={5}
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />

            </div>

          </div>

          {/* PRICING */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Pricing
            </h3>

            <div className="grid md:grid-cols-5 gap-5">

              <div>

                <label>MRP</label>

                <input
                  name="mrp"
                  value={form.mrp}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Selling Price</label>

                <input
                  name="sellingPrice"
                  value={form.sellingPrice}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Cost Price</label>

                <input
                  name="costPrice"
                  value={form.costPrice}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>GST (%)</label>

                <input
                  name="gst"
                  value={form.gst}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Discount (%)</label>

                <input
                  name="discount"
                  value={form.discount}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

            </div>

          </div>

          {/* INVENTORY */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Inventory
            </h3>

            <div className="grid md:grid-cols-4 gap-5">

              <div>

                <label>Stock</label>

                <input
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Minimum Stock</label>

                <input
                  name="minStock"
                  value={form.minStock}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Warehouse</label>

                <input
                  name="warehouse"
                  value={form.warehouse}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Barcode</label>

                <input
                  name="barcode"
                  value={form.barcode}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

            </div>

          </div>
                    {/* SHIPPING */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Shipping Details
            </h3>

            <div className="grid md:grid-cols-5 gap-5">

              <div>
                <label>Weight (kg)</label>
                <input
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Length (cm)</label>
                <input
                  name="length"
                  value={form.length}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Width (cm)</label>
                <input
                  name="width"
                  value={form.width}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Height (cm)</label>
                <input
                  name="height"
                  value={form.height}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Shipping Charge</label>
                <input
                  name="shippingCharge"
                  value={form.shippingCharge}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

            </div>

          </div>

          {/* PRODUCT VARIANTS */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Product Variants
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <div>
                <label>Color</label>
                <input
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  placeholder="Red, Blue"
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Size</label>
                <input
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="S,M,L,XL"
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label>Material</label>
                <input
                  name="material"
                  value={form.material}
                  onChange={handleChange}
                  placeholder="Leather"
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

            </div>

          </div>

          {/* PRODUCT IMAGES */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Product Images
            </h3>

            <div className="border-2 border-dashed rounded-xl p-10 text-center">

              <Upload
                size={45}
                className="mx-auto text-orange-500 mb-4"
              />

              <p className="font-semibold">
                Upload Product Images
              </p>

              <p className="text-gray-500 text-sm mt-2">
                PNG, JPG, JPEG (Maximum 5 Images)
              </p>

              <input
                type="file"
                multiple
                className="mt-5"
              />

            </div>

          </div>

          {/* SEO */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              SEO Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label>Meta Title</label>

                <input
                  name="metaTitle"
                  value={form.metaTitle}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label>Slug</label>

                <input
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

            </div>

            <div className="mt-5">

              <label>Meta Description</label>

              <textarea
                rows={4}
                name="metaDescription"
                value={form.metaDescription}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />

            </div>

            <div className="mt-5">

              <label>Keywords</label>

              <input
                name="keywords"
                value={form.keywords}
                onChange={handleChange}
                placeholder="shoe, nike, running"
                className="w-full border rounded-lg p-3 mt-1"
              />

            </div>

          </div>

          {/* STATUS */}

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold mb-5">
              Product Status
            </h3>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-60 border rounded-lg p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Draft</option>
            </select>

          </div>

          {/* FOOTER */}

          <div className="flex justify-end gap-4 p-6 bg-gray-50 rounded-b-xl">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
              Save Draft
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Publish Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}