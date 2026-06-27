import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import SidebarFilters from "./components/SidebarFilters";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginModal";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SellerRegister from "./components/SellerRegister";
import { PRODUCTS } from "./data";
import SignupPage from "./components/SignupModel";

import { Grid, List, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

export default function App() {
  // Navigation & View State
  const [currentView, setView] = useState("home"); // "home", "products", "about", "contact", "seller"
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter State
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState(10000);
  const [minRating, setMinRating] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState({
    category: "All Categories",
    priceRange: 10000,
    minRating: 0
  });

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Sorting State
  const [sortBy, setSortBy] = useState("popularity");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Layout View Mode (Grid vs List)
  const [isGridView, setIsGridView] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Authentication State
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // System Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dynamic system-level notifications
  const [notification, setNotification] = useState(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Cart operations
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        showNotification(`Updated ${product.title.slice(0, 20)}... quantity in cart!`);
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      showNotification(`Added ${product.title.slice(0, 20)}... to cart!`);
      return [...prevItems, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.product.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prevItems) => {
      const target = prevItems.find((item) => item.product.id === id);
      if (target) {
        showNotification(`Removed ${target.product.title.slice(0, 20)}... from cart.`, "info");
      }
      return prevItems.filter((item) => item.product.id !== id);
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtering actions
  const handleApplyFilters = () => {
    setAppliedFilters({
      category: selectedCategory,
      priceRange,
      minRating
    });
    setCurrentPage(1);
    setView("products");
    showNotification("Filters applied successfully!");
  };

  const handleClearFilters = () => {
    setSelectedCategory("All Categories");
    setPriceRange(10000);
    setMinRating(0);
    setAppliedFilters({
      category: "All Categories",
      priceRange: 10000,
      minRating: 0
    });
    setCurrentPage(1);
    showNotification("All filters reset.");
  };

  const handleViewDetails = (id) => {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod) {
      setSelectedProduct(prod);
      setView("product-detail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter products dynamically
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      appliedFilters.category === "All Categories" || product.category === appliedFilters.category;
    const matchesPrice = product.price <= appliedFilters.priceRange;
    const matchesRating = product.rating >= appliedFilters.minRating;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.vendor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesRating && matchesSearch;
  });

  // Sort products dynamically
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // Default: Popularity / Reviews count
  });

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Authentication Success Callback
  const handleLoginSuccess = (user ) => {
    setLoggedInUser(user);
    showNotification(`Welcome back, ${user.name.split(" ")[0]}!`);
  };
  //hnadle signup
  const handleSignupSuccess = (user) => {
  setLoggedInUser(user);

  setIsSignupOpen(false);

  showNotification(
    `Welcome ${user.firstName}! Account created successfully.`,
    "success"
  );
};

  const handleLogout = () => {
    setLoggedInUser(null);
    showNotification("Logged out successfully.", "info");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Interactive Global Alerts */}
      {notification && (
        <div className="fixed top-24 right-6 z-55 max-w-sm animate-bounce" id="global-notification">
          <div className={`p-4 rounded-xl shadow-2xl border flex items-center gap-3 ${
            notification.type === "success" 
              ? "bg-green-50 dark:bg-green-950/90 border-green-200 dark:border-green-900 text-green-800 dark:text-green-300"
              : "bg-blue-50 dark:bg-slate-800/90 border-blue-200 dark:border-slate-700 text-blue-800 dark:text-blue-300"
          }`}>
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold leading-snug">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        currentView={currentView}
        setView={(v) => {
          setView(v);
          setSelectedProduct(null);
        }}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setAppliedFilters((prev) => ({ ...prev, category: cat }));
        }}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery.trim()}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onLoginClick={() => setView("login")}
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {currentView === "home" && (
          <div className="flex flex-col gap-10">
            {/* Image Banner Carousel */}
            <HeroCarousel
              onSlideClick={(cat) => {
                setSelectedCategory(cat);
                setAppliedFilters({
                  category: cat,
                  priceRange: 10000,
                  minRating: 0
                });
                setView("products");
                window.scrollTo({ top: 520, behavior: "smooth" });
              }}
            />

            {/* Catalog Split Layout */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left filter panel */}
              <div className="lg:col-span-3">
                <SidebarFilters
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  onApplyFilters={handleApplyFilters}
                  onClearFilters={handleClearFilters}
                />
              </div>

              {/* Right products pane */}
              <div className="lg:col-span-9 flex flex-col gap-6">
                {/* Section header controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-150 dark:border-slate-800 pb-5">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Products
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Showing {filteredProducts.length} premium items curated in Rajasthan
                    </p>
                  </div>

                  {/* Grid/List View & Sort Controls */}
                  <div className="flex items-center gap-3.5 self-end sm:self-auto">
                    {/* View selectors */}
                    <div className="flex items-center border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg p-1 shadow-xs">
                      <button
                        onClick={() => setIsGridView(true)}
                        className={`p-1.5 rounded-md cursor-pointer transition-all ${
                          isGridView
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-slate-400 hover:text-slate-600 dark:text-slate-500"
                        }`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsGridView(false)}
                        className={`p-1.5 rounded-md cursor-pointer transition-all ${
                          !isGridView
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-slate-400 hover:text-slate-600 dark:text-slate-500"
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Sort Selector Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg py-2 px-3.5 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 shadow-xs cursor-pointer hover:border-gray-300"
                      >
                        <span>
                          Sort by:{" "}
                          {sortBy === "popularity"
                            ? "Popularity"
                            : sortBy === "price-low"
                            ? "Price: Low to High"
                            : sortBy === "price-high"
                            ? "Price: High to Low"
                            : "Highest Rated"}
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      {showSortDropdown && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setShowSortDropdown(false)} />
                          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-700 rounded-xl shadow-xl z-20 py-2 text-xs">
                            {[
                              { id: "popularity", label: "Popularity" },
                              { id: "price-low", label: "Price: Low to High" },
                              { id: "price-high", label: "Price: High to Low" },
                              { id: "rating", label: "Highest Rated" }
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => {
                                  setSortBy(opt.id);
                                  setShowSortDropdown(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-slate-700 dark:hover:text-white text-slate-700 dark:text-slate-300"
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Main Product Display Area */}
                {sortedProducts.length === 0 ? (
                  <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-4 shadow-sm h-80">
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                      No matching products found.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Grid view */}
                    {isGridView ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {paginatedProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={handleViewDetails}
                            onAddToCart={(prod, e) => {
                              e.stopPropagation();
                              handleAddToCart(prod, 1);
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      /* List view alternate layout */
                      <div className="flex flex-col gap-4">
                        {paginatedProducts.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => handleViewDetails(product.id)}
                            className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-4 flex gap-5 items-center cursor-pointer hover:shadow-lg hover:border-orange-200 transition-all shadow-sm"
                          >
                            <img
                              src={product.images[0]}
                              alt={product.title}
                              className="w-24 h-24 rounded-xl object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 flex flex-col gap-1 pr-4">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.vendor}</span>
                              <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 line-clamp-1">{product.title}</h3>
                              <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2 leading-relaxed mt-0.5">{product.description}</p>
                              <div className="flex items-center gap-3 mt-1.5">
                                <span className="text-base font-black text-slate-950 dark:text-white">₹{product.price}</span>
                                <span className="text-xs text-green-600 font-bold">{product.stock} in stock</span>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product, 1);
                              }}
                              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl"
                            >
                              Add to Cart
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Pagination buttons */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-8" id="pagination-controls">
                        <button
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          className="bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-250 dark:border-slate-800 py-2 px-4 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          Previous
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`py-2 px-4 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                              currentPage === i + 1
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border-gray-250 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          className="bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-250 dark:border-slate-800 py-2 px-4 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Recent Products Row matching screenshots */}
            <div className="border-t border-gray-100 dark:border-slate-900 pt-10 pb-4 max-w-7xl mx-auto px-4 md:px-8 w-full" id="recent-products-shelf">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <h2 className="text-xl font-black text-slate-950 dark:text-white tracking-tight">Recent Products</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Brand new collections fresh from Jaipur workshops</p>
                </div>
                <button
                  onClick={() => {
                    setAppliedFilters({ category: "All Categories", priceRange: 10000, minRating: 0 });
                    setView("products");
                  }}
                  className="text-xs font-bold text-blue-600 hover:text-orange-500 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {PRODUCTS.filter((p) => p.isNew)
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={handleViewDetails}
                      onAddToCart={(prod, e) => {
                        e.stopPropagation();
                        handleAddToCart(prod, 1);
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Catalog page view */}
        {currentView === "products" && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left filter panel */}
            <div className="lg:col-span-3">
              <SidebarFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minRating={minRating}
                setMinRating={setMinRating}
                onApplyFilters={handleApplyFilters}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Right products grid */}
            <div className="lg:col-span-9 flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-150 dark:border-slate-800 pb-5">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    HelloMem Catalog
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Showing {filteredProducts.length} premium products in {appliedFilters.category}
                  </p>
                </div>

                {/* Grid vs List & Sort */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg p-1 shadow-xs">
                    <button
                      onClick={() => setIsGridView(true)}
                      className={`p-1.5 rounded-md cursor-pointer transition-all ${
                        isGridView
                          ? "bg-blue-600 text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-600 dark:text-slate-500"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsGridView(false)}
                      className={`p-1.5 rounded-md cursor-pointer transition-all ${
                        !isGridView
                          ? "bg-blue-600 text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowSortDropdown(!showSortDropdown)}
                      className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg py-2 px-3.5 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 shadow-xs cursor-pointer hover:border-gray-300"
                    >
                      <span>
                        Sort:{" "}
                        {sortBy === "popularity"
                          ? "Popularity"
                          : sortBy === "price-low"
                          ? "Price: Low to High"
                          : sortBy === "price-high"
                          ? "Price: High to Low"
                          : "Highest Rated"}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>

                    {showSortDropdown && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setShowSortDropdown(false)} />
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-700 rounded-xl shadow-xl z-20 py-2 text-xs">
                          {[
                            { id: "popularity", label: "Popularity" },
                            { id: "price-low", label: "Price: Low to High" },
                            { id: "price-high", label: "Price: High to Low" },
                            { id: "rating", label: "Highest Rated" }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setSortBy(opt.id);
                                setShowSortDropdown(false);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-slate-700 dark:hover:text-white text-slate-700 dark:text-slate-300 animate-fade-in"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Products Area */}
              {sortedProducts.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-4 shadow-sm h-80">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    No products matched your specified parameters.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <>
                  {isGridView ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {paginatedProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onViewDetails={handleViewDetails}
                          onAddToCart={(prod, e) => {
                            e.stopPropagation();
                            handleAddToCart(prod, 1);
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {paginatedProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleViewDetails(product.id)}
                          className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-4 flex gap-5 items-center cursor-pointer hover:shadow-lg hover:border-orange-200 transition-all shadow-sm"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-24 h-24 rounded-xl object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 flex flex-col gap-1 pr-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.vendor}</span>
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 line-clamp-1">{product.title}</h3>
                            <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2 leading-relaxed mt-0.5">{product.description}</p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-base font-black text-slate-950 dark:text-white">₹{product.price}</span>
                              <span className="text-xs text-green-600 font-bold">{product.stock} in stock</span>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(product, 1);
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl"
                          >
                            Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        className="bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-250 dark:border-slate-800 py-2 px-4 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`py-2 px-4 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                            currentPage === i + 1
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border-gray-250 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        className="bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-250 dark:border-slate-800 py-2 px-4 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Product Details page */}
        {currentView === "product-detail" && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onBack={() => {
              setView("home");
              setSelectedProduct(null);
            }}
            onAddToCart={(prod, quantity) => handleAddToCart(prod, quantity)}
            onBuyNow={(prod, quantity) => {
              handleAddToCart(prod, quantity);
              setIsCartOpen(true);
            }}
          />
        )}

        {/* About Us View */}
        {currentView === "about" && <AboutUs />}

        {/* Contact Us View */}
        {currentView === "contact" && <ContactUs />}

        {/* Seller Registration Portal View */}
        {currentView === "seller" && <SellerRegister />}
      </main>

      {/* Cart Drawer Overlay */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

     {/* Login Page */}
          {/* Login Page */}
{currentView === "login" && (
  <LoginPage
    onLoginSuccess={(user) => {
      handleLoginSuccess(user);
      setView("home");
    }}
    onSwitchToSignup={() => {
      setView("signup");
    }}
  />
)}

              {/* Signup Page */}
              {currentView === "signup" && (
                <SignupPage
                  onSignupSuccess={(user) => {
                    setLoggedInUser(user);
                    showNotification("Account created successfully!");
                    setView("home");
                  }}
                  onSwitchToLogin={() => {
                    setView("login");
                  }}
                />
              )}
                    {isSignupOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
              <div className="min-h-screen flex items-center justify-center p-4">

                <div className="relative">

                  <button
                    onClick={() => setIsSignupOpen(false)}
                    className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  <SignupPage
                    onSignupSuccess={handleSignupSuccess}
                    onSwitchToLogin={() => {
                      setIsSignupOpen(false);
                      setIsLoginOpen(true);
                    }}
                  />

                </div>

              </div>
            </div>
            )}
     
      {/* Footer */}
      <Footer
        setView={(v) => {
          setView(v);
          setSelectedProduct(null);
        }}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setAppliedFilters((prev) => ({ ...prev, category: cat }));
        }}
      />
    </div>
  );
}
