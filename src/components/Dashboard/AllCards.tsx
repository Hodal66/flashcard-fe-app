import React from "react";
import Index from "./Index";
import ListAllCard from "./ListAllCard";

function AllCards() {
  const data = [
    {
      id: 1,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 2,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 3,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 4,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 1,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 2,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 3,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
    {
      id: 4,
      question: "give the answer of 2 + 2",
      answer: "4",
    },
  ];

  return (
    <div className="flex flex-col ">
      <Index />
      <div className="relative w-full">
        <h1
          style={{ background: "#231955" }}
          className="flex items-center justify-center p-5 text-4xl text-blue-100"
        >
          🌝 See all cards available
        </h1>

        <ListAllCard myQuestionList={data} />
      </div>
    </div>
  );
}

export default AllCards;
