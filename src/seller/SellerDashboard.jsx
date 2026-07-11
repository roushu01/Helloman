// src/seller/SellerDashboard.jsx

import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import DashboardHome from "./DashboardHome";
import Products from "./Products";
import Orders from "./Order";
import Revenue from "./Revenue";
import Analytics from "./Analytics";
import Profile from "./Profile";
import AddProduct from "./AddProduct";
import ProductReviews from "./ProductReviews";
import BulkUpload from "./BulkUpload";
import ProductVariants from "./ProductVariants";
import Users from "./Users";
import AddUser from "./AddUser";
import Countries from "./Countries";
import AddCountries from "./AddCountries";
import States from "./States";
import AddStates from "./AddStates";
import Cities from "./Cities";
import AddCities from "./AddCities";

export default function SellerDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardHome />;

      case "products":
        return (
          <Products
            setActivePage={setActivePage}
            setSelectedProduct={setSelectedProduct}
          />
        );

      case "add-product":
        return (
          <AddProduct
            setActivePage={setActivePage}
          />
        );

      case "edit-product":
        return (
          <EditProduct
            product={selectedProduct}
            setActivePage={setActivePage}
          />
        );
      case "bulk-upload":
        return <BulkUpload />;  
      case "product-reviews":
        return <ProductReviews />;
      case "orders":
        return <Orders />;
      case "add-user":
        return (
          <AddUser
            setActivePage={setActivePage}
          />
        );
      case "revenue":
        return <Revenue />;
      case "users":
        return (
          <Users
            setActivePage={setActivePage}
            setSelectedUser={setSelectedUser}
          />
        );
      case "countries":
        return (
          <Countries
            setActivePage={setActivePage}
            setSelectedCountry={setSelectedCountry}
          />
        );
      case "add-country":
        return (    
      <AddCountries
        setActivePage={setActivePage}
      />
    );  
      case "states":
        return (
          <States
            setActivePage={setActivePage}
          />
        );
      case "add-state":
        return (
          <AddStates
            setActivePage={setActivePage}
          />
        );
      case "analytics":
        return <Analytics />;
      case "cities":
        return (
          <Cities
            setActivePage={setActivePage}
          />
        );
      case "add-city":
        return (
          <AddCities
            setActivePage={setActivePage}
          />
        );
      case "profile":
        return <Profile />;
      case "product-variants":
        return <ProductVariants />;  

      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}