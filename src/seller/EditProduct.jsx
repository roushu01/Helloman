import React, { useState, useEffect } from "react";
import { updateProduct } from "../api/ProductApi";

export default function EditProduct({
  selectedProduct,
  setActivePage,
}) {

  const [stock, setStock] = useState("");

  useEffect(() => {

    if(selectedProduct){
      setStock(selectedProduct.stock || "");
    }

  },[selectedProduct]);


  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

      await updateProduct(
        selectedProduct._id,
        {
          stock:Number(stock)
        }
      );


      alert("Stock Updated Successfully");

      setActivePage("products");


    }catch(err){

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Stock Update Failed"
      );

    }

  };


  return (

    <div className="bg-white rounded-xl shadow p-8 max-w-xl">

      <h2 className="text-2xl font-bold mb-6">
        Update Product Stock
      </h2>


      <div className="mb-5">

        <label className="block font-medium mb-2">
          Product Name
        </label>

        <input
          value={selectedProduct?.name || ""}
          disabled
          className="w-full border p-3 rounded-lg bg-gray-100"
        />

      </div>



      <div className="mb-5">

        <label className="block font-medium mb-2">
          Current Stock
        </label>


        <input
          type="number"
          value={stock}
          onChange={(e)=>setStock(e.target.value)}
          className="w-full border p-3 rounded-lg"
          placeholder="Enter stock quantity"
        />

      </div>



      <div className="flex gap-4">

        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg"
        >
          Update Stock
        </button>


        <button
          type="button"
          onClick={()=>setActivePage("products")}
          className="border px-8 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>


    </div>

  );
}