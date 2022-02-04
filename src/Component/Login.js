import React, { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";

const Login = ({ profile, setProfile }) => {
  const [name, setName] = useState("");
  // const [logo, setLogo] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = name + " 😄";
    setProfile({ user_name: newName, logo: "Logo" });
    localStorage.setItem("user", true);
    console.log("handle submit called");
  };
  if (profile.user_name.length > 0) {
    return <Navigate to="/" />;
  }
  const handleShowPassword = () => {
    setShow(!show);
    return;
  };

  const handleShowPasswordHideOnMouseOut = () => {
    setShow(false);
    return;
  };

  return (
    <div className="form__container">
      <form className="form__container-flex" onSubmit={(e) => handleSubmit(e)}>
        <label className="form__container-label">
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="form__container-label">
          password:
          <input
            className="login__input"
            type={show ? "text" : "password"}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <p
          onMouseDown={handleShowPassword}
          onMouseUp={handleShowPassword}
          onMouseOut={handleShowPasswordHideOnMouseOut}
          className="login__showPassword"
        >
          {/* <RemoveRedEyeIcon className="login__showPassword__eye" /> */}
          show password
        </p>
        <input
          className="form__container-submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;
