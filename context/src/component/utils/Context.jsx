import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
export const ProductContext = createContext()
import axios from './axios'
const Context = ({children}) => {

  
const [products, setproducts] = useState(null)

const getData = async ()=>{
    try{
        const   {data} = await axios.get("/products")
     
        setproducts(data)
    }catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    getData()
},[])
  return (
    <ProductContext.Provider value= {[products, setproducts]}>
 <h1>{children}</h1>
    </ProductContext.Provider>
     
    
  )
}

export default Context
