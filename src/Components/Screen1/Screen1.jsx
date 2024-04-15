import React, { useState } from "react";
import Select from "./Select";
import style from "./Screen1.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {user} from '../../Recoil/atom';

export default function Screen1() {
  const [username, setUsername] = useRecoilState(user);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !agree) {
      setError("Please fill in all details.");
    } else {
      // setError("");
      navigate("/s2");
    }
  };

  return (
    <>
      <h1 className={style.head}>Quiz App</h1>
      <div className={style.quizBody}>
        <form>
          <input
            type="text"
            placeholder="Username"
            className={style.inpt}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className={style.select}>
            <Select
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className={style.condition}>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
            />
            Agree & Continue
          </div>
          <div className={style.error}>{error}</div>
          <div className={style.btn}>
            <button onClick={handleSubmit}>Go to Start</button>
          </div>
        </form>
      </div>
    </>
  );
}
