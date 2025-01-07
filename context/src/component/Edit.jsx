import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './utils/Context';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    image: '',
    category: '',
    title: '',
    price: '',
    description: '',
    rating: '',
    count: '',
  });

  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5
    ) {
      alert('Every field must have at least 4 characters');
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copydata = [...products];
    copydata[pi] = { ...products[pi], ...product };
    setProducts(copydata);
    localStorage.setItem('products', JSON.stringify(copydata));
    toast.success('Edited successfully');
  };

  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className="p-[5%] w-screen h-screen flex flex-col items-center"
      >
        <h1 className="text-3xl w-full lg:w-1/2 mb-5 text-center lg:text-left">Edit Product</h1>
        <input
          type="url"
          name="image"
          placeholder="Image Link"
          className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full lg:w-1/2 mb-3"
          onChange={changeHandler}
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full lg:w-1/2 mb-3"
          onChange={changeHandler}
          value={product && product.title}
        />
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:justify-between gap-3">
          <input
            type="text"
            placeholder="Category"
            name="category"
            className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full sm:w-[48%]"
            onChange={changeHandler}
            value={product && product.category}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full sm:w-[48%]"
            onChange={changeHandler}
            value={product && product.price}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:justify-between gap-3 mt-3">
          <input
            type="number"
            max={6}
            min={1}
            placeholder="Rating"
            name="rating"
            className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full sm:w-[48%]"
            onChange={changeHandler}
            value={product && product.rating}
          />
          <input
            type="number"
            placeholder="Total Reviews"
            name="count"
            className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full sm:w-[48%]"
            onChange={changeHandler}
            value={product && product.count}
            min={1}
          />
        </div>
        <textarea
          onChange={changeHandler}
          value={product && product.description}
          name="description"
          className="text-lg sm:text-2xl bg-zinc-100 rounded p-4 w-full lg:w-1/2 mt-3"
          rows={10}
          placeholder="Enter product description here"
        ></textarea>
        <div className="w-full lg:w-1/2 mt-3">
          <button
            onClick={() => navigate('/')}
            className="self-start py-3 px-5 border rounded hover:text-blue-800 hover:border-blue-800 border-blue-200 text-blue-300"
          >
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
