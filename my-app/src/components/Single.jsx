import React, { useState, useEffect } from "react";

const Single = ({
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
  const check = (id) => {
    id + 1 === 3 ? setIsCorect("#32CD32") : setIsCorect("#FF6347");
  };
  const qula = () => {
    isCorect === "#32CD32" ? setScore(score + 1) : setScore(score);
  };

  return (
    <div style={{ backgroundColor: isCorect }}>
      {question !== null &&
        question.options.map((el, index) => (
          <button
            key={index}
            onClick={() => {
              check(index);
            }}
          >
            {el}
          </button>
        ))}
      <div>{questions !== null && question.question}</div>
      <p>{score}</p>
      <button
        onClick={() => {
          click();
          qula();
        }}
      >
        next
      </button>

      {}
    </div>
  );
};

export default Single;
