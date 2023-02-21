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

// interface Product {
//   id: number;
//   productName: string;
//   price: number;
//   image: string;
// }

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

    // axios.get<Product[]>(url).then((res) => setProducts(res.data));

    // axios.get("/products").then((response) => {
    //   setProducts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, "productList");

  return (
    <div className="products">
      {/* <UserForm /> */}



      {/* <Routes>
        <Route path="login" /> element = {<UsersForm />} >
        
      </Route>
    </Routes> */}


      {/* <h1>Products</h1>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <img src={`http://localhost:8000/${product.image}`}
              alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            < hr />
          </li>
        ))}
      </ol> */}
      <Routes>
        <Route path="/login"  element = {<UsersForm />}></Route>
        <Route path="/user"  element = {<UserInformation />}></Route>
     
    </Routes>

  </div >

  );
}

export default App;

/** We use useEffect in React functional components to perform side effects like fetching data from an API,
 * manipulating the DOM, setting up event listeners, etc.
 * useEffect is a hook that allows you to run a function after rendering and re-rendering of the component,
 * and it takes a function and an array of dependencies as arguments.
 * The function inside useEffect runs after the component renders and when
 * any of the values in the dependency array change.
 * It helps to manage state changes and avoid infinite loops. */
