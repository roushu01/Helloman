// src/seller/AddUser.jsx

import React, { useState } from "react";
import {
  User,
  MapPin,
  Image,
  Save,
  ArrowLeft,
} from "lucide-react";

export default function AddUser({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("user");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "Customer",
    gender: "",
    dob: "",
    status: "Active",

    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",

    image: null,
  });

  const tabs = [
    {
      id: "user",
      title: "User Information",
      icon: User,
    },
    {
      id: "address",
      title: "Address",
      icon: MapPin,
    },
    {
      id: "picture",
      title: "Profile Picture",
      icon: Image,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Add User
          </h1>

          <p className="text-gray-500">
            Create a new user
          </p>

        </div>

        <button
          onClick={() => setActivePage("users")}
          className="border rounded-lg px-5 py-2 flex items-center gap-2"
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
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition

                ${
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

          {/* USER INFORMATION */}

          {activeTab === "user" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  First Name
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Last Name
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
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
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mobile: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Username
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Role
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value,
                    })
                  }
                >
                  <option>Manager</option>
                  <option>Vendor</option>
                  <option>Employee</option>
                  <option>Customer</option>
                  <option>Supplier</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Password
                </label>

                <input
                  type="password"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Gender
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option>Male</option>

                  <option>Female</option>

                  <option>Other</option>

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dob: e.target.value,
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
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value,
                    })
                  }
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>
                          </div>
          )}

          {/* ADDRESS TAB */}

          {activeTab === "address" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div className="md:col-span-2">

                <label className="font-medium">
                  Address Line 1
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.address1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address1: e.target.value,
                    })
                  }
                />

              </div>

              <div className="md:col-span-2">

                <label className="font-medium">
                  Address Line 2
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.address2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address2: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Country
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      country: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  State
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
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
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
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
                  type="text"
                  className="w-full border rounded-lg p-3 mt-2"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pincode: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* PROFILE PICTURE */}

          {activeTab === "picture" && (

            <div className="space-y-6">

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.files[0],
                    })
                  }
                />

                <p className="text-gray-500 mt-4">
                  Upload Profile Picture
                </p>

              </div>

              {formData.image && (

                <div className="flex justify-center">

                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    className="w-48 h-48 object-cover rounded-xl border"
                  />

                </div>

              )}

            </div>

          )}
                    {/* Footer Buttons */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("users")}
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
                console.log(formData);
                alert("User Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2"
            >
              <Save size={18} />
              Save User
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}