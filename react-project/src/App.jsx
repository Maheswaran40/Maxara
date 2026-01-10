import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import "./index.css"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Error from './pages/Error'
import Context from './contextfile/Context' 
import Product from './pages/Product'
import Scrolltop from './pages/Scrolltop'
import Form from './pages/Form'
import Singup from './pages/Singup'
import Header_nav from './CommonComponents/Header_nav'
import Footer from './CommonComponents/Footer'
import Shoes from './pages/Allproduct/shoes/Shoes'
import Caps from './pages/Allproduct/Caps'
import Bags from './pages/Allproduct/Bags'
import Sleeves from './pages/Allproduct/Sleeves'
import Tshirts from './pages/Allproduct/Tshirts'
import Cycle from './pages/Allproduct/Cycle'
import Pants from './pages/Allproduct/Pants'
import Shirts from './pages/Allproduct/Shirts'
import Outdoor from './pages/Allproduct/Outdoor'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import ProtectedRoute from './ProtectedRoute';
import setupLocatorUI from "@locator/runtime";



function Layout() {
const location=useLocation()
const hideLayout=location.pathname==="/" || location.pathname==="/singup"
if (import.meta.env.DEV) {
  setupLocatorUI();
}

  return (
    <>
      <Scrolltop />
     {!hideLayout && <Header_nav/>}
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/singup' element={<Singup/>} />
        <Route path='/home' element={ <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>} />
        <Route path='/faq' element={<ProtectedRoute><Faq/></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>} />
        {/* product pages */}
        <Route path='/shoes' element={<ProtectedRoute><Shoes/></ProtectedRoute>} />
        <Route path='/caps' element={<ProtectedRoute><Caps/></ProtectedRoute>} />
        <Route path='/bags' element={<ProtectedRoute><Bags/></ProtectedRoute>} />
        <Route path='/sleeves' element={<ProtectedRoute><Sleeves/></ProtectedRoute>} />
        <Route path='/tshirts' element={<ProtectedRoute><Tshirts/></ProtectedRoute>} />
        <Route path='/cycle' element={<ProtectedRoute><Cycle/></ProtectedRoute>} />
        <Route path='/pants' element={<ProtectedRoute><Pants/></ProtectedRoute>} />
        <Route path='/shirts' element={<ProtectedRoute><Shirts/></ProtectedRoute>} />
        <Route path='/outdoor' element={<ProtectedRoute><Outdoor/></ProtectedRoute>} />
        <Route path='/shop' element={<ProtectedRoute><Shop/></ProtectedRoute>} />
        <Route path="/shop/:navid" element={<ProtectedRoute><Product/></ProtectedRoute>}/>
        <Route path="/product/:proid" element={<ProtectedRoute><Product2/></ProtectedRoute>}/>
        <Route path="/product3/:pro3id" element={<ProtectedRoute><Product3/></ProtectedRoute>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
     {!hideLayout && <Footer/>}
     {!hideLayout && <div id="navtop" style={{width:"100vw", position: "fixed",bottom:"100px", zIndex : '11'}}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "center",
              fontSize: "small",
               height: "50px",
            width: "50px",
            backgroundColor: "#f5bf4a",
            position: "absolute",
            right: "50px",
            top: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            }}
          >
           <i className="fa-solid fa-arrow-up"></i>
          </a>
      </div>}
          {/* Your Routes / Components */}
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  )
}

export default function App (){
   return (
    <BrowserRouter>
      <Context>
        <Layout />
      </Context>
    </BrowserRouter>
  );
}
