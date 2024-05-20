import React from "react";
import Screen1 from "./Components/Screen1/Screen1";
import Screen2 from "./Components/Screen2/Screen2";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Result from "./Components/Screen2/Result";

function App() {
  return (
    <>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/s2" element={<Screen2 />} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
