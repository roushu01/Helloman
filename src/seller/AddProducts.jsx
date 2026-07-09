// src/seller/AddProduct.jsx

import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    sku: "",
    tags: "",
  });

  const [images, setImages] = useState([]);

  const [specifications, setSpecifications] = useState([
    { key: "", value: "" },
    ]);

    const [variants, setVariants] = useState([
    {
        color: "",
        size: "",
        stock: "",
    },
    ]);

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Beauty",
    "Sports",
    "Books",
    "Home",
    "Kitchen",
    "Accessories",
  ];

  const handleImageChange = (e) => {
  const files = [...e.target.files];

  if (images.length + files.length > 5) {
    alert("Maximum 5 images allowed.");
    return;
  }

  const allowed = ["image/jpeg", "image/png", "image/webp"];

  const previews = [];

  files.forEach((file) => {
    if (!allowed.includes(file.type)) {
      alert(`${file.name} is not supported`);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert(`${file.name} is larger than 2MB`);
      return;
    }

    previews.push({
      file,
      preview: URL.createObjectURL(file),
    });
  });

  setImages((prev) => [...prev, ...previews]);
};
const addSpecification = () => {
  setSpecifications([
    ...specifications,
    {
      key: "",
      value: "",
    },
  ]);
};

const removeSpecification = (index) => {
  const temp = [...specifications];
  temp.splice(index, 1);
  setSpecifications(temp);
};

const handleSpecificationChange = (
  index,
  field,
  value
) => {
  const temp = [...specifications];
  temp[index][field] = value;
  setSpecifications(temp);
};

const addVariant = () => {
  setVariants([
    ...variants,
    {
      color: "",
      size: "",
      stock: "",
    },
  ]);
};

const removeVariant = (index) => {
  const temp = [...variants];
  temp.splice(index, 1);
  setVariants(temp);
};

const handleVariantChange = (
  index,
  field,
  value
) => {
  const temp = [...variants];
  temp[index][field] = value;
  setVariants(temp);
};
const validateForm = () => {
  let temp = {};

  if (!product.name.trim())
    temp.name = "Product name required";

  if (!product.price)
    temp.price = "Price required";

  if (!product.stock)
    temp.stock = "Stock required";

  if (!product.category)
    temp.category = "Select category";

  if (images.length === 0)
    temp.images = "Upload product images";

  setErrors(temp);

  return Object.keys(temp).length === 0;
};



  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
        ...prev,
        [name]: value,
    }));
    };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  const data = {
    ...product,
    specifications,
    variants,
    images,
  };

  console.log(data);

  setTimeout(() => {
    setLoading(false);
    alert("Ready for backend upload.");
  }, 1500);
};

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-8 space-y-8"
      >

        {/* Product Information */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Product Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-medium">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />

            </div>

            <div>

              <label className="font-medium">
                Brand
              </label>

              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-medium">
                Category
              </label>

              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >

                <option value="">
                  Select Category
                </option>

                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                  >
                    {cat}
                  </option>
                ))}

              </select>

            </div>

            <div>

              <label className="font-medium">
                SKU
              </label>

              <input
                type="text"
                name="sku"
                value={product.sku}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

          </div>

        </div>

        {/* Pricing */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <label className="font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-medium">
                Discount Price
              </label>

              <input
                type="number"
                name="discountPrice"
                value={product.discountPrice}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-medium">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

          </div>

        </div>

        {/* Description */}

        <div>

          <label className="font-medium">
            Description
          </label>

          <textarea
            rows="6"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />

        </div>

        {/* Tags */}

        <div>

          <label className="font-medium">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={product.tags}
            onChange={handleChange}
            placeholder="shoe, nike, sports"
            className="w-full border rounded-lg p-3 mt-2"
          />

        </div>
        <div>

        <h2 className="text-xl font-semibold mb-5">
        Specifications
        </h2>

        {
        specifications.map((item,index)=>(
        <div
        key={index}
        className="flex gap-4 mb-4"
        >

        <input
        placeholder="Key"
        value={item.key}
        onChange={(e)=>
        handleSpecificationChange(
        index,
        "key",
        e.target.value
        )
        }
        className="flex-1 border rounded-lg p-3"
        />

        <input
        placeholder="Value"
        value={item.value}
        onChange={(e)=>
        handleSpecificationChange(
        index,
        "value",
        e.target.value
        )
        }
        className="flex-1 border rounded-lg p-3"
        />

        <button
        type="button"
        onClick={()=>removeSpecification(index)}
        className="bg-red-500 text-white px-4 rounded-lg"
        >
        Delete
        </button>

        </div>
        ))
        }

        <button
        type="button"
        onClick={addSpecification}
        className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
        Add Specification
        </button>

    </div>

    <div>

    <h2 className="text-xl font-semibold mb-5">
    Variants
    </h2>

    {
    variants.map((item,index)=>(
    <div
    key={index}
    className="grid md:grid-cols-4 gap-4 mb-4"
    >

    <input
    placeholder="Color"
    value={item.color}
    onChange={(e)=>
    handleVariantChange(
    index,
    "color",
    e.target.value
    )
    }
    className="border rounded-lg p-3"
    />

    <input
    placeholder="Size"
    value={item.size}
    onChange={(e)=>
    handleVariantChange(
    index,
    "size",
    e.target.value
    )
    }
    className="border rounded-lg p-3"
    />

    <input
    placeholder="Stock"
    value={item.stock}
    onChange={(e)=>
    handleVariantChange(
    index,
    "stock",
    e.target.value
    )
    }
    className="border rounded-lg p-3"
    />

    <button
    type="button"
    onClick={()=>removeVariant(index)}
    className="bg-red-500 text-white rounded-lg"
    >
    Delete
    </button>

    </div>
    ))
    }

    <button
    type="button"
    onClick={addVariant}
    className="bg-green-500 text-white px-5 py-2 rounded-lg"
    >
    Add Variant
    </button>

    </div>

        {/* Image Upload */}

        <div>

          <h2 className="text-xl font-semibold mb-5">
            Product Images
          </h2>

          <label
            className="border-2 border-dashed rounded-xl p-8 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition"
          >

            <Upload
              size={45}
              className="text-orange-500"
            />

            <p className="mt-3">
              Click to Upload Images
            </p>

            <input
              type="file"
              multiple
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />

          </label>

          {/* Preview */}

          {images.length > 0 && (

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

              {images.map((img, index) => (

                <div
                  key={index}
                  className="relative"
                >

                  <img
                    src={img.preview}
                    alt=""
                    className="w-full h-32 object-cover rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={15} />
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4">

          <button
            type="reset"
            className="px-6 py-3 rounded-lg border"
          >
            Reset
          </button>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
          >
          {loading ? "Saving..." : "Save Product"}
          </button>

        </div>

      </form>

    </div>
  );
}