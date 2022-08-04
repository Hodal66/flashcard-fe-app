import React from "react";
import Navigation from "./NavBar/Navigation";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontSize: "32px", fontFamily: "cursive", padding: "20px" }}
        >
          Welcome to this page
        </h1>
        <div className="md:text-lg">
          <p style={{ width: "50vw", fontSize: "24px", color: "#777" }}>
            Flashcards are small note cards used for testing and improving
            memory through practiced information retrieval. Flashcards are
            typically two-sided, with the prompt on one side and the information
            about the prompt on the other. <br />
            <br />
            This is a time to create, read, update and delete interaction web
            based,this help us to study randomly by selecting questions and see
            the answer
          </p>
          <Link to="/dashboard">
            <button
              style={{
                background: "#0a275b",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "10px",
                border: "none",
                marginTop: "1rem",
                padding: "10px 30px",
              }}
            >
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
