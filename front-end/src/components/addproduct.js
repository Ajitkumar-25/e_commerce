import React from "react";
import { useState } from "react";
const Addproduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [error, seterror] = useState(false);

  const handleaddproduct = async () => {
    if (!name || !price || !category || !company) {
      seterror(true);
      return false;
    }

    console.warn(name, price, category, company);
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userid }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="addproduct">
      <h1>Add product</h1>
      <input
        type="text"
        className="input-box"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Enter product name"
      />
      {error && !name && (
        <span className="invalid-input">Please enter valid name</span>
      )}

      <input
        type="text"
        className="input-box"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
        placeholder="Enter product price"
      />
      {error && !price && (
        <span className="invalid-input">Please enter valid price</span>
      )}

      <input
        type="text"
        className="input-box"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        placeholder="Enter product category"
      />

      {error && !category && (
        <span className="invalid-input">Please enter valid category</span>
      )}

      <input
        type="text"
        className="input-box"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
        placeholder="Enter product company"
      />

      {error && !company && (
        <span className="invalid-input">Please enter valid company</span>
      )}

      <button onClick={handleaddproduct}>Add product</button>
    </div>
  );
};

export default Addproduct;
