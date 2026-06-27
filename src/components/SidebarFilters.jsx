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
    <aside className="w-full lg:w-72 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6" id="filters-sidebar">
      {/* Title & Clear All */}
      <div className="flex justify-between items-center border-b border-gray-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white font-black text-lg">
          <Sliders className="w-5 h-5 text-orange-500" />
          <span>Filters</span>
        </div>
        <button
          onClick={onClearFilters}
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-500 cursor-pointer flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Categories Radio Group */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-wider">
          Categories
        </h3>
        <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white cursor-pointer select-none"
            >
              <input
                type="radio"
                name="category-filter"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-800"
              />
              <span className={selectedCategory === cat ? "font-bold text-orange-500 dark:text-orange-400" : ""}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="flex flex-col gap-3 border-t border-gray-100 dark:border-slate-800 pt-5">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-wider">
            Price Range
          </h3>
          <span className="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 rounded-full">
            Max: ₹{priceRange.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="px-1 flex flex-col gap-2">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
          />
          <div className="flex justify-between text-xs font-semibold text-slate-400 dark:text-slate-500">
            <span>₹0</span>
            <span>₹5,000</span>
            <span>₹10,000</span>
          </div>
        </div>
      </div>

      {/* Minimum Rating Radio Group */}
      <div className="flex flex-col gap-3 border-t border-gray-100 dark:border-slate-800 pt-5">
        <h3 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-wider">
          Minimum Rating
        </h3>
        <div className="flex flex-col gap-2.5">
          {[
            { value: 0, label: "All Ratings" },
            { value: 1, label: "1+ Stars" },
            { value: 2, label: "2+ Stars" },
            { value: 3, label: "3+ Stars" },
            { value: 4, label: "4+ Stars" }
          ].map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-orange-500 cursor-pointer select-none"
            >
              <input
                type="radio"
                name="rating-filter"
                checked={minRating === item.value}
                onChange={() => setMinRating(item.value)}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-800"
              />
              <span className={`flex items-center gap-1.5 ${minRating === item.value ? "font-bold text-orange-500 dark:text-orange-400" : ""}`}>
                {item.label}
                {item.value > 0 && (
                  <span className="flex items-center">
                    {Array.from({ length: item.value }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                    ))}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={onApplyFilters}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm tracking-wide mt-2"
      >
        Apply Filters
      </button>
    </aside>
  );
}
