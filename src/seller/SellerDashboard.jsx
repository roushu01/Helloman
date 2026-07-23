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
import Banks from "./Banks";
import AddBanks from "./AddBanks";
import UserBanks from "./UserBank";
import AddUserBank from "./AddUserBank";
import VendorPayments from "./VendorPayments";
import VendorCommission from "./VendorCommission";
import AddVendorPayments from "./AddVendorPayment"
import AddVendorCommission from "./AddVendorCommission";
import ImageUpload from "./ImageUpload";
import AddVariant from "./AddVarient";
import EditProduct from "./EditProduct";

export default function SellerDashboard(user,onLogout) {
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
      case "image-upload":
        return <ImageUpload/>
      case "edit-product":

  if(!selectedProduct){
    return (
      <div className="p-5">
        Loading product...
      </div>
    );
  }

  return (
    <EditProduct
      selectedProduct={selectedProduct}
      setActivePage={setActivePage}
    />
  );
      case "bulk-upload":
        return <BulkUpload />;  
      case "product-reviews":
        return <ProductReviews />;
      case "banks":
        return <Banks setActivePage={setActivePage}/> ;
      case "add-bank":
        return <AddBanks setActivePage={setActivePage}/>
      case "vendor-payment":
        return <VendorPayments setActivePage={setActivePage}/>  
      case "add-vendor-payment":
        return <AddVendorPayments setActivePage={setActivePage}/>  
      case "vendor-commission":
        return <VendorCommission setActivePage={setActivePage}/>  
      case "add-vendor-commission":
        return <AddVendorCommission setActivePage={setActivePage}/>    
      
      case "user-bank":
        return <UserBanks setActivePage={setActivePage}/> ;
      case "add-user-bank":
        return <AddUserBank setActivePage={setActivePage}/>    
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
        return <ProductVariants setActivePage={setActivePage} />;  
      case "add-variant":
            return (
              <AddVariant
                setActivePage={setActivePage}
              />
            );   
      
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
        <Navbar 
          user={user}
          onLogout={onLogout}
        />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}