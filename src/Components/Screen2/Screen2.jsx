import React from "react";
import style from "./Screen2.module.css";
import Question from "./Question.jsx";
import { Link } from "react-router-dom";

export default function Screen2() {
  function handleClick() {
    alert(
      "Are you sure you want to submit the test? Please ensure all answers are checked properly before submission."
    );
  }

  return (
    <div className={style.ques}>
      <div className={style.head}>
        <h2>Marking :</h2>
        <Link to="/result">
          <button onClick={handleClick}>Submit</button>
        </Link>
      </div>

      <div className={style.marking}>
        +2: correct answer
        <br /> -1: wrong answer <br /> +0: unattempt question
      </div>
      <Question className={style.ques} />
    </div>
  );
}
