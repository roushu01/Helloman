import React, { useState, useEffect } from "react";
import {
  User,
  Package,
  Heart,
  ShoppingCart,
  LogOut,
  CreditCard,
  Edit,
  Trash2
} from "lucide-react";
import api from "../api/axios";
import { getCart } from "../api/cartApi";
import {getOrders} from "../api/OrderApi";
import { addReview } from "../api/reviewApi";

export default function Profile({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("orders");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [banks,setBanks] = useState([]);
  const [bankLoading,setBankLoading] = useState(false);
  const [showBankForm,setShowBankForm] = useState(false);
  const [editBankId,setEditBankId] = useState(null);


  const [bankForm,setBankForm] = useState({
    bankName:"",
    accountHolderName:"",
    accountNumber:"",
    ifscCode:"",
    branchName:"",
    accountType:"Savings",
    isPrimary:true
  });
  const [review, setReview] = useState({
    rating: 5,
    comment: "",
  });
  const handleReviewSubmit = async () => {
  try {
    await addReview({
      productId: selectedProductId,
      rating: review.rating,
      comment: review.comment,
    });

    alert("Review submitted successfully");

    // Reset form
    setReview({
      rating: 5,
      comment: "",
    });

    setSelectedProductId(null);
    setShowReviewModal(false);

  } catch (err) {
    console.error(err);
  }
};
  const fetchCart = async () => {
  try {
    setLoading(true);

    const res = await getCart(); // token is already sent from axios interceptor

    if (res.success) {
      setCartItems(res.items);
      
    }
  } catch (err) {
    console.error("Error fetching cart:", err);
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  if (activeTab === "cart") {
    fetchCart();
  }
}, [activeTab]);
const fetchOrders = async () => {
  try {
    setOrderLoading(true);

    const res = await getOrders();

    if (res.success) {
      setOrders(res.orders);
      console.log(res.orders);   // or res.data depending on backend
    }
  } catch (err) {
    console.error("Error fetching orders:", err);
  } finally {
    setOrderLoading(false);
  }
};
useEffect(() => {
  if (activeTab === "cart") {
    fetchCart();
  }

  if (activeTab === "orders") {
    fetchOrders();
  }
}, [activeTab]);
const fetchBanks = async()=>{

 try{

   setBankLoading(true);

   const token = localStorage.getItem("token");

   const res = await api.get(
     "/api/user-banks/all",
     {
       headers:{
         Authorization:`Bearer ${token}`
       }
     }
   );


   console.log("Bank API Response:", res.data);


   if(res.data.success){

      setBanks(res.data.userBanks);

   }


 }
 catch(err){

   console.log(
    "Fetch Bank Error:",
    err.response?.data || err.message
   );

 }
 finally{

   setBankLoading(false);

 }

};
useEffect(()=>{

 if(activeTab==="bank"){
    fetchBanks();
 }

},[activeTab]);
const saveBank = async()=>{
      try{
      const token = localStorage.getItem("token");
      console.log("Sending Bank Data:", bankForm);
      const res = await api.post(
      "/api/user-banks",
      bankForm,
      {
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json"
        }
      }
      );
      console.log("Bank Response:",res.data);
      alert("Bank added successfully");
      setShowBankForm(false);
      setBankForm({
      bankName:"",
      accountHolderName:"",
      accountNumber:"",
      ifscCode:"",
      branchName:"",
      accountType:"Savings",
      isPrimary:true
      });
      fetchBanks();
      }
      catch(err){
      console.log(
      "Bank Error:",
      err.response?.data
      );}};
const deleteBank = async(id)=>{
      try{
      const token = localStorage.getItem("token");
      await api.delete(
        `/api/user-banks/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );
      alert("Bank deleted");
      fetchBanks();
      }
      catch(err){
      console.log(
      "Delete Bank Error:",
      err.response?.data || err.message
      );}};

  return (
    <div className="max-w-7xl mx-auto p-8">

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Sidebar */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-5">

          <div className="flex lg:block items-center gap-4 lg:text-center border-b pb-5">

            <div className="w-16 h-16 lg:w-20 lg:h-20 lg:mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl lg:text-3xl font-bold">
              {user?.firstName?.charAt(0)}
            </div>

            <h2 className="mt-3 text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </h2>


          </div>

          <div className="mt-6 flex lg:flex-col gap-2 overflow-x-auto pb-2">

            <button
              onClick={() => setActiveTab("orders")}
             className={`min-w-max lg:w-full flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap ${
                  activeTab === "orders"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              <Package size={20} />
              My Orders
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`min-w-max lg:w-full flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap ${
            activeTab === "cart"
              ? "bg-orange-500 text-white"
              : "hover:bg-gray-100"
          }`}
            >
              <ShoppingCart size={20} />
              Cart
            </button>

           <button
              onClick={()=>setActiveTab("bank")}
              className={`min-w-max lg:w-full flex items-center gap-2 px-4 py-3 rounded-lg ${
              activeTab==="bank"
              ?"bg-orange-500 text-white"
              :"hover:bg-gray-100"
              }`}
              >

              <CreditCard size={20}/>

              Bank Details

              </button>

            <button
              onClick={onLogout}
              className={`min-w-max lg:w-full flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap ${
                activeTab === "logout"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              }`}       
            >
              <LogOut size={20} />
              Logout
            </button>


          </div>

        </div>

        {/* Right Content */}
        <div className="lg:col-span-9 bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">


         {activeTab === "orders" && (
  <>
    <h2 className="text-2xl font-bold mb-6">My Orders</h2>

    {orderLoading ? (
      <p className="text-gray-500">Loading orders...</p>
    ) : orders.length === 0 ? (
      <p>No orders found.</p>
    ) : (
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-xl shadow-sm p-5 bg-white"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div>
                <p className="font-bold text-lg">
                  Order #{order.orderNumber}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

            
            </div>

            {/* Products */}
            <div className="space-y-4">
              {order.items.map((item, index) => {
                const imageUrl =
                  item.image?.match(/https?:\/\/[^'"]+/)?.[0] ||
                  "/placeholder.png";

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover border"
                      />

                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Quantity : {item.quantity}
                        </p>
          
{/* 
                        <p className="text-gray-500 text-sm">
                          Payment : {order.payment.method}
                        </p> */}

                        <p className="text-gray-500 text-sm">
                          Status : {order.orderStatus}
                        </p>
                      </div>
                    </div>
                   <div>
                                  <button
        onClick={() => {
          console.log("Clicked");
          console.log(item);

          setSelectedProductId(item.product);
          setShowReviewModal(true);
        }}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
      >
        Write Review
      </button>
                  </div>
                  </div>
                );
              })}
            </div>

            {/* Order Total */}
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>

              <span className="text-orange-600">
                ₹{order.pricing.total.toLocaleString("en-IN")}
              </span>
            </div>
            
          </div>
        ))}
      </div>
    )}
  </>
)}

{activeTab==="bank" && (

<div>

<div className="flex justify-between items-center mb-6">

<h2 className="text-2xl font-bold">
My Bank Details
</h2>


<button

onClick={()=>setShowBankForm(true)}

className="bg-orange-500 text-white px-5 py-2 rounded-lg"

>
Add Bank
</button>


</div>



{
banks.filter(Boolean).map((bank)=>(

<div
key={bank._id}
className="border rounded-xl p-5 mb-5"
>


<h3 className="text-xl font-bold">
{bank.bankName}
</h3>


<p>
Account Holder :
{bank.accountHolderName}
</p>


<p>
Account Number :
{bank.accountNumber}
</p>


<p>
IFSC :
{bank.ifscCode}
</p>


<p>
Branch :
{bank.branchName}
</p>


<p>
Type :
{bank.accountType}
</p>



<div className="flex gap-3 mt-5">


{/* <button

onClick={()=>editBank(bank)}

className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"

>

<Edit size={16}/>
Edit

</button> */}



<button

onClick={()=>deleteBank(bank._id)}

className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg"

>

<Trash2 size={16}/>
Delete

</button>



</div>


</div>


))

}



</div>

)}
          {activeTab === "cart" && (
  <>
    <h2 className="text-2xl font-bold mb-6">My Cart</h2>

    {loading ? (
      <p>Loading...</p>
    ) : cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
          key={item.product._id}
          className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-4 gap-4"
        >
            <div className="flex gap-4 items-center flex-1">
              <img
                src={item.product.images?.[0]?.url}
                alt={item.product.name}
                className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.product.name}</h3>
                <p>Brand: {item.brand}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>

            <div className="font-bold text-orange-600 text-lg self-end sm:self-auto">
              ₹{item.product.price * item.quantity}
            </div>
          </div>
        ))}
      </div>
    )}
  </>
)}

          
        </div>

      </div>
      {showReviewModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white rounded-xl p-6 w-[420px]">

      <h2 className="text-xl font-bold mb-5">
        Write Review
      </h2>

      <label className="font-medium">
        Rating
      </label>

      <select
        className="w-full border rounded-lg p-3 mt-2 mb-5"
        value={review.rating}
        onChange={(e) =>
          setReview({
            ...review,
            rating: Number(e.target.value),
          })
        }
      >
        <option value={5}>5 ⭐</option>
        <option value={4}>4 ⭐</option>
        <option value={3}>3 ⭐</option>
        <option value={2}>2 ⭐</option>
        <option value={1}>1 ⭐</option>
      </select>

      <label className="font-medium">
        Comment
      </label>

      <textarea
        rows={5}
        className="w-full border rounded-lg p-3 mt-2"
        value={review.comment}
        onChange={(e) =>
          setReview({
            ...review,
            comment: e.target.value,
          })
        }
      />

      <div className="flex justify-end gap-3 mt-6">

        <button
        onClick={() => {
              setReview({
                rating: 5,
                comment: "",
              });
              setSelectedProductId(null);
              setShowReviewModal(false);
            }}
          className="px-5 py-2 border rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleReviewSubmit}
          className="px-5 py-2 bg-orange-500 text-white rounded-lg"
        >
          Submit Review
        </button>

      </div>

    </div>
  </div>
)}
{showBankForm && (

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


<div className="bg-white p-6 rounded-xl w-[450px]">


<h2 className="text-xl font-bold mb-5">

{
editBankId
?"Edit Bank"
:"Add Bank"
}

</h2>



{
Object.keys(bankForm)
.filter(x=>x!=="isPrimary")
.map(field=>(

<input

key={field}

className="w-full border p-3 rounded-lg mb-3"

placeholder={field}

value={bankForm[field]}

onChange={(e)=>

setBankForm({

...bankForm,

[field]:e.target.value

})

}

/>

))

}



<div className="flex justify-end gap-3">


<button

onClick={()=>setShowBankForm(false)}

className="border px-4 py-2 rounded-lg"

>
Cancel
</button>



<button

onClick={saveBank}

className="bg-orange-500 text-white px-4 py-2 rounded-lg"

>

Save

</button>


</div>


</div>

</div>

)}
    </div>
  );
}