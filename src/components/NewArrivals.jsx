import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Eye, Sparkles } from "lucide-react";

export default function NewArrivals({ products, onViewDetails, onAddToCart }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Filter products to show only new arrivals
  const safeProducts = Array.isArray(products) ? products : [];
  const newProducts = safeProducts.filter(p => p?.isNew).slice(0, 10);
  // Fallback to latest products if none are explicitly marked as isNew
  const displayProducts = newProducts.length > 0 ? newProducts : safeProducts.slice(0, 10);

  const checkScrollArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollArrows);
      // Run once initially
      checkScrollArrows();
      // Handle resize
      window.addEventListener("resize", checkScrollArrows);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollArrows);
      window.removeEventListener("resize", checkScrollArrows);
    };
  }, [displayProducts]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.scrollBehavior = "auto"; // Disable smooth scroll during drag
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
      const scrollAmount = 340; // Approx card width + gap
      scrollContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  if (displayProducts.length === 0) return null;

  return (
    <section className="w-full py-0 bg-gradient-to-r from-orange-50/30 via-white to-purple-50/20 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Just In</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              New Arrivals
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Swipe or use arrows to discover the newest handcrafted premium collections
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!showLeftArrow}
              className={`p-2.5 rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm transition-all duration-300 ${
                showLeftArrow 
                  ? "hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer active:scale-95" 
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Slide Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!showRightArrow}
              className={`p-2.5 rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm transition-all duration-300 ${
                showRightArrow 
                  ? "hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer active:scale-95" 
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Slide Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container Wrapper with gradient fade */}
        <div className="relative group/slider">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
              WebkitOverflowScrolling: "touch"
            }}
          >
            {displayProducts.map((product) => {
              const productId = product._id || product.id;
              const currentPrice = Number(product?.discountPrice || product?.price || 0);
              const hasDiscount = Boolean(
                product?.discountPrice &&
                product?.price &&
                Number(product.price) !== Number(product.discountPrice)
              );
              const originalPrice = hasDiscount ? Number(product.price) : null;

              return (
                <div
                  key={productId}
                  onClick={() => onViewDetails && onViewDetails(productId)}
                  className="w-[280px] sm:w-[300px] shrink-0 snap-start group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col cursor-pointer relative"
                >
                  {/* Product Image Area */}
                  <div className="relative w-full h-[220px] bg-gray-50 overflow-hidden shrink-0">
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10 shadow-md">
                      New
                    </span>

                    {/* Hover Quick View Button */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewDetails && onViewDetails(productId);
                        }}
                        className="p-3 bg-white text-slate-800 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
                        title="Quick View"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    <img
                      src={product.thumbnail?.url || product.images?.[0]?.url || (typeof product.images?.[0] === 'string' ? product.images[0] : "")}
                      alt={product.name || product.title || "Product"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable="false"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-1 gap-2">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest truncate">
                      {product.brand || product.vendor || "Brand"}
                    </span>
                    
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-orange-500 transition-colors line-clamp-1">
                      {product.name || product.title || "Product"}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating || 5) 
                                ? "fill-current text-yellow-400" 
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      {product.rating && (
                        <span className="text-xs font-bold text-slate-500 ml-1">
                          {Number(product.rating).toFixed(1)}
                        </span>
                      )}
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900">
                          ₹{(currentPrice ?? 0).toLocaleString("en-IN")}
                        </span>
                        {originalPrice !== null && (
                          <span className="text-[10px] text-slate-400 line-through">
                            ₹{(originalPrice ?? 0).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart && onAddToCart(product, e);
                        }}
                        className="bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white p-2.5 rounded-xl transition-all cursor-pointer transform active:scale-95 shadow-sm"
                        title="Add to Cart"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
