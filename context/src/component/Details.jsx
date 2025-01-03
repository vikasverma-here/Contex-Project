import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from './utils/Context';

import axios from './utils/axios';
const Details = () => {
   

  const { id } = useParams();
  console.log(id)
 const getSingleProduct = async ()=>{
    try{
        const {data} = await axios.get(`/products/${id}`)
        console.log(data)
    }catch(err){
        console.log(err)
    }
 }
useEffect(()=>{
    getSingleProduct()
},[])
  return (
    <div className="w-[90%] md:w-[70%] flex flex-col md:flex-row h-full mx-auto p-6 md:p-[10%] items-center bg-gray-50 shadow-md rounded-lg">
      {/* Product Image */}
      <img
        className="h-48 w-full md:h-[80%] md:w-[40%] object-contain rounded-lg border mb-6 md:mb-0"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Product"
      />
      
      {/* Product Content */}
      <div className="content w-full mx-[7%] md:w-[50%]">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        
        <h3 className="text-gray-500 mb-5">Men's Clothing</h3>
        
        <h2 className="text-xl text-red-500 mb-3 font-semibold">₹ 109.95</h2>
        
        <p className="text-gray-600 mb-7">
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.
        </p>
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to={`/edit/${id}`}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Edit
          </Link>
          <Link
            to={`/delete/${id}`}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
