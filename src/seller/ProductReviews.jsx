// src/seller/ProductReviews.jsx

import React, { useState,useEffect } from "react";
import { getSellerReviews } from "../api/reviewApi";
import {
  Search,
  RotateCcw,
  Eye,
  Trash2,
  Star,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ProductReviews() {
  const [filters, setFilters] = useState({
    productId: "",
    productName: "",
    customer: "",
    rating: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  fetchReviews();
}, []);

const fetchReviews = async () => {
  try {
    setLoading(true);

    const data = await getSellerReviews();

    // Depending on your backend response
    setReviews(data.data || data.reviews || []);

  } catch (err) {
    console.error(err.response?.data || err);
  } finally {
    setLoading(false);
  }
};
  const filteredReviews = reviews.filter((review) => {
    return (
      review.productId
        .toLowerCase()
        .includes(filters.productId.toLowerCase()) &&
      review.product
        .toLowerCase()
        .includes(filters.productName.toLowerCase()) &&
      review.customer
        .toLowerCase()
        .includes(filters.customer.toLowerCase()) &&
      (filters.rating === "" ||
        review.rating === Number(filters.rating)) &&
      (filters.status === "" ||
        review.status === filters.status)
    );
  });

  const resetFilters = () => {
    setFilters({
      productId: "",
      productName: "",
      customer: "",
      rating: "",
      status: "",
      fromDate: "",
      toDate: "",
    });
  };

  const totalReviews = reviews.length;
  const approvedReviews = reviews.filter(
    (r) => r.status === "Approved"
  ).length;
  const pendingReviews = reviews.filter(
    (r) => r.status === "Pending"
  ).length;
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) /
    reviews.length
  ).toFixed(1);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Product Reviews
        </h1>

        <p className="text-gray-500">
          Manage customer product reviews
        </p>
      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Total Reviews
            </p>

            <h2 className="text-3xl font-bold">
              {totalReviews}
            </h2>
          </div>

          <MessageSquare
            className="text-orange-500"
            size={38}
          />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Average Rating
            </p>

            <h2 className="text-3xl font-bold">
              {avgRating}
            </h2>
          </div>

          <Star
            className="text-yellow-500"
            size={38}
          />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Approved
            </p>

            <h2 className="text-3xl font-bold">
              {approvedReviews}
            </h2>
          </div>

          <CheckCircle
            className="text-green-500"
            size={38}
          />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Pending
            </p>

            <h2 className="text-3xl font-bold">
              {pendingReviews}
            </h2>
          </div>

          <Clock
            className="text-blue-500"
            size={38}
          />
        </div>

      </div>

      {/* Search Form */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-sm font-medium">
              Product ID
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.productId}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  productId: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Product Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.productName}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  productName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Customer Name
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.customer}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  customer: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Rating
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.rating}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Status
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-1"
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              From Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              To Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="flex items-end justify-end gap-3">

            <button
              onClick={resetFilters}
              className="border rounded-lg px-5 py-3 flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <Search size={18} />
              Search
            </button>

          </div>

        </div>

      </div>

      {/* Table starts here... */}
            {/* Reviews Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-center">
                Rating
              </th>

              <th className="p-4 text-left">
                Review
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-center">
                Status
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredReviews.length > 0 ? (

              filteredReviews.map((review) => (

                <tr
                  key={review.id}
                  className="border-t hover:bg-gray-50"
                >

                  {/* Product */}

                  <td className="p-4">

                    <div className="font-medium">
                      {review.product}
                    </div>

                    <div className="text-xs text-gray-500">
                      {review.productId}
                    </div>

                  </td>

                  {/* Customer */}

                  <td className="p-4">
                    {review.customer}
                  </td>

                  {/* Rating */}

                  <td className="p-4">

                    <div className="flex justify-center gap-1">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <Star
                          key={star}
                          size={18}
                          className={
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />

                      ))}

                    </div>

                  </td>

                  {/* Review */}

                  <td className="p-4 max-w-sm">

                    <p className="truncate">
                      {review.review}
                    </p>

                  </td>

                  {/* Date */}

                  <td className="p-4">
                    {review.date}
                  </td>

                  {/* Status */}

                  <td className="p-4 text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium

                      ${
                        review.status === "Approved"
                          ? "bg-green-100 text-green-700"

                          : review.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"

                          : "bg-red-100 text-red-700"
                      }

                      `}
                    >
                      {review.status}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      <button
                        className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  No reviews found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}