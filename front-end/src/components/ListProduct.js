import React from "react";
import { useState, useEffect } from "react";


const ListProduct = () => {
const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/list-products");
    result = await result.json();
    setproducts(result);
  }
console.warn(products);
  return (
    <div className="product-list">
      <h1>list of products</h1>
      <ul>
        <li>s.no</li>
        <li>name</li>
        <li>price</li>
        <li>category</li>
        <li>company</li>
      </ul>
      {
      products.map((item) => (
        <ul>
          <li>{item._id}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
        </ul>
      ))}
      </div >
  );
};

export default ListProduct;
