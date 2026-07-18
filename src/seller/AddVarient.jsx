// src/seller/AddVariant.jsx

import React, { useState } from "react";
import {
  Package,
  Layers,
  DollarSign,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function AddVariant({ setActivePage }) {

  const [activeTab, setActiveTab] = useState("basic");

  const [variant, setVariant] = useState({

    product: "",
    variantName: "",
    sku: "",
    barcode: "",

    category: "",
    brand: "",

    description: "",

    status: "Active",

  });

  const tabs = [

    {
      id: "basic",
      title: "Basic Information",
      icon: Package,
    },

    {
      id: "attributes",
      title: "Attributes",
      icon: Layers,
    },

    {
      id: "pricing",
      title: "Pricing & Inventory",
      icon: DollarSign,
    },

    {
      id: "review",
      title: "Review",
      icon: CheckCircle,
    },

  ];

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Add Product Variant
          </h1>

          <p className="text-gray-500">
            Create a new product variant
          </p>

        </div>

        <button
          onClick={() => setActivePage("product-variants")}
          className="border rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      {/* Tabs */}

      <div className="bg-white rounded-xl shadow">

        <div className="flex border-b overflow-x-auto">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-500 font-semibold"
                    : "border-transparent hover:bg-gray-50"
                }`}
              >

                <Icon size={18} />

                {tab.title}

              </button>

            );

          })}

        </div>

        <div className="p-8">

          {/* BASIC INFORMATION */}

          {activeTab === "basic" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Product
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={variant.product}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      product:e.target.value
                    })
                  }
                >

                  <option value="">
                    Select Product
                  </option>

                  <option>Nike Shoes</option>
                  <option>Wireless Earbuds</option>
                  <option>Leather Wallet</option>

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Variant Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Nike Air Max Black"
                  value={variant.variantName}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      variantName:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  SKU
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="SKU001"
                  value={variant.sku}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      sku:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Barcode
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Barcode"
                  value={variant.barcode}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      barcode:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Category
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={variant.category}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      category:e.target.value
                    })
                  }
                >

                  <option value="">
                    Select Category
                  </option>

                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Footwear</option>
                  <option>Accessories</option>

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Brand
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Nike"
                  value={variant.brand}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      brand:e.target.value
                    })
                  }
                />

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Description
                </label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Variant Description..."
                  value={variant.description}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      description:e.target.value
                    })
                  }
                />

              </div>

            </div>

          )}
                    {/* ATTRIBUTES */}

          {activeTab === "attributes" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Color
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={variant.color || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      color:e.target.value
                    })
                  }
                >

                  <option value="">Select Color</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Green</option>

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Size
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={variant.size || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      size:e.target.value
                    })
                  }
                >

                  <option value="">Select Size</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Material
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Leather / Cotton / Plastic"
                  value={variant.material || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      material:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Weight (Kg)
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="0.5"
                  value={variant.weight || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      weight:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Length (cm)
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="25"
                  value={variant.length || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      length:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Width (cm)
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="15"
                  value={variant.width || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      width:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Height (cm)
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="8"
                  value={variant.height || ""}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      height:e.target.value
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Variant Status
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={variant.status}
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      status:e.target.value
                    })
                  }
                >

                  <option>Active</option>
                  <option>Inactive</option>

                </select>

              </div>

            </div>

          )}
                    {/* PRICING & INVENTORY */}

          {activeTab === "pricing" && (

            <div className="space-y-8">

              {/* Pricing */}

              <div>

                <h2 className="text-xl font-semibold mb-5">
                  Pricing
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                  <div>

                    <label className="font-medium">
                      MRP
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      placeholder="1000"
                      value={variant.mrp || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          mrp:e.target.value
                        })
                      }
                    />

                  </div>

                  <div>

                    <label className="font-medium">
                      Selling Price
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      placeholder="850"
                      value={variant.sellingPrice || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          sellingPrice:e.target.value
                        })
                      }
                    />

                  </div>

                  <div>

                    <label className="font-medium">
                      Cost Price
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      placeholder="650"
                      value={variant.costPrice || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          costPrice:e.target.value
                        })
                      }
                    />

                  </div>

                </div>

              </div>

              {/* Inventory */}

              <div>

                <h2 className="text-xl font-semibold mb-5">
                  Inventory
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                  <div>

                    <label className="font-medium">
                      Stock Quantity
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      value={variant.stock || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          stock:e.target.value
                        })
                      }
                    />

                  </div>

                  <div>

                    <label className="font-medium">
                      Minimum Stock
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      value={variant.minStock || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          minStock:e.target.value
                        })
                      }
                    />

                  </div>

                  <div>

                    <label className="font-medium">
                      Maximum Stock
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-lg p-3 mt-2"
                      value={variant.maxStock || ""}
                      onChange={(e)=>
                        setVariant({
                          ...variant,
                          maxStock:e.target.value
                        })
                      }
                    />

                  </div>

                </div>

              </div>

              {/* Image Upload */}

              <div>

                <h2 className="text-xl font-semibold mb-5">
                  Variant Image
                </h2>

                <input
                  type="file"
                  accept="image/*"
                  className="w-full border rounded-lg p-3"
                  onChange={(e)=>
                    setVariant({
                      ...variant,
                      image:e.target.files[0]
                    })
                  }
                />

              </div>

            </div>

          )}
                    {/* REVIEW */}

          {activeTab === "review" && (

            <div className="space-y-8">

              {/* Basic Information */}

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Basic Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Product:</strong> {variant.product}</p>
                  <p><strong>Variant Name:</strong> {variant.variantName}</p>
                  <p><strong>SKU:</strong> {variant.sku}</p>
                  <p><strong>Barcode:</strong> {variant.barcode}</p>
                  <p><strong>Category:</strong> {variant.category}</p>
                  <p><strong>Brand:</strong> {variant.brand}</p>
                  <p className="md:col-span-2">
                    <strong>Description:</strong> {variant.description}
                  </p>

                </div>

              </div>

              {/* Attributes */}

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Variant Attributes
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Color:</strong> {variant.color}</p>
                  <p><strong>Size:</strong> {variant.size}</p>
                  <p><strong>Material:</strong> {variant.material}</p>
                  <p><strong>Weight:</strong> {variant.weight} Kg</p>
                  <p><strong>Length:</strong> {variant.length} cm</p>
                  <p><strong>Width:</strong> {variant.width} cm</p>
                  <p><strong>Height:</strong> {variant.height} cm</p>
                  <p><strong>Status:</strong> {variant.status}</p>

                </div>

              </div>

              {/* Pricing */}

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Pricing & Inventory
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>MRP:</strong> ₹{variant.mrp}</p>
                  <p><strong>Selling Price:</strong> ₹{variant.sellingPrice}</p>
                  <p><strong>Cost Price:</strong> ₹{variant.costPrice}</p>
                  <p><strong>Stock:</strong> {variant.stock}</p>
                  <p><strong>Minimum Stock:</strong> {variant.minStock}</p>
                  <p><strong>Maximum Stock:</strong> {variant.maxStock}</p>

                  <p className="md:col-span-2">
                    <strong>Image:</strong>{" "}
                    {variant.image
                      ? variant.image.name
                      : "No Image Selected"}
                  </p>

                </div>

              </div>

            </div>

          )}

          {/* Footer */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("product-variants")}
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={() => alert("Draft Saved")}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
              Save Draft
            </button>

            <button
              onClick={() => {
                console.log(variant);
                alert("Variant Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save Variant
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}