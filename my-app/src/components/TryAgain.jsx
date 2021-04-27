import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const TryAgain = ({ score, question }) => {
  const [IsAgain, setIsAgain] = useState(false);

  const history = useHistory();
  const changeRoute = () => history.push("/");

  const addLocal = () => {
    let attempts = {
      score: score,
    };
    const arr = JSON.parse(localStorage.getItem("scores")) || [];
    arr.push(attempts);
    localStorage.setItem("scores", JSON.stringify(arr));
  };

  return (
    <div>
      Hello World!
      <p>
        {score}/{question.length}
      </p>
      <button
        onClick={() => {
          changeRoute();
        }}
      >
        try again
      </button>
      <h1>Do you want To save this attempt?</h1>
      <button onClick={changeRoute}>No</button>
      <button
        onClick={() => {
          addLocal();
          changeRoute();
        }}
      >
        Yes
      </button>
    </div>
  );
};

export default TryAgain;
