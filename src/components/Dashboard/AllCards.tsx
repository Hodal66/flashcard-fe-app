import React from "react";
import Index from "./Index";

function AllCards() {
  return (
    <div className="flex flex-col">
      <Index />
      <div className="">
        <h1
          style={{ background: "#231955" }}
          className="flex items-center justify-center p-5 text-4xl text-blue-100"
        >
          🌝 See all cards available
        </h1>
        <div className=" flex justify-center gap-5 items-center h-64 w-full bg-blue-100">
          <div className="bg-blue-500 flex flex-col justify-center items-center w-1/4 h-48 border rounded-md p-5 text-blue-200">
            <h1 className="pb-2 text-2xl">Question 1</h1>
            <p className="text-lg">can you solve this ?</p>
            <p>20 - 0.5 = . ?</p>
          </div>
          <div className="bg-blue-500 flex flex-col justify-center items-center w-1/4 h-48 border rounded-md p-5 text-blue-200">
            <h1 className="pb-2 text-2xl">Question 2</h1>
            <p className="text-lg">can you solve this ?</p>
            <p>20 - 0.5 = . ?</p>
          </div>
          <div className="bg-blue-500 flex flex-col justify-center items-center w-1/4 h-48 border rounded-md p-5 text-blue-200">
            <h1 className="pb-2 text-2xl">Question 3</h1>
            <p className="text-lg">can you solve this ?</p>
            <p>20 - 0.5 = . ?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCards;
