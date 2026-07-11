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

export default function SellerDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

      case "revenue":
        return <Revenue />;

      case "analytics":
        return <Analytics />;

      case "profile":
        return <Profile />;

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