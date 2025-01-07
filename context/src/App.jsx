import React from 'react'
import { Routes ,Route, useLocation} from 'react-router-dom'
import Home from './component/Home'
import { Link } from 'react-router-dom'
import Details from './component/Details'
import Create from './component/Create'
import Edit from './component/Edit'
const App = () => {
  const {search,pathname} = useLocation();
  // console.log("search" ,  search, "pathname", pathname)
  
  return (
    <div className='h-screen w-screen flex '>

{
  (pathname != "/" || search.length>0 && (
    <Link to='/' className='absolute px-8 left-[19.5%] top-[5%] text-2xl font-bold text-red-500  hover:text-blue-700 hover:scale-105 transition duration-300 font-bold ' > Back to Home</Link>
  ))
}
      
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="/create" element={<Create />} />
  <Route path="/edit/:id" element={<Edit />} />
</Routes>


    </div>
  )
}

export default App
