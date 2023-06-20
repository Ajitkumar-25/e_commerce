import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Nav = () => {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();

// logout feature it is just clearing local storage 
  const logout=()=>{
    localStorage.clear();
    navigate('/')
  }


  return <div>
    <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add"> Add Products</Link></li>
        <li><Link to="/update"> Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* agar user sign in hai to logout ka option dega varna sign up ka  */}
        <li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">Signup</Link>}</li>
        
    </ul>
  </div>;
};
export default Nav;