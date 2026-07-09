import React, { useState } from "react";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { createOrder } from "../api/OrderApi";

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState("");
    const [buyNowProduct, setBuyNowProduct] = useState(null);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
      const handleIncrement = () => {
        if (quantity < product.stock) {
          setQuantity((q) => q + 1);
        }
      };
  const [shippingAddress, setShippingAddress] = useState({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
  });

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

const handleCheckoutSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      checkoutType: "cart",

      shippingAddress: {
        fullName: shippingAddress.fullName,
        phone: shippingAddress.phone,
        addressLine1: shippingAddress.address,
        addressLine2: "",
        city: shippingAddress.city,
        state: shippingAddress.state,
        postalCode: shippingAddress.pincode,
        country: shippingAddress.country || "India",
      },

      paymentMethod: "COD",

      notes,
    };

    const res = await createOrder(payload);

    console.log(res);

    alert("Order placed successfully");

    onClearCart();

    setCheckoutStep("success");
  } catch (err) {
    console.log(err.response?.data || err);
    alert("Order failed");
  }
};

  return (
    <div className="fixed inset-0 z-55 overflow-hidden font-sans" id="cart-drawer-overlay">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-gray-100 dark:border-slate-800 shadow-2xl flex flex-col transition-colors h-full">
          {/* Header */}
          <div className="px-5 py-4.5 border-b border-gray-150 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-orange-500" />
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">
                Your Shopping Cart
              </h2>
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold ml-1">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                setCheckoutStep("cart");
              }}
              className="text-slate-400 hover:text-orange-500 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center h-72 gap-4">
                    <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-slate-800/60 flex items-center justify-center text-orange-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white">Your cart is empty</h3>
                      <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
                        Looks like you haven't added any premium products yet.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    {/* Cart Items List */}
                    {cartItems.map((item) => (
                      <div
                        key={item.product._id}
                        className="flex gap-4 border-b border-gray-50 dark:border-slate-800/40 pb-4 last:border-0"
                      >
                        {/* Thumbnail */}
                        <div className="w-18 h-18 rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Text details */}
                        <div className="flex-1 flex flex-col gap-1 justify-between mini-details">
                          <h4 className="text-xs font-bold text-slate-800 dark:text-gray-100 line-clamp-2">
                            {item.product.name}
                          </h4>
                          <span className="text-xs text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                            {item.product.brand}
                          </span>

                          <div className="flex items-center justify-between mt-1">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-md bg-gray-50 dark:bg-slate-800 text-xs font-bold overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.product._id, item.quantity - 1)}
                                className="px-2 py-0.5 hover:bg-gray-150 dark:hover:bg-slate-700"
                              >
                                -
                              </button>
                              <span className="px-2.5 text-slate-800 dark:text-white">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}
                                className="px-2 py-0.5 hover:bg-gray-150 dark:hover:bg-slate-700"
                              >
                                +
                              </button>
                            </div>

                            {/* Total price & delete */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-black text-slate-950 dark:text-white">
                                ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                              </span>
                              <button
                                onClick={() => onRemoveItem(item.product._id)}
                                className="text-slate-400 hover:text-red-500 p-1 rounded-full transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Shipping form trigger button */}
                    <div className="mt-4 p-4.5 bg-gray-50 dark:bg-slate-800/40 border border-gray-150 dark:border-slate-800 rounded-xl flex flex-col gap-4">
                      <div className="flex justify-between items-center text-sm font-bold text-slate-800 dark:text-white">
                        <span>Subtotal:</span>
                        <span className="text-base font-black text-orange-500">
                          ₹{total.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        Shipping charges and GST are calculated at checkout. Enjoy free shipping in Jaipur.
                      </p>

                      <button
                        onClick={() => setCheckoutStep("submitting")} // Jump directly or show mock form
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <span>Proceed to Secure Checkout</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {checkoutStep === "submitting" && (
             <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-5">
             
             
                                     <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider border-b border-gray-100 dark:border-slate-800 pb-2">
                                       Shipping & Payment
                                     </h3>
                     
                                     <div className="flex flex-col gap-3.5">
                                       <div className="flex flex-col gap-1">
                                         <label className="text-[11px] font-bold text-slate-400 uppercase">Full Name</label>
                                         <input
                                           type="text"
                                           required
                                           value={shippingAddress.fullName}
                                           onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })}
                                           placeholder="e.g. Rahul Sharma"
                                           className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                                         />
                                       </div>
                     
                                       <div className="flex flex-col gap-1">
                                         <label className="text-[11px] font-bold text-slate-400 uppercase">Phone Number</label>
                                         <input
                                           type="tel"
                                           required
                                           pattern="[0-9]{10}"
                                           value={shippingAddress.phone}
                                           onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                                           placeholder="10-digit mobile number"
                                           className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                                         />
                                       </div>
                     
                                       <div className="grid grid-cols-2 gap-4">
                                         <div className="flex flex-col gap-1">
                                           <label className="text-[11px] font-bold text-slate-400 uppercase">Pincode</label>
                                           <input
                                             type="text"
                                             required
                                             pattern="[0-9]{6}"
                                             value={shippingAddress.pincode}
                                             onChange={(e) => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                                             placeholder="302001"
                                             className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                                           />
                                         </div>
                                         <div className="flex flex-col gap-1">
                                           <label className="text-[11px] font-bold text-slate-400 uppercase">City</label>
                                           <input
                                           type="text"
                                           value={shippingAddress.city}
                                           onChange={(e) =>
                                             setShippingAddress({
                                               ...shippingAddress,
                                               city: e.target.value,
                                             })
                                           }
                                           className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg"
                                         />
                                         </div>
                                       </div>
                                       <div className="flex flex-col gap-1">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase">
                                       State
                                     </label>
             
                                     <input
                                       type="text"
                                       required
                                       value={shippingAddress.state}
                                       onChange={(e) =>
                                         setShippingAddress({
                                           ...shippingAddress,
                                           state: e.target.value,
                                         })
                                       }
                                       placeholder="Rajasthan"
                                       className="text-xs px-3.5 py-2.5 border border-gray-200 rounded-lg"
                                     />
                                   </div>
                                   <div className="flex flex-col gap-1">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase">
                                       Country
                                     </label>
             
                                     <input
                                       type="text"
                                       value={shippingAddress.country}
                                       onChange={(e) =>
                                         setShippingAddress({
                                           ...shippingAddress,
                                           country: e.target.value,
                                         })
                                       }
                                       className="text-xs px-3.5 py-2.5 border border-gray-200 rounded-lg"
                                     />
                                   </div>
                     
                                       <div className="flex flex-col gap-1">
                                         <label className="text-[11px] font-bold text-slate-400 uppercase">Address Line</label>
                                         <textarea
                                           required
                                           rows={2}
                                           value={shippingAddress.address}
                                           onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                                           placeholder="Apartment, building, street, area details"
                                           className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                                         />
                                      
                                       </div>
                                       <div className="flex flex-col gap-1">
                                   <label className="text-[11px] font-bold text-slate-400 uppercase">
                                     Delivery Notes
                                   </label>
             
                                   <textarea
                                     rows={2}
                                     value={notes}
                                     onChange={(e)=>setNotes(e.target.value)}
                                     placeholder="Deliver before 5 PM"
                                     className="text-xs px-3.5 py-2.5 border border-gray-200 rounded-lg"
                                   />
                                 </div>
                                     </div>
                     
                                     {/* Simulated Payment Choice */}
                                     <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-950/40 p-3.5 rounded-xl flex flex-col gap-2">
                                       <h4 className="text-xs font-bold text-orange-800 dark:text-orange-400">Payment Option Selected:</h4>
                                       <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                                         <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                         <span>Cash on Delivery (COD) / Pay on Delivery</span>
                                       </div>
                                       <p className="text-[10px] text-slate-400 leading-snug">
                                         Due to local security policies, we default to Cash on Delivery. Pay with UPI or cash upon delivery at your doorstep in Jaipur.
                                       </p>
                                     </div>
                     
                                     {/* Submit button */}
                                     <div className="mt-3 flex flex-col gap-3">
                                       <button
                                         type="submit"
                                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider"
                                       >
                                         Place Order 
                                       </button>
                                       <button
                                         type="button"
                                         onClick={() => setCheckoutStep("cart")}
                                         className="text-xs font-semibold text-slate-500 hover:text-slate-700 text-center"
                                       >
                                         Return to Cart
                                       </button>
                                     </div>
                              
             
                   </form>
             
            )}

            {checkoutStep === "success" && (
              <div className="flex flex-col items-center justify-center text-center h-full py-10 gap-5">
                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/40 flex items-center justify-center text-green-500 shrink-0">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 dark:text-white">Order Placed Successfully!</h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-[280px] leading-relaxed mx-auto">
                    Thank you for shopping on HelloMem! Your package is being curated and will be delivered within 24 hours at your Jaipur address.
                  </p>
                </div>

                {/* Details Summary Box */}
                <div className="w-full bg-gray-50 dark:bg-slate-800/40 border border-gray-150 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-2.5 text-left text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span className="font-semibold">Order ID:</span>
                    <span className="font-bold text-slate-900 dark:text-white">#HM-8293-{Math.floor(Math.random() * 9000) + 1000}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Recipient:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{shippingAddress.fullName || "Valued Customer"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Delivery Address:</span>
                    <span className="font-bold text-slate-900 dark:text-white truncate max-w-[180px]">
                      {shippingAddress.address || "Jaipur Central, Rajasthan"}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-gray-200 dark:border-slate-700 pt-2 font-bold text-slate-800 dark:text-white">
                    <span>Amount Payable (COD):</span>
                    <span className="text-orange-500 font-extrabold">₹{total > 0 ? total.toLocaleString("en-IN") : "543"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                  <span>Secure Local Packaging by Rishu International</span>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    setCheckoutStep("cart");
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
