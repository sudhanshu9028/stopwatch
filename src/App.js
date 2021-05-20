import React from "react";
import { FormatTime } from "./Mycomp/FormatTime";
import { Stopwatch } from "./Mycomp/Stopwatch";
import "./App.css";

const Timer = () => {
  const { timer, isPaused, isActive, start, pause, resume, reset } =
    Stopwatch(0);
  return (
    <div className="app">
      <h1 className="">STOPWATCH</h1>
      <div className="timer-card">
        <p>{FormatTime(timer)}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={start}>Start</button>
          ) : isPaused ? (
            <button onClick={pause}>Pause</button>
          ) : (
            <button onClick={resume}>Resume</button>
          )}
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
