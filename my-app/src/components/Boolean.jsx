import React, { useState } from "react";

const Boolean = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState(null);
  const check = (bool) => {
    bool === answer.answer ? setIsCorect("#32CD32") : setIsCorect("#FF6347");
  };
  const qula = () => {
    isCorect === "#32CD32" ? setScore(score + 1) : setScore(score);
  };
  return (
    <div style={{ backgroundColor: isCorect }}>
      {" "}
      <h2 className="question">{question.question}</h2>
      <button
        className="mt"
        color="primary"
        onClick={() => {
          setSelected(0 + 1);
          check(true);
        }}
        active={Selected === 0 + 1}
      >
        True
      </button>
      <button
        className="mt"
        color="primary"
        onClick={() => {
          setSelected(0 + 1);
          check(false);
        }}
        active={Selected === 1 + 1}
      >
        False
      </button>
      <p>{score}</p>
      <buuton
        onClick={() => {
          click();
          qula();
        }}
      >
        next
      </buuton>
    </div>
  );
};

export default Boolean;
