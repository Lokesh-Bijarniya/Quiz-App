import React from "react";
import { userName, scoreVal } from "../../Recoil/selector";
import { useRecoilValue } from "recoil";
import style from "./Result.module.css";
import { category } from "../../Recoil/atom";

export default function Result() {
  const val = useRecoilValue(scoreVal);
  const user = useRecoilValue(userName);
  const subject = useRecoilValue(category);

  return (
    <div className="bodys">
      <h1 className={style.head1}>
        Congratulations {user}! Your test has been submitted successfully.
      </h1>
      <h2 className={style.head2}>
        Your {subject} marks : {val}{" "}
      </h2>
      <h3 className={style.head3}>💥Better Luck For Next Time 💻</h3>
    </div>
  );
}
