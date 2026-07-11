// src/seller/AddState.jsx

import React, { useState } from "react";
import {
  Globe,
  DollarSign,
  Settings,
  CheckCircle,
  Save,
  ArrowLeft,
} from "lucide-react";

export default function AddState({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("basic");

  const [State, setState] = useState({
    StateName: "",
    isoCode2: "",
    isoCode3: "",
    phoneCode: "",
    capital: "",
    continent: "",
    timezone: "",
    currency: "",
    currencyCode: "",
    currencySymbol: "",
    taxName: "",
    taxPercentage: "",
    status: "Active",
    remarks: "",
  });

  const tabs = [
    {
      id: "basic",
      title: "Basic Information",
      icon: Globe,
    },
    {
      id: "currency",
      title: "Currency",
      icon: DollarSign,
    },
    {
      id: "settings",
      title: "Settings",
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
            Add State
          </h1>

          <p className="text-gray-500">
            Create a new State
          </p>

        </div>

        <button
          onClick={() => setActivePage("countries")}
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

          {/* BASIC INFORMATION */}

          {activeTab === "basic" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  State Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={State.StateName}
                  onChange={(e) =>
                    setState({
                      ...State,
                      StateName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  ISO Code (2 Letter)
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="IN"
                  value={State.isoCode2}
                  onChange={(e) =>
                    setState({
                      ...State,
                      isoCode2: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  ISO Code (3 Letter)
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="IND"
                  value={State.isoCode3}
                  onChange={(e) =>
                    setState({
                      ...State,
                      isoCode3: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Phone Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="+91"
                  value={State.phoneCode}
                  onChange={(e) =>
                    setState({
                      ...State,
                      phoneCode: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Capital City
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value={State.capital}
                  onChange={(e) =>
                    setState({
                      ...State,
                      capital: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Continent
                </label>

                <select
                  className="w-full border rounded-lg p-3 mt-2"
                  value={State.continent}
                  onChange={(e) =>
                    setState({
                      ...State,
                      continent: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Africa</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Australia</option>
                </select>

              </div>

              <div>

                <label className="font-medium">
                  Time Zone
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="GMT +5:30"
                  value={State.timezone}
                  onChange={(e) =>
                    setState({
                      ...State,
                      timezone: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}
                    {/* CURRENCY */}

          {activeTab === "currency" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Currency Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="Indian Rupee"
                  value={State.currency}
                  onChange={(e) =>
                    setState({
                      ...State,
                      currency: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Currency Code
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="INR"
                  value={State.currencyCode}
                  onChange={(e) =>
                    setState({
                      ...State,
                      currencyCode: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Currency Symbol
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="₹"
                  value={State.currencySymbol}
                  onChange={(e) =>
                    setState({
                      ...State,
                      currencySymbol: e.target.value,
                    })
                  }
                />

              </div>

            </div>

          )}

          {/* SETTINGS */}

          {activeTab === "settings" && (

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-medium">
                  Tax Name
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="GST / VAT"
                  value={State.taxName}
                  onChange={(e) =>
                    setState({
                      ...State,
                      taxName: e.target.value,
                    })
                  }
                />

              </div>

              <div>

                <label className="font-medium">
                  Tax Percentage
                </label>

                <input
                  type="number"
                  className="w-full border rounded-lg p-3 mt-2"
                  placeholder="18"
                  value={State.taxPercentage}
                  onChange={(e) =>
                    setState({
                      ...State,
                      taxPercentage: e.target.value,
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
                  value={State.status}
                  onChange={(e) =>
                    setState({
                      ...State,
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
                  placeholder="Additional remarks..."
                  value={State.remarks}
                  onChange={(e) =>
                    setState({
                      ...State,
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

                  <h3 className="font-semibold text-lg mb-4">
                    Basic Information
                  </h3>

                  <div className="space-y-2 text-sm">

                    <p>
                      <strong>State:</strong> {State.StateName}
                    </p>

                    <p>
                      <strong>ISO Code (2):</strong> {State.isoCode2}
                    </p>

                    <p>
                      <strong>ISO Code (3):</strong> {State.isoCode3}
                    </p>

                    <p>
                      <strong>Phone Code:</strong> {State.phoneCode}
                    </p>

                    <p>
                      <strong>Capital:</strong> {State.capital}
                    </p>

                    <p>
                      <strong>Continent:</strong> {State.continent}
                    </p>

                    <p>
                      <strong>Time Zone:</strong> {State.timezone}
                    </p>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-lg p-5">

                  <h3 className="font-semibold text-lg mb-4">
                    Currency & Settings
                  </h3>

                  <div className="space-y-2 text-sm">

                    <p>
                      <strong>Currency:</strong> {State.currency}
                    </p>

                    <p>
                      <strong>Currency Code:</strong> {State.currencyCode}
                    </p>

                    <p>
                      <strong>Currency Symbol:</strong> {State.currencySymbol}
                    </p>

                    <p>
                      <strong>Tax Name:</strong> {State.taxName}
                    </p>

                    <p>
                      <strong>Tax %:</strong> {State.taxPercentage}
                    </p>

                    <p>
                      <strong>Status:</strong> {State.status}
                    </p>

                    <p>
                      <strong>Remarks:</strong> {State.remarks}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

          {/* Footer */}

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={() => setActivePage("countries")}
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
                console.log(State);
                alert("State Saved Successfully");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2"
            >
              <Save size={18} />
              Save State
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}