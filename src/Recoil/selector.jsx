import { selector } from "recoil";
import chemistryQuestions from "../Components/Screen2/Chemistry.js";
import mathsQuestions from "../Components/Screen2/Maths.js";
import physicsQuestions from "../Components/Screen2/Physics.js";
import { category, scores, user } from "./atom.jsx";

const userName = selector({
  key: "userName",
  get: ({ get }) => {
    const users = get(user);
    return users;
  },
});

const subject = selector({
  key: "subject",
  get: ({ get }) => {
    const subj = get(category);
    return subj;
  },
});

const questState = selector({
  key: "questionState",
  get: ({ get }) => {
    const categor = get(category);
    console.log(categor);
    switch (categor) {
      case "physics":
        return physicsQuestions;
      case "chemistry":
        return chemistryQuestions;
      case "maths":
        return mathsQuestions;
      default:
        return "";
    }
  },
});

const scoreVal = selector({
  key: "scoreVal",
  get: ({ get }) => {
    const val = get(scores);
    return val;
  },
});

export { questState, scoreVal, subject, userName };
