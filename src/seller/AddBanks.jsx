// src/seller/AddBanks.jsx

import React, { useState } from "react";
import {
  Building2,
  Landmark,
  Settings,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function AddBanks({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("basic");

  const [bank, setBank] = useState({
    bankName: "",
    bankCode: "",
    ifscCode: "",
    swiftCode: "",
    country: "",
    state: "",
    city: "",
    address: "",

    branchName: "",
    branchCode: "",
    managerName: "",
    branchPhone: "",
    branchEmail: "",

    accountType: "",
    currency: "",
    accountFormat: "",
    status: "Active",
    remarks: "",
  });

  const tabs = [
    {
      id: "basic",
      title: "Basic Information",
      icon: Building2,
    },
    {
      id: "branch",
      title: "Branch Details",
      icon: Landmark,
    },
    {
      id: "settings",
      title: "Account Settings",
      icon: Settings,
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
            Add Bank
          </h1>

          <p className="text-gray-500">
            Create a new bank
          </p>

        </div>

        <button
          onClick={() => setActivePage("banks")}
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
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition ${
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
                  Bank Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.bankName}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      bankName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Bank Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="SBI001"
                  value={bank.bankCode}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      bankCode: e.target.value,
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
                  placeholder="SBIN0001234"
                  value={bank.ifscCode}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      ifscCode: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  SWIFT Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="SBININBB"
                  value={bank.swiftCode}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      swiftCode: e.target.value,
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
                  value={bank.country}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      country: e.target.value,
                    })
                  }
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  State
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.state}
                  onChange={(e) =>
                    setBank({
                      ...bank,
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
                  value={bank.city}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      city: e.target.value,
                    })
                  }
                />

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Bank Address
                </label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.address}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      address: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}
                    {/* BRANCH DETAILS */}

          {activeTab === "branch" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Branch Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.branchName}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      branchName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Branch Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.branchCode}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      branchCode: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Branch Manager
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.managerName}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      managerName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Contact Number
                </label>

                <input
                  type="tel"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.branchPhone}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      branchPhone: e.target.value,
                    })
                  }
                />

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Branch Email
                </label>

                <input
                  type="email"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.branchEmail}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      branchEmail: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* ACCOUNT SETTINGS */}

          {activeTab === "settings" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Account Type
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.accountType}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      accountType: e.target.value,
                    })
                  }
                >
                  <option value="">Select Account Type</option>
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Salary</option>
                  <option>Corporate</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Currency
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.currency}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      currency: e.target.value,
                    })
                  }
                >
                  <option value="">Select Currency</option>
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Account Number Format
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="16 Digits"
                  value={bank.accountFormat}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      accountFormat: e.target.value,
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
                  value={bank.status}
                  onChange={(e) =>
                    setBank({
                      ...bank,
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
                  rows="5"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Enter remarks..."
                  value={bank.remarks}
                  onChange={(e) =>
                    setBank({
                      ...bank,
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

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-gray-50 rounded-lg p-5">

                  <h3 className="text-lg font-semibold mb-4">
                    Basic Information
                  </h3>

                  <div className="space-y-2 text-sm">

                    <p><strong>Bank Name:</strong> {bank.bankName}</p>

                    <p><strong>Bank Code:</strong> {bank.bankCode}</p>

                    <p><strong>IFSC Code:</strong> {bank.ifscCode}</p>

                    <p><strong>SWIFT Code:</strong> {bank.swiftCode}</p>

                    <p><strong>Country:</strong> {bank.country}</p>

                    <p><strong>State:</strong> {bank.state}</p>

                    <p><strong>City:</strong> {bank.city}</p>

                    <p><strong>Address:</strong> {bank.address}</p>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-lg p-5">

                  <h3 className="text-lg font-semibold mb-4">
                    Branch Details
                  </h3>

                  <div className="space-y-2 text-sm">

                    <p><strong>Branch Name:</strong> {bank.branchName}</p>

                    <p><strong>Branch Code:</strong> {bank.branchCode}</p>

                    <p><strong>Manager:</strong> {bank.managerName}</p>

                    <p><strong>Phone:</strong> {bank.branchPhone}</p>

                    <p><strong>Email:</strong> {bank.branchEmail}</p>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-lg p-5 md:col-span-2">

                  <h3 className="text-lg font-semibold mb-4">
                    Account Settings
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">

                    <p>
                      <strong>Account Type:</strong> {bank.accountType}
                    </p>

                    <p>
                      <strong>Currency:</strong> {bank.currency}
                    </p>

                    <p>
                      <strong>Account Format:</strong> {bank.accountFormat}
                    </p>

                    <p>
                      <strong>Status:</strong> {bank.status}
                    </p>

                    <p className="md:col-span-2">
                      <strong>Remarks:</strong> {bank.remarks}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

          {/* Footer */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("banks")}
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
                console.log(bank);
                alert("Bank Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save Bank
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}