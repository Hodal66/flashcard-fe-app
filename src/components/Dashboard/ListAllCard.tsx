import React from "react";
type ListOfCardProps = {
  myQuestionList: {
    id: number;
    question: string;
    answer: string;
  }[];
};
function ListAllCard(props: ListOfCardProps) {
  return (
    <div>
<<<<<<< HEAD
      {props.myQuestionList.map((data) => {
=======
      {props.QuestionList.map((data) => {
>>>>>>> 393646275b072936255d3eabe206accffa5d2c9d
        return (
          <div className=" flex justify-center gap-5 items-center h-64 w-full bg-blue-100">
            <div className="bg-blue-500 flex flex-col justify-center items-center w-1/4 h-48 border rounded-md p-5 text-blue-200">
              <h1 className="pb-2 text-2xl" key={data.id}>
                Question {data.id}
              </h1>
              <p className="text-lg">{data.question}</p>
              <p>{data.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListAllCard;
