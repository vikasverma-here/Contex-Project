import React from "react";

const ProductDetailsShimmer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <div className="w-full max-w-6xl  bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Left - Image */}
        <div className="w-full md:w-1/3 h-64 bg-gray-300 shimmer rounded-md"></div>
        
        {/* Right - Details */}
        <div className="flex flex-col flex-1 space-y-4">
          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-300 shimmer rounded-md"></div>
          {/* Category */}
          <div className="h-4 w-1/4 bg-gray-300 shimmer rounded-md"></div>
          {/* Price */}
          <div className="h-6 w-1/3 bg-gray-300 shimmer rounded-md"></div>
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 shimmer rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-300 shimmer rounded-md"></div>
            <div className="h-4 w-2/3 bg-gray-300 shimmer rounded-md"></div>
          </div>
          {/* Rating */}
          <div className="h-4 w-1/5 bg-gray-300 shimmer rounded-md"></div>
          {/* Buttons */}
          <div className="flex space-x-4">
            <div className="h-10 w-24 bg-gray-300 shimmer rounded-md"></div>
            <div className="h-10 w-24 bg-gray-300 shimmer rounded-md"></div>
            <div className="h-10 w-24 bg-gray-300 shimmer rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
