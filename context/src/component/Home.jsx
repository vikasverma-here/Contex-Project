import React, { useContext } from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { ProductContext } from '../component/utils/Context'
import Loading from './Loading'
const Home = () => {

 const [products] = useContext(ProductContext)


  return (products ?
<>
<Navigation/>
      <div className=' w-[80%]  p-5 pt-[5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-atuo '>
{products.map((p,i)=><Link key={i} to={`/details/${p.id}`} className='card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center' >
<div className=' transition ease-in-out transition-duration: 150ms; hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 ' style={{backgroundImage:`url(${p.image})`}} ></div>


<h1 className='hover:text-blue-500' >{p.title}</h1>
</Link>)}



</div>
</>
 : <Loading/> )
}

export default Home
