import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Landmark,
  CreditCard,
  Lock,
  Save,
  Camera,
} from "lucide-react";

export default function Profile() {
  const [seller, setSeller] = useState({
    name: "HelloMem Store",
    owner: "Roushni Kumari",
    email: "seller@hellomem.com",
    phone: "7485829909",
    address: "Jaipur, Rajasthan",
    gst: "08ABCDE1234F1Z5",
    bankName: "State Bank of India",
    accountNumber: "XXXX XXXX 5678",
    ifsc: "SBIN0001234",
    upi: "hellomem@upi",
    password: "",
    confirmPassword: "",
    image:
      "https://ui-avatars.com/api/?name=HelloMem&background=F97316&color=fff",
  });

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(seller);

    alert("Profile Updated Successfully");
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Seller Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your business information.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-8 space-y-8"
      >

        {/* Profile */}

        <div className="flex items-center gap-6">

          <img
            src={seller.image}
            alt=""
            className="w-28 h-28 rounded-full object-cover border-4 border-orange-100"
          />

          <div>

            <button
              type="button"
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              <Camera size={18} />
              Change Photo
            </button>

            <input
              type="file"
              className="mt-3"
            />

          </div>

        </div>

        {/* Store */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Store Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold mb-2 block">
                Store Name
              </label>

              <div className="relative">

                <Building2
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="name"
                  value={seller.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Owner Name
              </label>

              <div className="relative">

                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="owner"
                  value={seller.owner}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Email
              </label>

              <div className="relative">

                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  value={seller.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Phone
              </label>

              <div className="relative">

                <Phone
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="phone"
                  value={seller.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div className="md:col-span-2">

              <label className="font-semibold mb-2 block">
                Address
              </label>

              <div className="relative">

                <MapPin
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <textarea
                  rows={3}
                  name="address"
                  value={seller.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                GST Number
              </label>

              <input
                type="text"
                name="gst"
                value={seller.gst}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

          </div>

        </div>

        {/* Bank */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Bank Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold block mb-2">
                Bank Name
              </label>

              <div className="relative">

                <Landmark
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="bankName"
                  value={seller.bankName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Account Number
              </label>

              <input
                type="text"
                name="accountNumber"
                value={seller.accountNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                IFSC Code
              </label>

              <input
                type="text"
                name="ifsc"
                value={seller.ifsc}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                UPI ID
              </label>

              <div className="relative">

                <CreditCard
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="upi"
                  value={seller.upi}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Password */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Change Password
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold block mb-2">
                New Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <input
                  type="password"
                  name="password"
                  value={seller.password}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 pl-10"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={seller.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

          </div>

        </div>

        <div className="flex justify-end">

          <button
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
          >
            <Save size={18} />
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}