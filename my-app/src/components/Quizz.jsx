import React, { useState, useEffect } from "react";
import Single from "./Single";
import Boolean from "./Boolean";
import Multiple from "./Multiple";
import TryAgain from "./TryAgain";
const Quizz = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [qurrentId, setQurrentID] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState([]);
  const url =
    "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.questions);
        setAnswer(data.answers);
      });
  }, []);

  const next = () => {
    setQurrentID(qurrentId + 1);
  };

  return answer ? (
    qurrentId < question.length ? (
      question[qurrentId].type === "single" ? (
        <Single
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      ) : question[qurrentId].type === "multiple" ? (
        <Multiple
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      ) : (
        <Boolean
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      )
    ) : (
      <TryAgain score={score} question={question} />
    )
  ) : null;
};

export default Quizz;
