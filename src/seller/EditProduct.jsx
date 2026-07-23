import React, { useState,useEffect } from "react";
import { updateProduct } from "../api/ProductApi";

export default function EditProduct({
  selectedProduct,
  setActivePage,
}) {
  const [form, setForm] = useState(null);


useEffect(() => {

  if(selectedProduct){

    setForm({

      name: selectedProduct.name || "",
      description: selectedProduct.description || "",
      shortDescription: selectedProduct.shortDescription || "",

      price: selectedProduct.price || "",
      discountPrice: selectedProduct.discountPrice || "",
      mrp: selectedProduct.mrp || "",
      costPrice: selectedProduct.costPrice || "",

      stock: selectedProduct.stock || "",
      sku: selectedProduct.sku || "",

      brand:selectedProduct.brand || "",

      shipping:{
        weight:selectedProduct.shipping?.weight || "",
        length:selectedProduct.shipping?.length || "",
        width:selectedProduct.shipping?.width || "",
        height:selectedProduct.shipping?.height || "",
      }

    });

  }

},[selectedProduct]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleShipping = (e) => {
    setForm({
      ...form,
      shipping: {
        ...form.shipping,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(selectedProduct._id, form);

      alert("Product Updated Successfully");

      setActivePage("products");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Edit Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-5"
      >

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-3 rounded-lg"
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="border p-3 rounded-lg"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-3 rounded-lg col-span-2"
        />

        <input
          name="shortDescription"
          value={form.shortDescription}
          onChange={handleChange}
          placeholder="Short Description"
          className="border p-3 rounded-lg col-span-2"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-3 rounded-lg"
        />

        <input
          name="discountPrice"
          value={form.discountPrice}
          onChange={handleChange}
          placeholder="Discount Price"
          className="border p-3 rounded-lg"
        />

        <input
          name="mrp"
          value={form.mrp}
          onChange={handleChange}
          placeholder="MRP"
          className="border p-3 rounded-lg"
        />

        <input
          name="costPrice"
          value={form.costPrice}
          onChange={handleChange}
          placeholder="Cost Price"
          className="border p-3 rounded-lg"
        />

        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="border p-3 rounded-lg"
        />

        <input
          name="sku"
          value={form.sku}
          onChange={handleChange}
          placeholder="SKU"
          className="border p-3 rounded-lg"
        />

        <input
          name="barcode"
          value={form.barcode}
          onChange={handleChange}
          placeholder="Barcode"
          className="border p-3 rounded-lg"
        />

        <input
          name="warehouse"
          value={form.warehouse}
          onChange={handleChange}
          placeholder="Warehouse"
          className="border p-3 rounded-lg"
        />

        <input
          name="gst"
          value={form.gst}
          onChange={handleChange}
          placeholder="GST"
          className="border p-3 rounded-lg"
        />

        <input
          name="minimumStockAlert"
          value={form.minimumStockAlert}
          onChange={handleChange}
          placeholder="Minimum Stock Alert"
          className="border p-3 rounded-lg"
        />

        <select
          name="stockStatus"
          value={form.stockStatus}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>

        <h3 className="col-span-2 text-xl font-bold mt-5">
          Shipping
        </h3>

        <input
          name="weight"
          value={form.shipping.weight}
          onChange={handleShipping}
          placeholder="Weight"
          className="border p-3 rounded-lg"
        />

        <input
          name="length"
          value={form.shipping.length}
          onChange={handleShipping}
          placeholder="Length"
          className="border p-3 rounded-lg"
        />

        <input
          name="width"
          value={form.shipping.width}
          onChange={handleShipping}
          placeholder="Width"
          className="border p-3 rounded-lg"
        />

        <input
          name="height"
          value={form.shipping.height}
          onChange={handleShipping}
          placeholder="Height"
          className="border p-3 rounded-lg"
        />

        <input
          name="shippingCharge"
          value={form.shipping.shippingCharge}
          onChange={handleShipping}
          placeholder="Shipping Charge"
          className="border p-3 rounded-lg"
        />

        <input
          name="deliveryTime"
          value={form.shipping.deliveryTime}
          onChange={handleShipping}
          placeholder="Delivery Time"
          className="border p-3 rounded-lg"
        />

        <div className="col-span-2 flex gap-4 mt-5">

          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={() => setActivePage("products")}
            className="border px-8 py-3 rounded-lg"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}