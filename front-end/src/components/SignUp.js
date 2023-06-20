import React from "react";
import { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectdata=()=>{
    console.warn(name,email,password);
  }
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
