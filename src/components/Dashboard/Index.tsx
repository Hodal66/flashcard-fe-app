import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { AiFillFolderAdd } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
function Index() {
  return (
    <div className="bg-blue-900 h-15 w-full text-white flex pt-5 justify-evenly border">
      <div className="flex">
        <Link to="/">
          <img
            src={logo}
            style={{ height: "10vh", width: "10vw" }}
            className="flex justify-center m-5"
            alt="mylogo"
          />
        </Link>
        <h1 style={{ lineHeight: "2.5rem" }} className="text-4xl pl-10 pr-10 ">
          Dash board
        </h1>
      </div>
      <div className="flex  gap-0 ">
        <Link to="/">
          <button style={{ background: "#0a275b" }} className=" w-full p-5 m-2">
            🏙 Home
          </button>
        </Link>
        <Link to="/view-all-cards">
          <button
            style={{ background: "#0a275b" }}
            className=" w-full p-5 m-2 flex gap-3 align-baseline"
          >
            <GrStorage className="text-2xl text-sky-200" /> All Cards
          </button>
        </Link>

        <Link to="/create-card">
          <button
            style={{ background: "#0a275b" }}
            className=" w-full p-5 m-2 flex gap-2 align-baseline"
          >
            <AiFillFolderAdd className="text-2xl" /> Create Card
          </button>
        </Link>
        <Link to="/">
          <button style={{ background: "#0a275b" }} className=" w-full p-5 m-2">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
