import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Quizz from "./components/Quizz";
function App() {
  return (
    <BrowserRouter>
      <div>Answers: 1-3, 2-1,2 3-true</div>
      <Route path="/" exact component={Home} />
      <Route path="/quizz" component={Quizz} />
    </BrowserRouter>
  );
}
export default App;
