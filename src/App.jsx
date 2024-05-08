import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Detail from "./components/Detail/Detail";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Read from "./components/Read/Read";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("MyToken");
    if (!token) {
      // Redirect to login page if no token is found
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Provider store={store}>
      <>
        <Header/>
      <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Category />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/read' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/productlist' element={<ProductList />} />
        
        {/* Redirect to dashboard by default */}
        <Route path="*" element={<Login/>}/>
      </Routes>
    </>
      </Provider>
  );
}

export default App;
