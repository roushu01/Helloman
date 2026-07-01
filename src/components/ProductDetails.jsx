import React, { useState } from "react";
import { ArrowLeft, Star, ShoppingCart, ShieldCheck, RefreshCw, Truck } from "lucide-react";




export default function ProductDetails({ product, onBack, onAddToCart, onBuyNow }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-10" id={`product-detail-view-${product._id}`}>
      {/* Breadcrumb Back Button */}
      <button
        onClick={onBack}
        className="w-max flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-bold text-sm cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-orange-500" />
        <span>Back to Products</span>
      </button>

      {/* Main Split: Images Left, Metadata Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="details-top-split">
        {/* Images Columns */}
        <div className="flex flex-col gap-4">
          {/* Main Large Image */}
          <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-150 dark:border-slate-800 shadow-sm relative">
            <img
              src={product.images?.[activeImageIndex]?.url}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnails Row */}
          {product.images?.length > 1 && (
            <div className="flex gap-3" id="details-thumbnails-row">
              {product.images?.map((img,index)=>(
                  <button
                      key={index}
                      onClick={()=>setActiveImageIndex(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                          activeImageIndex===index
                          ?"border-orange-500"
                          :"border-gray-200"
                      }`}
                  >
                      <img
                          src={img.url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                      />
                  </button>
              ))}
            </div>
          )}
        </div>

        {/* Purchase Info Column */}
        <div className="flex flex-col gap-6">
          {/* Vendor */}
          <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            by {product.brand}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {product.name}
          </h1>

          {/* Star Rating & Review count */}
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-slate-800">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating || 0) ? "fill-current text-yellow-400" : "text-gray-200 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              {/* {product.rating.toFixed(1)} <span className="text-slate-400 dark:text-slate-500 font-normal">({product.reviewsCount} reviews)</span> */}
            </span>
          </div>

          {/* Price Tag */}
          <div className="flex flex-col gap-1.5">
             <span className="text-3xl font-bold text-red-500">
                ₹{product.discountPrice}
            </span>
            <span className="text-3xl line-through font-black text-slate-500 dark:text-white">
              ₹{product.price}
            </span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              In Stock ({product.stock} available)
            </span>
          </div>

          {/* Quantity selector and CTA Section */}
          <div className="flex flex-col gap-5 pt-4 border-t border-gray-100 dark:border-slate-800">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Quantity:</span>
              <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800 overflow-hidden">
                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="px-3.5 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="px-5 text-sm font-extrabold text-slate-800 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  disabled={quantity >= product.stock}
                  className="px-3.5 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5 text-sm tracking-wide"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => onBuyNow(product, quantity)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-sm tracking-wide"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Customer Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-5 border-t border-gray-100 dark:border-slate-800 text-center text-[11px] font-bold text-slate-500 dark:text-slate-400">
            <div className="flex flex-col items-center gap-1.5">
              <Truck className="w-5 h-5 text-orange-500" />
              <span>Free Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <RefreshCw className="w-5 h-5 text-orange-500" />
              <span>Easy 7-day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span>100% Authentic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Area matching screenshots */}
      <div className="flex flex-col gap-8 mt-4" id="details-bottom-rich-content">
        {/* Product Description Section */}
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
          <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">
            Product Description
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
            {product.description}
          </p>
        </div>

        {/* Product Details Specs Table */}
        {product.details && Object.keys(product.details).length > 0 && (
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <span>📋</span> Product Details:
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-800 text-slate-400 font-bold">
                    <th className="py-3 px-4 w-1/3">Feature</th>
                    <th className="py-3 px-4">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-slate-800/60">
                  {Object.entries(product.details).map(([key, value]) => (
                    <tr key={key} className="hover:bg-gray-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-extrabold text-slate-700 dark:text-slate-300">{key}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Key Features Bullet List */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <span>💎</span> Key Features:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
              {product.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-orange-500 font-bold shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Style Tip */}
        {product.styleTip && (
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <span>💃</span> Style Tip:
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {product.styleTip}
            </p>
          </div>
        )}

        {/* Package Includes */}
        {product.packageIncludes && (
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <span>📦</span> Package Includes:
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              {product.packageIncludes}
            </p>
          </div>
        )}

        {/* Ideal For */}
        {product.idealFor && (
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <span>🧵</span> Ideal For:
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {product.idealFor}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
