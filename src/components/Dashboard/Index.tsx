import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
function Index() {
  return (
    <div className="bg-blue-900 h-15 w-full text-white flex pt-5 justify-evenly relative">
      <div className="flex">
        <Link to="/">
          <img
            src={logo}
            style={{ height: "10vh", width: "10vw" }}
            className="flex justify-center m-5"
          />
        </Link>
        <h1 style={{ lineHeight: "2.5rem" }} className="text-4xl pl-10 pr-10 ">
          Dash board
        </h1>
      </div>
      <div className="flex  gap-0 ">
        <Link to="/">
          <button
            style={{ background: "#231955" }}
            className=" w-full p-5 border border-l-0 border-blue-400"
          >
            Home
          </button>
        </Link>
        <Link to="/view-all-cards">
          <button
            style={{ background: "#231955" }}
            className=" w-full p-5 border border-l-0 border-blue-400"
          >
            All Cards
          </button>
        </Link>

        <Link to="/create-card">
          <button
            style={{ background: "#231955" }}
            className=" w-full p-5 border border-l-0 border-blue-400 hover:bg-blue-500"
          >
            Create Card
          </button>
        </Link>
        <Link to="/logout">
          <button
            style={{ background: "#231955" }}
            className=" w-full p-5 border border-l-0 border-blue-400 hover:bg-blue-500"
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
