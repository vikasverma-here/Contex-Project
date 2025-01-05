import React, { useContext, useEffect } from 'react'
import Navigation from './Navigation'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../component/utils/Context'
import { useState } from 'react'
import Loading from './Loading'
import axios from './utils/axios'
const Home = () => {

 const [products] = useContext(ProductContext)
 const [filterproducts, setfilterproducts] = useState(null)
const {search} = useLocation()
const category = decodeURIComponent(search.split("=")[1]);

// console.log(search)

console.log(filterproducts)
const getproductscategery = async () => {
      try{
            const {data} = await axios.get(`/products/category/${category}`)
            setfilterproducts(data)
      }catch(err){
            console.log(err)
      }
}

useEffect(()=>{
      if(!filterproducts || category == 'undefined') setfilterproducts(products)
if(category != "undefined") getproductscategery()

},[category,products])

  return (products ?
<>
<Navigation/>
      <div className=' w-[80%]  p-5 pt-[5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-atuo '>
{filterproducts && filterproducts.map((p,i)=><Link key={i} to={`/details/${p.id}`} className='card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center' >
<div className=' transition ease-in-out transition-duration: 150ms; hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 ' style={{backgroundImage:`url(${p.image})`}} ></div>


<h1 className='hover:text-blue-500' >{p.title}</h1>
</Link>)}



</div>
</>
 : <Loading/> )
}

export default Home
