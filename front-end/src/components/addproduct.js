import React from "react";
import { useState } from "react";
const Addproduct = () => {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");

const handleaddproduct= async()=>{
    console.warn(name,price,category,company);
    const userid=JSON.parse(localStorage.getItem('user'))._id;
    let result=await fetch("http://localhost:5000/add-product",{
        method:"POST",
        body:JSON.stringify({name,price,category,company,userid}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result=await result.json();
    console.warn(result);
}

  return (
    <div className="addproduct">
      <h1>Add product</h1>
      <input
        type="text"
        className="input-box"
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
        placeholder="Enter product name"
      />
      <input
        type="text"
        className="input-box"
        value={price}
        onChange={(e)=>{setprice(e.target.value)}}
        placeholder="Enter product price"
      />
      <input
        type="text"
        className="input-box"
        value={category}
        onChange={(e)=>{setcategory(e.target.value)}}
        placeholder="Enter product category"
      />
      <input
        type="text"
        className="input-box"
        value={company}
        onChange={(e)=>{setcompany(e.target.value)}}
        placeholder="Enter product company"
      />
      <button onClick={handleaddproduct}>Add product</button>
    </div>
  );
};

export default Addproduct;
