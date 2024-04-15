// Select.jsx

import React from "react";
import style from "./Select.module.css";
import { category } from "../../Recoil/atom";
import { useRecoilState } from "recoil";

export default function Select() {

  const [subject, setSubject] = useRecoilState(category);


  function handleChange(e) {
    setSubject(e.target.value);
  }

  return (
    <div>
      <form className={style.form}>
        <select
          id="opt"
          onChange={handleChange}
          className={style.select}
          value={subject}
        >
          <option value="">Subject</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="maths">Maths</option>
        </select>
      </form>
    </div>
  );
}
