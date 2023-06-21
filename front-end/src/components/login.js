import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const loginhandle = async () => {
    console.warn("email,password", email, password);

    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        className="input-box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="write your email"
      />
      <input
        type="password"
        className="input-box"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="write your password"
      />
      <button onClick={loginhandle}>Sumbit </button>
    </div>
  );
};

export default Login;
