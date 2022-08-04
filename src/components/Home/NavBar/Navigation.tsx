import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";
function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="font-serif nagivation main">
      <div>
        <img
          src={logo}
          alt="hodalLogo"
          style={{
            width: "20vh",
            height: "10vh",
            marginInlineStart: "2rem",
            marginBottom: "2rem",
          }}
        />
      </div>
      {/* here is the stating of nav-menus */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Link to="/">
          <li>
            {" "}
            <span>Home</span>
          </li>
        </Link>

        <Link to="/login">
          <li>
            <span>Login</span>
          </li>
        </Link>
        <Link to="/register">
          <li>
            <span>Register</span>
          </li>
        </Link>
      </ul>
      <div className="humberger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "white" }} />
        ) : (
          <FaBars size={30} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
