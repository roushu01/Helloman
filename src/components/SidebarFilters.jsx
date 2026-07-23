import React from "react";
import { Sliders, RefreshCw, Star } from "lucide-react";
import { CATEGORIES } from "../data";


export default function SidebarFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  onApplyFilters,
  onClearFilters
}) {
  return (
    <aside className="w-full lg:w-80 bg-white :bg-slate-900  rounded-2xl p-6 shadow-sm flex flex-col gap-6  " id="filters-sidebar">
      {/* Title & Clear All */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-800 :text-white font-semibold text-1.5xl">
        
          <span>Filters</span>
        </div>
        <button
          onClick={onClearFilters}
          className="text-sm font-semibold text-blue-600 :text-blue-400 hover:text-blue-500 cursor-pointer flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Categories Radio Group */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-900 :text-white font-semibold text-sm  tracking-wider">
          Categories
        </h3>
        <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 text-sm text-slate-600 :text-slate-300 "
            >
              <input
                type="radio"
                name="category-filter"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400 :border-slate-700 :bg-slate-800"
              />
              <span className={selectedCategory === cat ? "font-bold text-blue-500 :text-blue-400" : ""}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="flex flex-col gap-3  ">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-900 :text-white font-semibold text-md  ">
            Price Range
          </h3>
          <span className="text-xs font-bold text-blue-500 bg-blue-50 :bg-blue-950/40 px-2.5 py-1 rounded-full">
            Max: ₹{priceRange.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="px-1 flex flex-col gap-2">
          <input
            type="range"
            min="100"
            max="1000000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 :bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
          />
          <div className="flex justify-between text-xs font-semibold text-slate-400 :text-slate-500">
            <span>₹100</span>
            <span>₹5,000</span>
            <span>₹10,00000</span>
          </div>
        </div>
      </div>

      {/* Minimum Rating Radio Group */}
      <div className="flex flex-col gap-3 ">
        <h3 className="text-slate-900 :text-white font-semibold text-sm  ">
          Minimum Rating
        </h3>
        <div className="flex flex-col gap-1.5">
          {[
            { value: 0, label: "All Ratings" },
            { value: 1, label: "1+ Stars" },
            { value: 2, label: "2+ Stars" },
            { value: 3, label: "3+ Stars" },
            { value: 4, label: "4+ Stars" }
          ].map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-1.5 text-sm text-slate-600 :text-slate-300  cursor-pointer select-none"
            >
              <input
                type="radio"
                name="rating-filter"
                checked={minRating === item.value}
                onChange={() => setMinRating(item.value)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400 :border-slate-700 :bg-slate-800"
              />
              <span className={`flex items-center  ${minRating === item.value ? "font-bold text-blue-500 :text-blue-400" : ""}`}>
                {item.label}
                {/* {item.value } */}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={onApplyFilters}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm tracking-wide mt-2"
      >
        Apply Filters
      </button>
    </aside>
  );
}
