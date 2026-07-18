import React, { useState,useEffect } from "react";
import {
  Package,
  DollarSign,
  Boxes,
  Truck,
  Image,
  Layers,
  Search,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Save,
  X,
} from "lucide-react";
import {createProduct} from "../api/ProductApi"
import api from "../api/axios";

export default function Products({ setActivePage }) {
  const tabs = [
    {
      id: "basic",
      label: "Basic Details",
      icon: Package,
    },
    {
      id: "pricing",
      label: "Pricing",
      icon: DollarSign,
    },
    {
      id: "inventory",
      label: "Inventory",
      icon: Boxes,
    },
    {
      id: "shipping",
      label: "Shipping",
      icon: Truck,
    },
    {
      id: "images",
      label: "Images",
      icon: Image,
    },
    {
      id: "variants",
      label: "Variants",
      icon: Layers,
    },
    {
      id: "seo",
      label: "SEO",
      icon: Search,
    },
    {
      id: "review",
      label: "Review",
      icon: CheckCircle,
    },
  ];

  const [activeTab, setActiveTab] = useState("basic");
  const [loading,setloading]=useState(false);
  

const [categories, setCategories] = useState([]);

const [formData, setFormData] = useState({
  productName: "",
  productCode: "",
  brand: "",
  manufacturer: "",
  category: "",
  subCategory: "",
  shortDescription: "",
  description: "",
  tags:[],

  mrp: "",
  sellingPrice: "",
  costPrice: "",
  gst: "",
  taxType: "Inclusive",
  discount: "",

  sku: "",
  barcode: "",
  stock: "",
  minStock: "",
  warehouse: "",
  stockStatus: "In Stock",

  weight: "",
  length: "",
  width: "",
  height: "",
  shippingCharge: "",
  deliveryTime: "",

  images: [],
  thumbnail: null,

  variants: {
    colors: [],
    sizes: [],
  },

  seo: {
    metaTitle: "",
    metaDescription: "",
    keywords: [],
  },

  specifications: {},

  isFeatured: false,
});


const fetchCategories = async () => {
  try {
    const { data } = await api.get(
      "/api/categories"
    );

    console.log(data);

    setCategories(data.data);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  fetchCategories();
}, []);
const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  setFormData({
    ...formData,
    images: files,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  setloading(true);

  try {
    const payload = {
  name: formData.productName,
  description: formData.description,
  shortDescription: formData.shortDescription,

  category: formData.category,
  brand: formData.brand,

  price: Number(formData.sellingPrice),
  mrp: Number(formData.mrp),
  costPrice: Number(formData.costPrice),

  gst: Number(formData.gst),
  taxType: formData.taxType,

  stock: Number(formData.stock),
  sku: formData.sku,
  barcode: formData.barcode,
  minimumStockAlert: Number(formData.minStock),
  warehouse: formData.warehouse,
  stockStatus: formData.stockStatus,

  images: formData.images,
  thumbnail: formData.thumbnail,

  shipping: {
    weight: Number(formData.weight),
    length: Number(formData.length),
    width: Number(formData.width),
    height: Number(formData.height),
    shippingCharge: Number(formData.shippingCharge),
    deliveryTime: formData.deliveryTime,
  },

  specifications: formData.specifications,

  variants: formData.variants,

  tags: formData.tags,

  seo: formData.seo,

  isFeatured: formData.isFeatured,
};

    const res = await createProduct(payload);
    console.log(payload)

    alert(res.message);

    console.log(res.product);

  } catch (err) {
    console.log(err.response?.data);

    alert(
      err.response?.data?.message ||
      "Failed to create product"
    );
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentIndex = tabs.findIndex(
    (tab) => tab.id === activeTab
  );

  const nextTab = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const previousTab = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const saveformData = () => {
    console.log(formData);
    alert("Product Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Add Product
          </h1>
           <button
            onClick={() => setActivePage("products")}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100"
          >
            ← Back
          </button>

          <p className="text-gray-500 mt-1">
            Create a new product for your catalog
          </p>

        </div>

        <button
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg"
        >
          <X size={18} />
          Cancel
        </button>

      </div>

      {/* Tabs */}

      <div className="bg-white rounded-xl shadow mb-6">

        <div className="flex overflow-x-auto">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 whitespace-nowrap transition-all

                ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-500 font-semibold"
                    : "border-transparent text-gray-500 hover:text-orange-500"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}

        </div>

      </div>

      {/* Content */}
      <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-xl shadow p-6 min-h-[500px]">

        {activeTab === "basic" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Basic Details
      </h2>
      <p className="text-gray-500 mt-1">
        Enter the primary information about your product.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Product Name *
        </label>

        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Product Code */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Product Code
        </label>

        <input
          type="text"
          name="productCode"
          value={formData.productCode}
          onChange={handleChange}
          placeholder="SKU / Product Code"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Brand
        </label>

        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Nike"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Manufacturer */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Manufacturer
        </label>

        <input
          type="text"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          placeholder="Manufacturer name"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Category */}
      <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Category
      </label>

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3"
      >
        <option value="">Select Category</option>

        {categories.map((category) => (
          <option
            key={category._id}
            value={category._id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>

      {/* Sub Category */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Sub Category
        </label>

        <input
          type="text"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
          placeholder="Running Shoes"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

    </div>

    {/* Tags */}
  <div>
  <label className="block text-sm font-medium mb-2">
    Tags
  </label>

  <input
    type="text"
    placeholder="shoe, sports, nike, men"
    value={formData.tags.join(", ")}
    onChange={(e) =>
      setFormData({
        ...formData,
        tags: e.target.value
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== ""),
      })
    }
    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
  />
</div>

    {/* Short Description */}
    <div>
      <label className="block text-sm font-medium mb-2">
        Short Description
      </label>

      <textarea
        rows={3}
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        placeholder="Small summary about the product..."
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium mb-2">
        Product Description
      </label>

      <textarea
        rows={8}
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Write detailed product description..."
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </div>

  </div>
)}

        {/* ===========================
   Pricing
=========================== */}

{activeTab === "pricing" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Pricing
      </h2>
      <p className="text-gray-500 mt-1">
        Configure selling price, discounts and tax.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-medium mb-2">
          MRP (₹)
        </label>

        <input
          type="number"
          name="mrp"
          value={formData.mrp}
          onChange={handleChange}
          placeholder="0"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Selling Price (₹)
        </label>

        <input
          type="number"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
          placeholder="0"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Cost Price (₹)
        </label>

        <input
          type="number"
          name="costPrice"
          value={formData.costPrice}
          onChange={handleChange}
          placeholder="0"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Discount (%)
        </label>

        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="10"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          GST (%)
        </label>

        <input
          type="number"
          name="gst"
          value={formData.gst}
          onChange={handleChange}
          placeholder="18"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Tax Type
        </label>

        <select
          name="taxType"
          value={formData.taxType}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>Inclusive</option>
          <option>Exclusive</option>
        </select>
      </div>

    </div>

  </div>
)}

{/* ===========================
   Inventory
=========================== */}

{activeTab === "inventory" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Inventory
      </h2>
      <p className="text-gray-500 mt-1">
        Manage stock information.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-medium mb-2">
          SKU
        </label>

        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          placeholder="SKU001"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Barcode
        </label>

        <input
          type="text"
          name="barcode"
          value={formData.barcode}
          onChange={handleChange}
          placeholder="Barcode"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Stock Quantity
        </label>

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="100"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Minimum Stock Alert
        </label>

        <input
          type="number"
          name="minStock"
          value={formData.minStock}
          onChange={handleChange}
          placeholder="10"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Stock Status
        </label>

        <select
          name="stockStatus"
          value={formData.stockStatus}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>In Stock</option>
          <option>Out of Stock</option>
          <option>Pre Order</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Warehouse
        </label>

        <input
          type="text"
          name="warehouse"
          value={formData.warehouse}
          onChange={handleChange}
          placeholder="Warehouse A"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

    </div>

  </div>
)}

{/* ===========================
   Shipping
=========================== */}

{activeTab === "shipping" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Shipping
      </h2>
      <p className="text-gray-500 mt-1">
        Shipping dimensions and weight.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-medium mb-2">
          Weight (kg)
        </label>

        <input
          type="number"
          step="0.1"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Shipping Charge
        </label>

        <input
          type="number"
          name="shippingCharge"
          value={formData.shippingCharge}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Length (cm)
        </label>

        <input
          type="number"
          name="length"
          value={formData.length}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Width (cm)
        </label>

        <input
          type="number"
          name="width"
          value={formData.width}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Height (cm)
        </label>

        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Delivery Time
        </label>

        <input
          type="text"
          name="deliveryTime"
          value={formData.deliveryTime}
          onChange={handleChange}
          placeholder="3-5 Days"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

    </div>

  </div>
)}

        {/* ===========================
   Images
=========================== */}

{activeTab === "images" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Product Images
      </h2>

      <p className="text-gray-500 mt-1">
        Upload product images.
      </p>
    </div>

    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
     <button>
      <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
</button>
      <p className="text-gray-500">
        Drag & Drop images here or browse
      </p>

      <p className="text-sm text-gray-400 mt-2">
        JPG, PNG (Maximum 10 Images)
      </p>

    </div>

  </div>
)}

{/* ===========================
   Variants
=========================== */}

{activeTab === "variants" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        Product Variants
      </h2>

      <p className="text-gray-500 mt-1">
        Add different colors and sizes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block font-medium mb-2">
          Colors
        </label>

        <input
          type="text"
          placeholder="Red, Blue, Black"
          onChange={(e) =>
            setFormData({
              ...formData,
              variants: {
                ...formData.variants,
                colors: e.target.value
                  .split(",")
                  .map(item => item.trim())
                  .filter(item => item !== ""),
              },
            })
          }
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Sizes
        </label>

        <input
            type="text"
            placeholder="S, M, L, XL"
            onChange={(e) =>
              setFormData({
                ...formData,
                variants: {
                  ...formData.variants,
                  sizes: e.target.value
                    .split(",")
                    .map(item => item.trim())
                    .filter(item => item !== ""),
                },
              })
            }
          />
      </div>

    </div>

  </div>
)}

{/* ===========================
   SEO
=========================== */}

{activeTab === "seo" && (
  <div className="space-y-8">

    <div>
      <h2 className="text-2xl font-semibold">
        SEO Details
      </h2>

      <p className="text-gray-500 mt-1">
        Improve search engine visibility.
      </p>
    </div>

    <div className="space-y-5">

      <div>

        <label className="block font-medium mb-2">
          Meta Title
        </label>

        <input
          type="text"
          name="metaTitle"
          value={formData.metaTitle}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>

      <div>

        <label className="block font-medium mb-2">
          Meta Description
        </label>

        <textarea
          rows={4}
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>

      <div>

        <label className="block font-medium mb-2">
          SEO Keywords
        </label>

        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="shoe,nike,sports"
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>

    </div>

  </div>
)}

{/* ===========================
   Review
=========================== */}

{activeTab === "review" && (
  <div className="space-y-8">

    <div>

      <h2 className="text-2xl font-semibold">
        Review Product
      </h2>

      <p className="text-gray-500 mt-1">
        Verify product details before publishing.
      </p>

    </div>

    <div className="bg-gray-50 rounded-xl p-6 space-y-3">

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">formData Name</span>
        <span>{formData.formDataName}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">Category</span>
        <span>{formData.category}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">Brand</span>
        <span>{formData.brand}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">MRP</span>
        <span>₹{formData.mrp}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">Selling Price</span>
        <span>₹{formData.sellingPrice}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">Stock</span>
        <span>{formData.stock}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium">Weight</span>
        <span>{formData.weight} kg</span>
      </div>

      <div className="flex justify-between">
        <span className="font-medium">Delivery Time</span>
        <span>{formData.deliveryTime}</span>
      </div>

    </div>

    <div className="flex justify-end gap-4">

     

      <button type="submit"disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Publishing..." : "Publish Product"}
        </button>

    </div>

  </div>

)}

      </div>
      </form>

      {/* Navigation */}

      <div className="flex justify-between mt-6">

        <button
          onClick={previousTab}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {currentIndex === tabs.length - 1 ? (
//          <button
//   type="submit"
//   disabled={loading}
//   className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white ${
//     loading
//       ? "bg-gray-400 cursor-not-allowed"
//       : "bg-green-600 hover:bg-green-700"
//   }`}
// >
//   <Save size={18} />
//   {loading ? "Saving..." : "Save Product"}
// </button>
<></>
        ) : (
          <button
            onClick={nextTab}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next
            <ChevronRight size={18} />
          </button>
        )}

      </div>

    </div>
  );
}