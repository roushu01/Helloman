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
  isMode,
  toggleMode,
  onLoginClick,
  loggedInUser,
  onLogout,
}) {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
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

  const navLinkClass = (view) =>
    `hover:text-orange-500 cursor-pointer transition-colors ${
      currentView === view ? "text-orange-500" : ""
    }`;

  const goHome = () => {
    setView("home");
    setSelectedCategory("All Categories");
    setSearchQuery("");
  };

  return (
    <header className="w-full z-50 shadow-sm sticky top-0" id="hellomem-header">
      {/* Top Bar Banner */}
      <div className="bg-[#0b1528] text-gray-300 text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="text-[11px] font-medium truncate hidden sm:block">
            Jaipur Leading Online Shopping Destination
          </div>
          <div className="flex gap-4 md:gap-5 items-center shrink-0 ml-auto">
            <button
              onClick={() => setView("about")}
              className="hover:text-white transition-colors cursor-pointer hidden sm:inline"
            >
              About Us
            </button>
            <button
              onClick={() => setView("seller")}
              className="hover:text-white transition-colors cursor-pointer font-semibold"
            >
              <span className="sm:hidden">Seller Login/Register</span>
              <span className="hidden sm:inline">Register/Login as Seller</span>
            </button>
            <a
              href="#download-app"
              onClick={(e) => {
                e.preventDefault();
                alert("Mobile App downloading started! (Simulated)");
              }}
              className="hover:text-white transition-colors hidden sm:inline"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div
        className="bg-white border-b border-gray-100 transition-colors py-3.5"
        id="navbar-main"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-8">
          {/* Logo — always visible, no longer trapped inside the lg-only nav */}
          <div
            onClick={goHome}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
            id="brand-logo"
          >
            <div className="bg-orange-500 text-white p-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-250">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-orange-500">Hello</span>
              <span className="text-xl font-bold tracking-tight text-slate-800 ml-0.5">
                Mem
              </span>
            </div>
          </div>

          {/* Desktop Nav Links (unchanged content/classes — lg+ only) */}
          <nav className="hidden lg:flex items-center gap-5 text-md font-medium text-slate-600 flex-1 justify-center">
            <button onClick={goHome} className={navLinkClass("home")}>
              Home
            </button>
            <button onClick={() => setView("products")} className={navLinkClass("products")}>
              Products
            </button>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                className="hover:text-orange-500 cursor-pointer transition-colors flex items-center gap-1 py-1"
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showCategoriesDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCategoriesDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowCategoriesDropdown(false)} />
                  <div className="absolute left-0 mt-2 w-56 max-h-80 overflow-y-auto bg-white rounded-xl shadow-xl z-20 py-2 scrollbar-thin">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setView("about")} className={navLinkClass("about")}>
              About
            </button>
            <button onClick={() => setView("contact")} className={navLinkClass("contact")}>
              Contact
            </button>

            <div className="relative flex-1 max-w-xs lg:max-w-sm" id="search-input-container">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
              />
            </div>
          </nav>

          {/* Right-side controls (desktop, lg+) */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleMode}
              className="p-2 rounded-full hover:bg-orange-100 text-slate-600 transition-colors"
              aria-label="Toggle mode"
            >
              {isMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={openCart}
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-orange-100 text-slate-700"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {loggedInUser ? (
              <button onClick={() => setView("profile")} className="p-2 rounded-full hover:bg-orange-100">
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

          {/* Mobile / tablet controls — visible for the ENTIRE range below `lg`,
              so there's no dead zone between md and lg anymore */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={toggleMode}
              className="p-2 rounded-full hover:bg-orange-100 text-slate-600"
              aria-label="Toggle mode"
            >
              {isMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={openCart} className="relative p-2">
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search box — full width, shown for everything below `lg` (desktop search lives inside the nav above) */}
        <div className="lg:hidden px-4 md:px-8 mt-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-5 gap-4 text-slate-700 font-medium">
            <button
              className="text-left"
              onClick={() => {
                goHome();
                setMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              className="text-left"
              onClick={() => {
                setView("products");
                setMobileMenuOpen(false);
              }}
            >
              Products
            </button>

            <div className="flex flex-col gap-2">
              <span className="text-left text-slate-500 text-sm uppercase tracking-wide">
                Categories
              </span>
              <div className="flex flex-col gap-2 pl-2 max-h-48 overflow-y-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className="text-left text-sm"
                    onClick={() => {
                      handleCategoryClick(cat);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="text-left"
              onClick={() => {
                setView("about");
                setMobileMenuOpen(false);
              }}
            >
              About
            </button>
            <button
              className="text-left"
              onClick={() => {
                setView("contact");
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
            <button
              className="text-left"
              onClick={() => {
                setView("seller");
                setMobileMenuOpen(false);
              }}
            >
              Register/Login as Seller
            </button>

            <div className="border-t pt-4">
              {loggedInUser ? (
                <button
                  className="text-left flex items-center gap-2"
                  onClick={() => {
                    setView("profile");
                    setMobileMenuOpen(false);
                  }}
                >
                  <User className="w-5 h-5 text-orange-600" /> My Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg w-full"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
  </header>
  );
}