// src/seller/AddUserBank.jsx

import React, { useState } from "react";
import {
  User,
  Landmark,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function AddUserBank({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("basic");

  const [bank, setBank] = useState({
    // User Information
    userName: "",
    userType: "",
    mobile: "",
    email: "",

    // Bank Details
    bankName: "",
    branchName: "",
    accountHolder: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    accountType: "",
    upiId: "",

    // Verification
    panNumber: "",
    aadhaarNumber: "",
    passbook: null,
    cheque: null,
    primaryAccount: "Yes",
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
      id: "bank",
      title: "Bank Details",
      icon: Landmark,
    },
    {
      id: "verification",
      title: "Verification",
      icon: ShieldCheck,
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
            Add User Bank
          </h1>

          <p className="text-gray-500">
            Create a new user bank account
          </p>
        </div>

        <button
          onClick={() => setActivePage("user-banks")}
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
                className={`flex items-center gap-2 px-6 py-4 border-b-2 whitespace-nowrap transition ${
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
                  User Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.userName}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      userName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  User Type
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.userType}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      userType: e.target.value,
                    })
                  }
                >
                  <option value="">Select User Type</option>
                  <option>Customer</option>
                  <option>Vendor</option>
                  <option>Supplier</option>
                  <option>Employee</option>
                  <option>Manager</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.mobile}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      mobile: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.email}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      email: e.target.value,
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
                  Account Holder Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.accountHolder}
                  onChange={(e) =>
                    setBank({
                      ...bank,
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
                  value={bank.accountNumber}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      accountNumber: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Confirm Account Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.confirmAccountNumber}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      confirmAccountNumber: e.target.value,
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
                  <option value="">Select</option>
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Salary</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  UPI ID
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="example@upi"
                  value={bank.upiId}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      upiId: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* VERIFICATION */}

          {activeTab === "verification" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  PAN Number
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.panNumber}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      panNumber: e.target.value,
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
                  value={bank.aadhaarNumber}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      aadhaarNumber: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Upload Passbook
                </label>

                <input
                  type="file"
                  className="w-full border rounded-lg p-3 mt-2"
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      passbook: e.target.files[0],
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Upload Cancelled Cheque
                </label>

                <input
                  type="file"
                  className="w-full border rounded-lg p-3 mt-2"
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      cheque: e.target.files[0],
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Primary Account
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={bank.primaryAccount}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      primaryAccount: e.target.value,
                    })
                  }
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>

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
                  rows="4"
                  className="w-full border rounded-lg p-3 mt-2"
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

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  User Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>User Name:</strong> {bank.userName}</p>

                  <p><strong>User Type:</strong> {bank.userType}</p>

                  <p><strong>Mobile:</strong> {bank.mobile}</p>

                  <p><strong>Email:</strong> {bank.email}</p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Bank Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>Bank:</strong> {bank.bankName}</p>

                  <p><strong>Branch:</strong> {bank.branchName}</p>

                  <p><strong>Account Holder:</strong> {bank.accountHolder}</p>

                  <p><strong>Account Number:</strong> {bank.accountNumber}</p>

                  <p><strong>IFSC Code:</strong> {bank.ifscCode}</p>

                  <p><strong>Account Type:</strong> {bank.accountType}</p>

                  <p><strong>UPI ID:</strong> {bank.upiId}</p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-6">

                <h2 className="text-xl font-semibold mb-5">
                  Verification
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <p><strong>PAN Number:</strong> {bank.panNumber}</p>

                  <p><strong>Aadhaar Number:</strong> {bank.aadhaarNumber}</p>

                  <p>
                    <strong>Passbook:</strong>{" "}
                    {bank.passbook ? bank.passbook.name : "Not Uploaded"}
                  </p>

                  <p>
                    <strong>Cancelled Cheque:</strong>{" "}
                    {bank.cheque ? bank.cheque.name : "Not Uploaded"}
                  </p>

                  <p>
                    <strong>Primary Account:</strong>{" "}
                    {bank.primaryAccount}
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

          )}

          {/* Footer Buttons */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("user-banks")}
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
                alert("User Bank Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save User Bank
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}