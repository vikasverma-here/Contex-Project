import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './utils/Context'
import { Link } from 'react-router-dom'
const Navigation = () => {
  const [products] = useContext(ProductContext)
  
  let ditinct_products=products && products.reduce((acc,cv)=>[...acc,cv.category], [])

ditinct_products =[...new Set(ditinct_products)]
// console.log(ditinct_products)

const color = ()=>{
  return (`rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},0.4)` )
}
// console.log(color())

  return (    
    
      <nav className='w-[20%] h-full  bg-zinc-100 flex flex-col items-center pt-5 ' >
        <a href="/create" className='py-3 px-5 border rounded  border-blue-200 text-blue-300'>
        Add New Product 
        </a>
        <hr className='my-3 w-[80%] border-gray-400' />
       <h1 className='text-2xl mb-5   w-[80%]  font-bold ' >Catagory Filter :</h1>
      
       <div className='w-[80%]'>
       <Link to='/' className='absolute px-8 left-[19.5%] top-[6%] text-2xl font-bold text-red-500  hover:text-blue-700 hover:scale-105 transition duration-300 font-bold ' >  Home</Link>
       {ditinct_products.map((c,i)=>{
        return(
<Link to={`/?category=${c}`} key={i} className='mb-3 flex items-center hover:text-blue-700 hover:scale-105 transition duration-300 font-bold '>
          <span style={{backgroundColor:color()}} className='rounded-full mr-2 w-[15px] h-[15px] '></span>
         {c}</Link>
         
        )
     
      })}
        
        
       
       </div>
      </nav>
 
  )
}

export default Navigation
