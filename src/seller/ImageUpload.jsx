import React, { useRef, useState } from "react";
import {
  Upload,
  Image,
  Trash2,
  ArrowLeft,
} from "lucide-react";

export default function ImageUpload({ setActivePage }) {

  const fileRef = useRef(null);

  const [formData, setFormData] = useState({
    product: "",
    imageType: "",
    status: "Active",
  });

  const [images, setImages] = useState([]);

  const handleFiles = (files) => {

    const selected = Array.from(files);

    const previews = selected.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages(prev => [...prev, ...previews]);

  };

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Upload Images
          </h1>

          <p className="text-gray-500">
            Upload product images
          </p>

        </div>

        <button
          onClick={() => setActivePage("products")}
          className="border px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      {/* Form */}

      <div className="bg-white rounded-xl shadow p-8 space-y-8">

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <label className="font-medium">
              Product
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-2"
              value={formData.product}
              onChange={(e)=>
                setFormData({
                  ...formData,
                  product:e.target.value
                })
              }
            >

              <option value="">Select Product</option>
              <option>Nike Shoes</option>
              <option>Leather Wallet</option>
              <option>Wireless Earbuds</option>

            </select>

          </div>

          <div>

            <label className="font-medium">
              Image Type
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-2"
              value={formData.imageType}
              onChange={(e)=>
                setFormData({
                  ...formData,
                  imageType:e.target.value
                })
              }
            >

              <option value="">Select</option>
              <option>Main Image</option>
              <option>Gallery Image</option>
              <option>Thumbnail</option>

            </select>

          </div>

          <div>

            <label className="font-medium">
              Status
            </label>

            <select
              className="w-full border rounded-lg p-3 mt-2"
              value={formData.status}
              onChange={(e)=>
                setFormData({
                  ...formData,
                  status:e.target.value
                })
              }
            >

              <option>Active</option>
              <option>Inactive</option>

            </select>

          </div>

        </div>

        {/* Upload Area */}

        <div
          onClick={() => fileRef.current.click()}
          onDrop={(e)=>{
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
          onDragOver={(e)=>e.preventDefault()}
          className="border-2 border-dashed border-orange-300 rounded-xl p-10 text-center cursor-pointer hover:bg-orange-50 transition"
        >

          <Upload
            size={45}
            className="mx-auto text-orange-500"
          />

          <h2 className="mt-4 text-lg font-semibold">

            Drag & Drop Images Here

          </h2>

          <p className="text-gray-500 mt-2">

            or Click to Upload

          </p>

          <input
            type="file"
            multiple
            hidden
            ref={fileRef}
            accept="image/*"
            onChange={(e)=>handleFiles(e.target.files)}
          />

        </div>

        {/* Preview */}

        {images.length>0 && (

          <div>

            <h2 className="font-semibold mb-4">
              Uploaded Images
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              {images.map((img,index)=>(

                <div
                  key={index}
                  className="relative border rounded-xl overflow-hidden"
                >

                  <img
                    src={img.preview}
                    alt=""
                    className="w-full h-48 object-cover"
                  />

                  <button
                    onClick={()=>
                      setImages(images.filter((_,i)=>i!==index))
                    }
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                  >

                    <Trash2 size={16}/>

                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* Buttons */}

        <div className="flex justify-end gap-4 border-t pt-6">

          <button
            onClick={()=>setActivePage("products")}
            className="border px-6 py-3 rounded-lg"
          >

            Cancel

          </button>

          <button
            onClick={()=>alert("Draft Saved")}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg"
          >

            Save Draft

          </button>

          <button
            onClick={()=>{

              console.log(images);

              alert("Images Uploaded Successfully");

            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >

            Upload Images

          </button>

        </div>

      </div>

    </div>

  );

}