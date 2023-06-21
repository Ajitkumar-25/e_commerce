import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginhandle = () => {
    console.warn(email, password);
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
