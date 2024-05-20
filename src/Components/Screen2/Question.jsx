import React, { useState} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { questState } from "../../Recoil/selector";
import { scores } from "../../Recoil/atom";
import style from "./Question.module.css";

export default function Question() {
  const questions = useRecoilValue(questState);

  const [currInd, setCurrInd] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useRecoilState(scores);

  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "previous") {
      setCurrInd((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (value === "save") {
      console.log("Saved");
      if (selectedOptions[currInd] === null) {
        return;
      }
      const corrAns = questions[currInd].answer;
      const newScore =
        selectedOptions[currInd] === corrAns ? score + 2 : score - 1;
      setScore(newScore); // Update score state
      console.log("Score:", newScore);
    } else if (value === "next") {
      setCurrInd((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [currInd]: value,
    }));
  };

  return (
    <div className={style.body}>
      {!questions ? (
        <h1 className={style.err}>Please choose any one subject!</h1>
      ) : (
        <div key={currInd} className={style.ques}>
          <p>
            Q[{questions[currInd].n}]. {questions[currInd].q}
          </p>

          <ul className={style.opt}>
            {Object.keys(questions[currInd].option).map((key) => (
              <li key={key}>
                <input
                  type="radio"
                  id="username"
                  name={`question-${questions[currInd].n}`}
                  value={key}
                  checked={selectedOptions[currInd] === key} // This ensures the selected option is checked
                  onChange={handleChange}
                />

                <label htmlFor="username">
                  {questions[currInd].option[key]}
                </label>
              </li>
            ))}
          </ul>
          <div className={style.btn}>
            <button
              className={style.pBtn}
              value="previous"
              onClick={handleClick}
              disabled={currInd === 0} // Disable if it's the first question
            >
              Prev
            </button>
            <button className={style.sBtn} value="save" onClick={handleClick}>
              Save
            </button>
            <button
              className={style.nBtn}
              value="next"
              onClick={handleClick}
              disabled={currInd === questions.length - 1} // Disable if it's the last question
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
