import React from "react";
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    const auth=localStorage.getItem('user');
    if(auth)
    {
      navigate('/');
    }
  })
  



  const collectdata = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result=await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result))
    navigate('/');
    
  };



  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="input-box"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
      <input
        className="input-box"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
      <input
        className="input-box"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={collectdata}>SignUp</button>
    </div>
  );
};

export default SignUp;
