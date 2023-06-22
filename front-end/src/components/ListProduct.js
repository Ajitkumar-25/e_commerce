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

const handledeleteproducts=async(id)=>{
    let result =await fetch(`http://localhost:5000/delete-product/${id}`,{
      method:"DELETE"
    });
    result = await result.json();
    if(result)
    {
      alert("product deleted successfully");
      getProducts();
    }
    
}

  return (
    <div className="product-list">
      <h1>list of products</h1>
      <ul>
        <li>s.no</li>
        <li>name</li>
        <li>price</li>
        <li>category</li>
        <li>company</li>
        <li>operations</li>
      </ul>
      {
      products.map((item,index) => (
        <ul key={item._id}>
          <li>{index+1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li><button onClick={()=>handledeleteproducts(item._id)}>delete</button></li>
        </ul>
      ))}
      </div >
  );
};

export default ListProduct;
