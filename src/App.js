import React, { useState } from "react";
import "./App.css";
import { Login, Header } from "./Component/index";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [profile, setProfile] = useState({ user_name: "", logo: "" });

  return (
    <div className="App">
      <Router>
        <NavBar profile={profile} setProfile={setProfile} />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/login"
            element={<Login profile={profile} setProfile={setProfile} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
