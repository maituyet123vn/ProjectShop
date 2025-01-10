import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Login from './pages/Login';
import Cart from './pages/Cart';
import AdminProductList from './pages/admin/AdminProductList';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import AdminCategoryList from './pages/admin/AdminCategoryList';
import AddCategory from './pages/admin/AddCategory';
import EditCategory from './pages/admin/EditCategory';

function App(props) {
  return (
    <>
      <Header />
      <div className="container mt-5">
        {/* <h1>Author: {props.author} - Time: {props.timeAgo}</h1> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin/products' element={<AdminProductList/>} />
          <Route path='/admin/add-product' element={<AddProduct/>} />
          <Route path='/admin/edit-product/:id' element={<EditProduct/>} />
          <Route path='/admin/categories' element={<AdminCategoryList/>} />
          <Route path='/admin/add-category' element={<AddCategory/>} />
          <Route path='/admin/edit-category/:id' element={<EditCategory/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
