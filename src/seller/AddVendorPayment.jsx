// src/seller/AddVendor.jsx

import React, { useState } from "react";
import {
  User,
  Building2,
  CreditCard,
  FileText,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function AddVendor({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("basic");

  const [vendor, setVendor] = useState({
    // Basic Information
    vendorName: "",
    vendorCode: "",
    businessName: "",
    vendorType: "",
    email: "",
    mobile: "",
    alternateMobile: "",

    // Address
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",

    // Bank Details
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    accountType: "",

    // Documents
    pan: "",
    gst: "",
    aadhaar: "",
    panFile: null,
    gstFile: null,

    // Status
    status: "Active",
    remarks: "",
  });

  const tabs = [
    {
      id: "basic",
      title: "Basic Information",
      icon: User,
    },
    {
      id: "address",
      title: "Address",
      icon: Building2,
    },
    {
      id: "bank",
      title: "Bank Details",
      icon: CreditCard,
    },
    {
      id: "documents",
      title: "Documents",
      icon: FileText,
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
            Add Vendor
          </h1>

          <p className="text-gray-500">
            Create a new vendor
          </p>
        </div>

        <button
          onClick={() => setActivePage("vendors")}
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
                  Vendor Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.vendorName}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      vendorName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Vendor Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.vendorCode}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      vendorCode: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Business Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.businessName}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      businessName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Vendor Type
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.vendorType}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      vendorType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option>Manufacturer</option>
                  <option>Wholesaler</option>
                  <option>Distributor</option>
                  <option>Retailer</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.email}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      email: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Mobile Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.mobile}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      mobile: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Alternate Mobile
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.alternateMobile}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      alternateMobile: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}
                    {/* ADDRESS */}

          {activeTab === "address" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Address
                </label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.address}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      address: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Country
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.country}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      country: e.target.value,
                    })
                  }
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  State
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.state}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      state: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  City
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.city}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      city: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Pincode
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.pincode}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      pincode: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* BANK DETAILS */}

          {activeTab === "bank" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Bank Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.bankName}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      bankName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Account Holder Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.accountHolder}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      accountHolder: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Account Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.accountNumber}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      accountNumber: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  IFSC Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.ifsc}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      ifsc: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Account Type
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.accountType}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      accountType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Salary</option>
                </select>

              </div>

            </div>

          )}
                    {/* DOCUMENTS */}

          {activeTab === "documents" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  PAN Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.pan}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      pan: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  GST Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.gst}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      gst: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Aadhaar Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.aadhaar}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      aadhaar: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Vendor Status
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.status}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      status: e.target.value,
                    })
                  }
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Upload PAN Card
                </label>

                <input
                  type="file"
                  className="w-full border rounded-lg p-3 mt-2"
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      panFile: e.target.files[0],
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Upload GST Certificate
                </label>

                <input
                  type="file"
                  className="w-full border rounded-lg p-3 mt-2"
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      gstFile: e.target.files[0],
                    })
                  }
                />

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Remarks
                </label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={vendor.remarks}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      remarks: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* REVIEW */}

          {activeTab === "review" && (

            <div className="space-y-8">

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Vendor Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Vendor Name:</strong> {vendor.vendorName}</p>
                  <p><strong>Vendor Code:</strong> {vendor.vendorCode}</p>
                  <p><strong>Business Name:</strong> {vendor.businessName}</p>
                  <p><strong>Vendor Type:</strong> {vendor.vendorType}</p>
                  <p><strong>Email:</strong> {vendor.email}</p>
                  <p><strong>Mobile:</strong> {vendor.mobile}</p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Address
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Address:</strong> {vendor.address}</p>
                  <p><strong>Country:</strong> {vendor.country}</p>
                  <p><strong>State:</strong> {vendor.state}</p>
                  <p><strong>City:</strong> {vendor.city}</p>
                  <p><strong>Pincode:</strong> {vendor.pincode}</p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Bank Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Bank:</strong> {vendor.bankName}</p>
                  <p><strong>Account Holder:</strong> {vendor.accountHolder}</p>
                  <p><strong>Account Number:</strong> {vendor.accountNumber}</p>
                  <p><strong>IFSC:</strong> {vendor.ifsc}</p>
                  <p><strong>Account Type:</strong> {vendor.accountType}</p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Documents
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>PAN:</strong> {vendor.pan}</p>
                  <p><strong>GST:</strong> {vendor.gst}</p>
                  <p><strong>Aadhaar:</strong> {vendor.aadhaar}</p>
                  <p><strong>Status:</strong> {vendor.status}</p>

                </div>

              </div>

            </div>

          )}

          {/* Footer */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("vendors")}
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
                console.log(vendor);
                alert("Vendor Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save Vendor
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}