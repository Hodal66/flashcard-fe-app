import React, { useState, useContext, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "./context/ThemeContext";
import Navigation from "./Home/NavBar/Navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AuthUser = {
  email: String;
  password: String;
};

function Login() {
  const notify = async () => toast.success("Well Done !");

  const navigate = useNavigate();
  const theme = useContext(Themecontext);
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [emailError, setEmailError] = useState<string | undefined>("");
  const [passwordError, setPasswordError] = useState<string | undefined>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    let isFormValid = true;

    if (!email) {
      setEmailError("email is required!!");
      isFormValid = false;
    }
    if (!password) {
      setPasswordError("password is required");
      isFormValid = false;
    }

    if (!isFormValid) {
      return;
    }
    notify();
    navigate("/dashboard");
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
            Login now 👐
          </h1>
          <form onSubmit={handleSubmit}>
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
                  setEmailError(undefined);
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
                  setPasswordError(undefined);
                  setPassword(e.target.value);
                }}
              />
              {passwordError && (
                <p className="text-red-500 ">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
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
              Login
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
