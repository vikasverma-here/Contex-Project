import React, {  useEffect,useState} from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductDetailsShimmer from './ProductDetailsShimmer';
import axios from './utils/axios';
const Details = () => {
  const navigate = useNavigate();
   const [single, setsingle] = useState(null)
console.log(single)
  const { id } = useParams();
  console.log(id)
 const getSingleProduct = async ()=>{
    try{
        const {data} = await axios.get(`/products/${id}`)
       setsingle(data)
    }catch(err){
        console.log(err)
    }
 }
useEffect(()=>{
    getSingleProduct()
},[])


// it converts the giiven start in number it converts the number tho the starrs 


function displayRating(rating) {
  const maxStars = 5; 
  let stars = '';

 
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars += '★';
  }
  
  for (let i = Math.ceil(rating); i < maxStars; i++) {
    stars += '☆';
  }

  return stars;
}



  return single?(
    <div className="w-[90%] md:w-[70%] flex flex-col md:flex-row h-full mx-auto p-6 md:p-[10%] items-center bg-gray-50 shadow-md rounded-lg">
 
      <img
        className="h-48 w-full md:h-[80%] md:w-[40%] object-contain rounded-lg border mb-6 md:mb-0"
        src={single.image}
        alt="Product"
      />
      
      
      <div className="content w-full mx-[7%] md:w-[50%]">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
         {single.title}
        </h1>
        
        <h3 className="text-gray-500 mb-5"> <strong>Category</strong> :{single.category}</h3>
        
        <h2 className="text-xl text-red-500 mb-3 font-semibold">₹ {single.price}</h2>
        
        <p className="text-gray-600 mb-7">
        {single.description}
        </p>
        
        <h4 className='mb-3 '> <strong className='text-green-600' >Rating</strong> {displayRating(single.rating.rate)} , <strong className='text-green-600' >Total Review</strong> :{single.rating.count}</h4>
        
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
          <button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={()=>navigate("/")} >Back to Home</button>
        </div>
      </div>
    </div>
  ):(<ProductDetailsShimmer/>);
};
 
export default Details;
