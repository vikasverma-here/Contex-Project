import React, { useContext } from 'react'
import { useState } from 'react'
import { ProductContext } from './utils/Context'
const Create = () => {

    const [products , setProducts] = useContext(ProductContext)
    
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [title, settitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setdescription] = useState("")
    
  

    const Addproducthandler = (e)=>{
        e.preventDefault()
        const obj = {
            image,
            category,
            title, 
            price,
            description
        }
      setProducts([...products,obj])
    }

    
    return (
        <form onSubmit={Addproducthandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
            <h1 className='text-3xl w-1/2 mb-5'>Add New Product</h1>


            <input type="url" placeholder='image-link' className='text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3' onChange={(e) => setImage(e.target.value)} value={image} />

            <input type="text" placeholder='title' className='text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3 w-[48%]' onChange={(e) => settitle(e.target.value)} value={title} />

            <div className='w-1/2 flex  justify-between'>
            <input type="text" placeholder='Category' className='text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3 w-[48%]' onChange={(e) => setCategory(e.target.value)} value={category} />


            <input type="number" placeholder='Price' className='text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3 w-[48%]' onChange={(e) =>setPrice(e.target.value)} value={price} />




            </div>
           

           <textarea onChange={(e)=>setdescription(e.target.value)}  value={description} className='text-2xl bg-zinc-100 rounded p-4 w-1/2' rows={10} placeholder='Enter product description here' ></textarea>
<div className='w-1/2'>
<button className='self-start py-3 mt-3 px-5 border rounded hover:text-blue-800 hover:border-blue-800  border-blue-200 text-blue-300'>
        Add New Product 
        </button>
</div>
          
        </form>
    )
}

export default Create
