import React from "react";
import Index from "./Index";

function CreatingCard() {
  return (
    <div className="flex flex-col relative scale-100">
      <Index />
      <div className="bg-blue-100">
        <h1
          style={{ background: "#231955" }}
          className="flex items-center justify-center p-5 text-4xl text-blue-100"
        >
          ✍️ Create a New card
        </h1>
        <div className="flex justify-center items-center">
          <form className="bg-blue-500 w-1/4 p-5 m-5 rounded-xl text-blue-100">
            <div>
              <h1>Question</h1>
              <input
                type="text"
                name="question"
                id="quetion"
                className="w-full text-blue-500 p-2 rounded-md"
              />
            </div>
            <div>
              <h1 className="mt-2">Answer</h1>
              <input
                type="text"
                name="answer"
                id="answer"
                className="w-full rounded-md text-blue-500  p-2"
              />
            </div>
            <button
              type="submit"
              style={{ background: "#231955" }}
              className="w-full mt-5 rounded-md p-2"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatingCard;
