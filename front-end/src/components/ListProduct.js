import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/list-products");
    result = await result.json();
    setproducts(result);
  };

  const handledeleteproducts = async (id) => {
    let result = await fetch(`http://localhost:5000/delete-product/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("product deleted successfully");
      getProducts();
    }
  };

  const searchhandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch("http://localhost:5000/search/" + key);
      result = await result.json();
      if (result) {
        setproducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>list of products</h1>
      <input
        type="search"
        className="search-box"
        placeholder="search product "
        onChange={searchhandle}
      />
      <ul>
        <li>s.no</li>
        <li>name</li>
        <li>price</li>
        <li>category</li>
        <li>company</li>
        <li>operations</li>
      </ul>
      {
      products.length>0? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={() => handledeleteproducts(item._id)}>
              delete
            </button>
            <Link to={`update/${item._id}`}>Update</Link>
          </li>
        </ul>
      ))
      :<h1>no products found</h1>}
    </div>
  );
};

export default ListProduct;
