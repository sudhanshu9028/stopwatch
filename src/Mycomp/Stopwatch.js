import { useState, useRef } from "react";

export const Stopwatch = (initialstate = 0) => {
  const [timer, setTimer] = useState(initialstate);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const start = () => {
    setIsActive(true);
    setIsPaused(true);
    ref.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };
  const pause = () => {
    clearInterval(ref.current);
    setIsPaused(false);
  };
  const resume = () => {
    setIsPaused(true);
    ref.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };
  const reset = () => {
    clearInterval(ref.current);
    setIsPaused(false);
    setIsActive(false);
    setTimer(0);
  };
  return { timer, isPaused, isActive, start, pause, resume, reset };
};
