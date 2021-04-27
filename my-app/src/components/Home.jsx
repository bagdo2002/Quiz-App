import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [local, setLocal] = useState([]);

  const changeRoute = () => {
    history.push("/quizz");
  };

  const seeHistory = () => {
    const localStore = JSON.stringify(
      JSON.parse(localStorage.getItem("scores"))
    );
    setLocal([...localStore]);
  };

  return (
    <div className="quizz">
      <div className="start">
        <button className="btn-start" onClick={changeRoute}>
          Start Quiz
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
            seeHistory();
          }}
        >
          History
        </button>
        {isOpen ? <div>{local}</div> : null}
      </div>
    </div>
  );
};

export default Home;
