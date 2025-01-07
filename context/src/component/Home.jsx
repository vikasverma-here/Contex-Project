import React, { useContext, useEffect } from 'react';
import Navigation from './Navigation';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../component/utils/Context';
import { useState } from 'react';
import Loading from './Loading';
import axios from './utils/axios';

const Home = () => {
  const [products] = useContext(ProductContext);
  const [filterproducts, setfilterproducts] = useState(null);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);

  const getproductscategery = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilterproducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!filterproducts || category === 'undefined') setfilterproducts(products);
    if (category !== 'undefined') {
      setfilterproducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  return products ? (
    <>
      <Navigation />
      <div className="w-[90%] lg:w-[80%] mx-auto p-5 pt-[5%] flex flex-wrap gap-4 overflow-x-hidden">
        {filterproducts &&
          filterproducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card p-4 border shadow rounded w-full sm:w-[47%] md:w-[30%] lg:w-[18%] h-[35vh] flex flex-col justify-center items-center"
            >
              <div
                className="transition ease-in-out duration-150 hover:scale-110 w-full h-[75%] bg-contain bg-no-repeat bg-center mb-3"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <h1 className="text-sm text-center hover:text-blue-500">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
