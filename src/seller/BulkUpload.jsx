// src/seller/BulkUpload.jsx

import React, { useState,useEffect } from "react";
import {
  UploadCloud,
  FileSpreadsheet,
  Download,
  Trash2,
  CheckCircle,
} from "lucide-react";
import { uploadProductsExcel,getBulkUploadHistory } from "../api/bulkUploadApi";
export default function BulkUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

 const handleUpload = async () => {
  if (!file) {
    alert("Please select an Excel file");
    return;
  }

  try {
    setLoading(true);

    const res = await uploadProductsExcel(file);

    alert(res.message || "Products uploaded successfully");

    setFile(null);

  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message ||
      "Upload failed"
    );
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  fetchHistory();
}, []);

const fetchHistory = async () => {
  try {
    const res = await getBulkUploadHistory();

    if (res.success) {
      setHistory(res.data);
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Bulk Product Upload
        </h1>

        <p className="text-gray-500">
          Upload products using Excel (.xls/.xlsx)
        </p>

      </div>

      {/* Upload Card */}

      <div className="bg-white rounded-xl shadow p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-semibold">
            Upload Excel Sheet
          </h2>

          <button
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            <Download size={18} />
            Download Sample
          </button>

        </div>

        {/* Upload Box */}

        <label
          htmlFor="excel"
          className="border-2 border-dashed border-orange-400 rounded-xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-50 transition"
        >

          <UploadCloud
            size={60}
            className="text-orange-500"
          />

          <h3 className="text-xl font-semibold mt-4">
            Drag & Drop Excel File
          </h3>

          <p className="text-gray-500 mt-2">
            or Click to Browse
          </p>

          <p className="text-sm text-gray-400 mt-4">
            Supported formats: .xls, .xlsx
          </p>

        </label>

        <input
          id="excel"
          type="file"
          accept=".xls,.xlsx"
          className="hidden"
          onChange={handleFile}
        />

        {/* Selected File */}

        {file && (

          <div className="mt-6 border rounded-lg p-4 flex justify-between items-center">

            <div className="flex items-center gap-3">

              <FileSpreadsheet
                size={35}
                className="text-green-600"
              />

              <div>

                <h4 className="font-semibold">
                  {file.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {(file.size / 1024).toFixed(2)} KB
                </p>

              </div>

            </div>

            <button
              onClick={() => setFile(null)}
              className="text-red-500"
            >
              <Trash2 />
            </button>

          </div>

        )}

        {/* Upload Button */}

        <div className="mt-8 flex justify-end">

         <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            <UploadCloud size={20} />
            {loading ? "Uploading..." : "Upload Products"}
          </button>
        </div>

      </div>

      {/* Upload History */}

      <div className="bg-white rounded-xl shadow">

        <div className="p-6 border-b">

          <h2 className="text-xl font-semibold">
            Upload History
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                File Name
              </th>

              <th className="p-4 text-left">
                Upload Date
              </th>

              <th className="p-4 text-left">
                Products
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>
  {history.length === 0 ? (
    <tr>
      <td
        colSpan={4}
        className="text-center py-6 text-gray-500"
      >
        No upload history found
      </td>
    </tr>
  ) : (
    history.map((item) => (
      <tr
        key={item._id}
        className="border-t hover:bg-gray-50"
      >
        <td className="p-4">
          {item.fileName}
        </td>

        <td className="p-4">
          {new Date(item.createdAt).toLocaleDateString()}
        </td>

        <td className="p-4">
          {item.totalProducts}
          <div className="text-xs text-gray-500">
            Success: {item.successCount} | Failed: {item.failedCount}
          </div>
        </td>

        <td className="p-4">
          <span
            className={`px-3 py-1 rounded-full inline-flex items-center gap-2
              ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "Failed"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
          >
            <CheckCircle size={16} />
            {item.status}
          </span>
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>

      </div>

    </div>
  );
}