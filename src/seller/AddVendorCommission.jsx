// src/seller/AddVendorCommission.jsx

import React, { useState } from "react";
import {
  Percent,
  Calendar,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function AddVendorCommission({
  setActivePage,
}) {

  const [activeTab, setActiveTab] = useState("basic");

  const [commission, setCommission] = useState({

    vendorId: "",
    vendorName: "",
    category: "",

    commissionType: "",
    commissionValue: "",
    minimumCommission: "",
    maximumCommission: "",

    gstApplicable: "Yes",
    gstPercentage: "18",

    effectiveFrom: "",
    effectiveTo: "",

    status: "Active",

    remarks: "",

  });

  const tabs = [
    {
      id: "basic",
      title: "Basic Information",
      icon: Percent,
    },
    {
      id: "commission",
      title: "Commission Details",
      icon: Percent,
    },
    {
      id: "tax",
      title: "Tax Settings",
      icon: Calendar,
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
            Add Vendor Commission
          </h1>

          <p className="text-gray-500">
            Configure vendor commission settings
          </p>

        </div>

        <button
          onClick={() => setActivePage("vendor-commission")}
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
                  Vendor ID
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.vendorId}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      vendorId: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Vendor Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.vendorName}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      vendorName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Product Category
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.category}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      category: e.target.value,
                    })
                  }
                >

                  <option value="">Select</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Furniture</option>
                  <option>Mobiles</option>

                </select>

              </div>

            </div>

          )}
                    {/* COMMISSION DETAILS */}

          {activeTab === "commission" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Commission Type
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.commissionType}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      commissionType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option>Percentage</option>
                  <option>Fixed</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Commission Value
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.commissionValue}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      commissionValue: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Minimum Commission
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.minimumCommission}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      minimumCommission: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Maximum Commission
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.maximumCommission}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      maximumCommission: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* TAX SETTINGS */}

          {activeTab === "tax" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  GST Applicable
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.gstApplicable}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      gstApplicable: e.target.value,
                    })
                  }
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  GST Percentage
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.gstPercentage}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      gstPercentage: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Effective From
                </label>

                <input
                  type="date"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.effectiveFrom}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      effectiveFrom: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Effective To
                </label>

                <input
                  type="date"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.effectiveTo}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      effectiveTo: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Status
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.status}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
                      status: e.target.value,
                    })
                  }
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Remarks
                </label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={commission.remarks}
                  onChange={(e) =>
                    setCommission({
                      ...commission,
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

                  <p>
                    <strong>Vendor ID:</strong> {commission.vendorId}
                  </p>

                  <p>
                    <strong>Vendor Name:</strong> {commission.vendorName}
                  </p>

                  <p>
                    <strong>Category:</strong> {commission.category}
                  </p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Commission Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p>
                    <strong>Commission Type:</strong>{" "}
                    {commission.commissionType}
                  </p>

                  <p>
                    <strong>Commission Value:</strong>{" "}
                    {commission.commissionType === "Percentage"
                      ? `${commission.commissionValue}%`
                      : `₹${commission.commissionValue}`}
                  </p>

                  <p>
                    <strong>Minimum Commission:</strong> ₹
                    {commission.minimumCommission}
                  </p>

                  <p>
                    <strong>Maximum Commission:</strong> ₹
                    {commission.maximumCommission}
                  </p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Tax Settings
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p>
                    <strong>GST Applicable:</strong>{" "}
                    {commission.gstApplicable}
                  </p>

                  <p>
                    <strong>GST Percentage:</strong>{" "}
                    {commission.gstPercentage}%
                  </p>

                  <p>
                    <strong>Effective From:</strong>{" "}
                    {commission.effectiveFrom}
                  </p>

                  <p>
                    <strong>Effective To:</strong>{" "}
                    {commission.effectiveTo}
                  </p>

                  <p>
                    <strong>Status:</strong> {commission.status}
                  </p>

                  <p>
                    <strong>Remarks:</strong> {commission.remarks}
                  </p>

                </div>

              </div>

            </div>

          )}

          {/* Footer */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("vendor-commission")}
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
                console.log(commission);
                alert("Vendor Commission Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save Commission
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}