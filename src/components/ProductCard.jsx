import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";


export default function ProductCard({ product, onViewDetails, onAddToCart }) {
  if (!product) return null;

  const productId = product._id || product.id;

  const brandName = product.brand || product.vendor || "Brand";
  const productName = product.name || product.title || "Product";
  const price = Number(product.discountPrice || product.price || 0);
  const originalPrice = product.discountPrice ? Number(product.price) : null;
  const rating = Number(product.rating || 0);
  const reviewsCount = product.reviewsCount || 0;

  return (
    <div
      onClick={() => onViewDetails(productId)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full cursor-pointer relative"
      id={`product-card-${productId}`}
    >
      {/* Product Image Area */}
      <div className="relative w-full h-55 aspect-square bg-gray-50 overflow-hidden shrink-0">
        {/* "New" Badge */}
        {product.isNew && (
          <span className="absolute top-3.5 left-3.5 bg-green-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10 shadow-sm">
            New
          </span>
        )}

        {/* Hover quick action overlays */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(productId);
            }}
            className="p-2.5 bg-white text-slate-800 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        <img
          src={product.images?.[0]?.url}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Product Text Details */}
      <div className="p-4.5 flex flex-col flex-1 gap-2.5">
        {/* Vendor tag */}
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest truncate">
          {brandName}
        </span>

        {/* Title */}
        <h4 className="text-sm font-bold text-slate-800 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
          {productName}
        </h4>

        {/* Rating Row */}
        <div className="flex items-center gap-1.5" id={`product-rating-${productId}`}>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating) ? "fill-current text-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[12px] font-bold text-slate-500">
            {rating > 0 && rating.toFixed(1)}
            {reviewsCount > 0 && (
              <span className="text-gray-400 font-normal ml-1">({reviewsCount})</span>
            )}
          </span>
        </div>

        {/* Price & Stock Row */}
        <div className="mt-auto pt-2.5 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-900">
                ₹{(price ?? 0).toLocaleString("en-IN")}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{(originalPrice ?? 0).toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[11px] font-bold text-green-600 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {product.stock ?? 0} in stock
            </span>
          </div>

          {/* Quick Add To Cart Icon-Button */}
          <button
            onClick={(e) => onAddToCart(product, e)}
            className="bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white p-2.5 rounded-xl transition-all cursor-pointer transform active:scale-95 shadow-sm hover:shadow-md"
            title="Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}