import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import NewProduct from '../pages/NewProduct';
import UpdateProduct from '../pages/UpdateProduct';

const AppRouter = () => {
  return (
 <Router>
     <Navbar />
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products/:id" element={<Detail />} />
         <Route path="/newproduct" element={<NewProduct />} />
         <Route path="/update/:id" element={<UpdateProduct />} />
     </Routes>
 </Router>
  )
}

export default AppRouter