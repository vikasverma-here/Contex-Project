import React from 'react'

const Navigation = () => {
  return (
    
      <nav className='w-[20%] h-full  bg-zinc-100 flex flex-col items-center pt-5 ' >
        <a href="/create" className='py-3 px-5 border rounded  border-blue-200 text-blue-300'>
        Add New Product 
        </a>
        <hr className='my-3 w-[80%] border-gray-400' />
       <h1 className='text-2xl mb-3 w-[80%] ' >Catagory Filter</h1>
       <ul className='w-[80%]'>
        <li className=' mb-3 flex items-center  ' >
          <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-200'></span>
          Cart 1</li>
        <li className=' mb-3 flex items-center  ' >
          <span className='rounded-full mr-2 w-[15px] h-[15px] bg-green-200'></span>
          Cart 1</li>
        <li className=' mb-3 flex items-center  ' >
          <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-200'></span>
          Cart 1</li>
       
       </ul>
      </nav>
 
  )
}

export default Navigation
