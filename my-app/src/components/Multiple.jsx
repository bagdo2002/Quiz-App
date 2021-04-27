import React, { useState } from "react";

const Multiple = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState([]);

  const onCheck = (selected) => {
    const index = Selected.indexOf(selected);
    if (index < 0) {
      Selected.push(selected);
    } else {
      Selected.splice(index, 1);
    }
    setSelected([...Selected]);
  };
  const check = () => {
    (answer.answer[0] === Selected[0] || answer.answer[0] === Selected[1]) &&
    (answer.answer[1] === Selected[0] || answer.answer[1] === Selected[1])
      ? setIsCorect("#32CD32")
      : setIsCorect("#FF6347");
  };
  const qula = () => {
    if (
      (answer.answer[0] === Selected[0] || answer.answer[0] === Selected[1]) &&
      (answer.answer[1] === Selected[0] || answer.answer[1] === Selected[1])
    ) {
      setScore(score + 1);
    }
  };
  return (
    <div style={{ backgroundColor: isCorect }}>
      <div>{question.question}</div>
      {question.options.map((item, idx) => (
        <button
          className="mt"
          key={idx}
          color="primary"
          onClick={() => onCheck(idx + 1)}
        >
          {item}
        </button>
      ))}
      <p>Selected: {JSON.stringify(Selected)}</p>
      <button onClick={() => check()}>check</button>
      <buuton
        onClick={() => {
          click();
          qula();
        }}
      >
        next
      </buuton>
      <p>{score}</p>
    </div>
  );
};

export default Multiple;
