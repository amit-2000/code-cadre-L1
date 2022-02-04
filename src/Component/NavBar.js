import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GitHubIcon from "@material-ui/icons/GitHub";
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
            {/* <GitHubIcon /> */}
            <a
              href="https://github.com/amit-2000/code-cadre-L1"
              className="logo__container-github"
            >
              GitHub
            </a>
            <span onClick={handleRemove}>Logout</span>
          </nav>
        </div>
      ) : (
        <nav className="logo__container-nav">
          <a
            href="https://github.com/amit-2000/code-cadre-L1"
            className="logo__container-github"
          >
            GitHub
          </a>
          <Link to="/login">Login</Link>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
