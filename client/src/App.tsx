import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserForm from "./components/userForm/UserssForm";
import { Route, Routes } from "react-router-dom";
import UsersForm from "./components/userForm/UserssForm"
import UserInformation from "./components/userInformation/UserInformation";


type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
};



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  //method:get
  //endpoint: http://localhost:8000/products/

  const url = "http://localhost:8000/products/";

  //axios
  function fetchData() {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setProducts(data));

   
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, "productList");

  return (
    <div className="products">
    
      <Routes>
        <Route path="/login"  element = {<UsersForm />}></Route>
        <Route path="/user"  element = {<UserInformation />}></Route>
     
    </Routes>

  </div >

  );
}

export default App;


