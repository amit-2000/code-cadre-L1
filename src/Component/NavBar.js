import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = ({ profile, setProfile }) => {
  const token = localStorage.getItem("user");
  const [isLoggedin, setIsloggedin] = useState(true);
  console.log(token, isLoggedin);
  const handleRemove = () => {
    localStorage.removeItem("user");
    setProfile({ user_name: "", logo: "" });
    setIsloggedin(false);
  };
  return (
    <div className="logo__container">
      {token ? (
        <div>
          <nav className="logo__container-nav">
            {/* <img src={profile.logo} alt="logo" /> */}
            <span>{profile.user_name}</span>
            <span onClick={handleRemove}>Logout</span>
          </nav>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
