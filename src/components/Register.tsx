import React, { useState, useContext, SyntheticEvent } from "react";
import { Themecontext } from "./context/ThemeContext";
import Navigation from "./Home/NavBar/Navigation";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const theme = useContext(Themecontext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  const handleSumitRegister = (e: SyntheticEvent) => {
    e.preventDefault();

    let isValid: boolean = true;
    const validEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validPassword: any =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!email || !password || !fullname) {
      setError("All field are required");
      isValid = false;
    }
    if (!email.match(validEmail)) {
      setEmailError("Email is not valid");
      isValid = false;
    }
    if (password.length < 4 || password.length > 15) {
      setPasswordError("Check password length");
      isValid = false;
    }
    if (password.includes(validPassword)) {
      setPasswordError("Enter Strong Password");
      isValid = false;
    }
    if (email && password) {
      setError("Well done");
      isValid = true;
    }
    if (!isValid) {
      return;
    }
    navigate("/login");
  };

  return (
    <div className="font-serif">
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "33%",
            padding: "25px",
            backgroundColor: "#eee",
            borderRadius: "20px",
            border: "none",
            boxShadow: "12px 20px #ddd",
          }}
        >
          <h1
            style={{ display: "flex", justifyContent: "center" }}
            className="text-3xl font-serif"
          >
            🔥 Register To Start
          </h1>
          <form onSubmit={handleSumitRegister}>
            <div>
              <br />

              {error && <p className="text-red-500">{error}</p>}
              <label>Full Name:</label>
              <br />
              <input
                type="text"
                id="fullname"
                style={{
                  padding: "10px",
                  width: "30vw",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div>
              <br />
              <label>Enter Email:</label>
              <br />
              <input
                type="email"
                id="email"
                style={{
                  padding: "10px",
                  width: "30vw",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                onChange={(e) => {
                  setEmailError("");
                  setEmail(e.target.value);
                }}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <br />
              <label>Password:</label>
              <br />
              <input
                type="password"
                id="password"
                style={{
                  padding: "10px",
                  width: "30vw",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                onChange={(e) => {
                  setPasswordError("");
                  setPassword(e.target.value);
                }}
              />
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <button
              style={{
                background: theme.primary.main,
                color: "white",
                width: "30vw",
                padding: "10px",
                marginTop: "30px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
