import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./utils/Context";
import { useNavigate } from "react-router-dom";
import ProductDetailsShimmer from "./ProductDetailsShimmer";
import axios from "./utils/axios";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [single, setsingle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!single) {
      setsingle(products.filter((p) => p.id == id)[0]);
    }
  }, [products, id, single]);

  function displayRating(rating) {
    const maxStars = 6;
    let stars = "";
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars += "★";
    }
    for (let i = Math.ceil(rating); i < maxStars; i++) {
      stars += "☆";
    }
    return stars;
  }

  const color = () => {
    return `rgba(${Math.floor(Math.random() * 225)},${Math.floor(
      Math.random() * 225
    )},${Math.floor(Math.random() * 225)},0.4)`;
  };

  const productDeleteHandler = () => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("Product deleted successfully");
    navigate("/");
  };

  return single ? (
    <div className="w-full max-w-5xl flex flex-col md:flex-row h-full mx-auto p-4 md:p-8 items-center bg-gray-50 shadow-md rounded-lg space-y-6 md:space-y-0 md:space-x-8">
      {/* Product Image */}
      <img
        className="h-56 w-full md:h-80 md:w-1/2 object-contain rounded-lg border"
        src={single.image}
        alt="Product"
      />

      {/* Product Details */}
      <div className="content w-full md:w-1/2 flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {single.title}
        </h1>

        <h3 className="text-gray-500 mb-3">
          <strong>Category:</strong> {single.category}
        </h3>

        <h2 className="text-xl text-red-500 mb-3 font-semibold">
          ₹ {single.price}
        </h2>

        <p className="text-gray-600 mb-4">{single.description}</p>

        <h4 className="mb-5" style={{ color: color() }}>
          <strong className="text-green-600">Rating:</strong>{" "}
          {displayRating(single?.rating || 0)},{" "}
          <strong style={{ color: color() }} className="text-green-600">
            Total Reviews:
          </strong>{" "}
          {single?.count || 0}
        </h4>

        <div className="flex flex-wrap gap-4">
          <Link
            to={`/edit/${id}`}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Edit
          </Link>
          <button
            onClick={productDeleteHandler}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
          <button
            onClick={() => navigate("/")}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  ) : (
    <ProductDetailsShimmer />
  );
};

export default Details;
