import React from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div>
      <Link to="/s2" >
        <button className={`${style.btn}`}>Go To Start</button>
      </Link>
    </div>
  );
}
