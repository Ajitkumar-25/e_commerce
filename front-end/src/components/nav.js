import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  // logout feature it is just clearing local storage
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <img
        src="https://th.bing.com/th/id/OIP.O5ip3Cal9h_8WUar84JeMAHaFP?w=214&h=180&c=7&r=0&o=5&pid=1.7"
        alt="hula" className="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add"> Add Products</Link>
          </li>
          <li>
            <Link to="/update"> Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
