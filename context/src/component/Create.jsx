import React, { useContext, useState } from 'react';
import { ProductContext } from './utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Create = () => {
    const [products, setProducts] = useContext(ProductContext); 
 const navigate = useNavigate()
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating , setrating ] = useState('')
    const [count, setcount] = useState("")

    const AddProductHandler = (e) => {
        e.preventDefault();
        if (
            title.trim().length < 5 ||
            category.trim().length < 5 ||
            price.trim().length < 1 ||
            description.trim().length < 5
        ) {
            alert('Every field must have at least 4 characters');
            return;
        }
        const obj = {
            id: nanoid(),
            image,
            category,
            title,
            price,
            description,
            rating,
            count,
        };
        setProducts([...products, obj]);
        localStorage.setItem("products",JSON.stringify([...products, obj]))
        toast.success("Product added successfully")
        navigate("/")
    };

    return (
        <form onSubmit={AddProductHandler} className="p-[5%] w-screen h-screen flex flex-col items-center">
            <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
            <input
                type="url"
                placeholder="Image Link"
                className="text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />
            <input
                type="text"
                placeholder="Title"
                className="text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <div className="w-1/2 flex justify-between">
                <input
                    type="text"
                    placeholder="Category"
                    className="text-2xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <input
                    type="number"
                    placeholder="Price"
                    className="text-2xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <div className="w-1/2 flex justify-between">
                <input
                    type="number"
                    max={6}
                    min={1}
                    placeholder="rating"
                    className="text-2xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
                    onChange={(e) => setrating(e.target.value)}
                    value={rating}
                />
                <input
                    type="number"
                    placeholder="total reviews"
                    className="text-2xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
                    onChange={(e) => setcount(e.target.value)}
                    value={count}
                    min={1}
                />
            </div>
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="text-2xl bg-zinc-100 rounded p-4 w-1/2"
                rows={10}
                placeholder="Enter product description here"
            ></textarea>
            <div className="w-1/2">
                <button className="self-start py-3 mt-3 px-5 border rounded hover:text-blue-800 hover:border-blue-800 border-blue-200 text-blue-300">
                    Add New Product
                </button>
            </div>
        </form>
    );
};

export default Create;
