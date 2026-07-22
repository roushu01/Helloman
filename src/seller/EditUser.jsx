import React, { useState } from "react";

export default function EditUser({
  selectedUser,
  setActivePage,
}) {

  const [formData,setFormData] = useState({
    ...selectedUser
  });


  const handleUpdate = () => {

    console.log("Updated User:", formData);

    // Later call API here
    // await api.put(`/api/users/${formData.id}`,formData)


    alert("User status updated successfully");

    setActivePage("users");

  };


  return (

    <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">


      <h1 className="text-2xl font-bold mb-5">
        Edit User
      </h1>


      <div className="space-y-4">


        <div>

          <label className="font-medium">
            User Name
          </label>

          <input
            value={formData.name}
            disabled
            className="w-full border rounded-lg p-3 mt-1 bg-gray-100"
          />

        </div>



        <div>

          <label className="font-medium">
            Email
          </label>

          <input
            value={formData.email}
            disabled
            className="w-full border rounded-lg p-3 mt-1 bg-gray-100"
          />

        </div>



        <div>

          <label className="font-medium">
            Role
          </label>

          <input
            value={formData.role}
            disabled
            className="w-full border rounded-lg p-3 mt-1 bg-gray-100"
          />

        </div>



        <div>

          <label className="font-medium">
            User Status
          </label>


          <select

            value={formData.status}

            onChange={(e)=>
              setFormData({
                ...formData,
                status:e.target.value
              })
            }

            className="w-full border rounded-lg p-3 mt-1"

          >

            <option value="Active">
              Active
            </option>


            <option value="Inactive">
              Inactive
            </option>


          </select>


        </div>



        <div className="flex gap-3 mt-6">


          <button

            onClick={handleUpdate}

            className="bg-orange-500 text-white px-6 py-3 rounded-lg"

          >

            Save Changes

          </button>



          <button

            onClick={() => setActivePage("users")}

            className="border px-6 py-3 rounded-lg"

          >

            Cancel

          </button>


        </div>


      </div>


    </div>

  );
}