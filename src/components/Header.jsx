import React, { useState } from "react";
import { Search, Moon, Sun, ShoppingCart, Menu, X, User, ChevronDown, ShoppingBag } from "lucide-react";
import { CATEGORIES } from "../data";



export default function Header({
  currentView,
  setView,
  setSelectedCategory,
  cartCount,
  openCart,
  searchQuery,
  setSearchQuery,
  isDarkMode,
  toggleDarkMode,
  onLoginClick,
  loggedInUser,
  onLogout,

}) {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setView("products");
    setShowCategoriesDropdown(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (currentView !== "products" && currentView !== "home") {
      setView("products");
    }
  };

  return (
    <header className="w-full z-50 shadow-sm sticky top-0" id="hellomem-header">
      {/* Top Bar Banner */}
      <div className="bg-[#0b1528] text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center" id="top-bar-announcement">
        <div className="font-medium tracking-wide">
          Jaipur Leading Online Shopping Destination
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <button
            onClick={() => setView("about")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => setView("seller")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Register/Login as Seller
          </button>
          <a
            href="#download-app"
            onClick={(e) => { e.preventDefault(); alert("Mobile App downloading started! (Simulated)"); }}
            className="hover:text-white transition-colors hidden sm:inline"
          >
            Download App
          </a>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors py-3.5 px-2 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between" id="navbar-main">
        {/* Logo and Quick Links */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          {/* Logo */}
          <div
            onClick={() => { setView("home"); setSelectedCategory("All Categories"); setSearchQuery(""); }}
            className="flex items-center gap-2 cursor-pointer group"
            id="brand-logo"
          >
            <div className="bg-orange-500 text-white p-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-250">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-orange-500">Hello</span>
              <span className="text-2xl font-black tracking-tight text-slate-800 dark:text-white ml-0.5">Mem</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300" id="navigation-desktop">
            <button
              onClick={() => { setView("home"); setSelectedCategory("All Categories"); }}
              className={`hover:text-orange-500 cursor-pointer transition-colors ${currentView === "home" ? "text-orange-500" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => { setView("products"); }}
              className={`hover:text-orange-500 cursor-pointer transition-colors ${currentView === "products" ? "text-orange-500" : ""}`}
            >
              Products
            </button>

            {/* Categories Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                className="hover:text-orange-500 cursor-pointer transition-colors flex items-center gap-1 py-1"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCategoriesDropdown ? "rotate-180" : ""}`} />
              </button>

              {showCategoriesDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowCategoriesDropdown(false)} />
                  <div className="absolute left-0 mt-2 w-56 max-h-80 overflow-y-auto bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-700 rounded-xl shadow-xl z-20 py-2 scrollbar-thin">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-slate-700 dark:hover:text-white text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setView("about")}
              className={`hover:text-orange-500 cursor-pointer transition-colors ${currentView === "about" ? "text-orange-500" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => setView("contact")}
              className={`hover:text-orange-500 cursor-pointer transition-colors ${currentView === "contact" ? "text-orange-500" : ""}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Cart Trigger on right for easy access */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            
            <button
              onClick={openCart}
              className="lg:hidden relative"
            >
              <ShoppingCart className="w-5 h-5" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Search, DarkMode, Cart & Auth Controls */}
        <div className="flex items-center gap-4 w-full md:w-auto" id="nav-search-controls">
          {/* Search Box */}
          <div className="relative flex-1 md:w-64 lg:w-80" id="search-input-container">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
            />
          </div>

          {/* Desktop Control Panel */}
          

            {/* Shopping Cart */}
            <button
              onClick={openCart}
              className="relative text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login button / User dropdown */}
            {loggedInUser ? (
                <button
                  onClick={() => setView("profile")}
                  className="p-2 rounded-full hover:bg-orange-100 transition-colors"
                  title="My Profile"
                >
                  <User className="w-6 h-6 text-orange-600" />
                </button>
              ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg"
              >
                Login
              </button>
            )}

          </div>
        </div>
   

      {/* Mobile Sticky Quick links bar */}
      {
        mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">

            <div className="flex flex-col p-5 gap-4">

              <button onClick={() => {
                setView("home")
                setMobileMenuOpen(false)
              }}>Home</button>

              <button onClick={() => {
                setView("products")
                setMobileMenuOpen(false)
              }}>Products</button>

              <button onClick={() => {
                setView("about")
                setMobileMenuOpen(false)
              }}>About</button>

              <button onClick={() => {
                setView("contact")
                setMobileMenuOpen(false)
              }}>Contact</button>

              <button onClick={() => {
                setView("seller")
                setMobileMenuOpen(false)
              }}>Seller Hub</button>
            </div>
          </div>
        )
      }
    </header>
  );
}
