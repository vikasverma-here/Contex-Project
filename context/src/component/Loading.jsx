import React from 'react'

const Loading = () => {
  return (
    
    <div className="flex h-screen w-screen overflow-x-hidden">

         {/* Right Section */}
         <div className="w-1/4 h-full p-4 bg-gray-100">
        {Array.from({ length: 1 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-300 h-screen rounded-md mb-4"
          ></div>
        ))}
      </div>
      {/* Left Section */}
      <div className="flex-grow grid grid-cols-5 gap-4 p-4 pr-10 bg-gray-100 overflow-x-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-300 h-40 rounded-lg"
          ></div>
        ))}
      </div>

   
    </div>
  );
  
}

export default Loading
