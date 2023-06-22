import React, { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { useState } from "react";
const UpdateProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
    const params = useParams();


    useEffect(() => {
        getproductdetail();
      }, []);
    

    const getproductdetail=async()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
         result = await result.json();
            console.log(result);
            setname(result.name);
            setprice(result.price);
            setcategory(result.category);
            setcompany(result.company);
    }

  const updateproduct = () => {
    console.log(name, price, category, company);

  };

  return (
    <div className="addproduct">
      <h1>update product</h1>
      <input
        type="text"
        className="input-box"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Enter product name"
      />

      <input
        type="text"
        className="input-box"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
        placeholder="Enter product price"
      />

      <input
        type="text"
        className="input-box"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        placeholder="Enter product category"
      />
      <input
        type="text"
        className="input-box"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
        placeholder="Enter product company"
      />
      <button onClick={updateproduct}>update product</button>
    </div>
  );
};

export default UpdateProduct;
