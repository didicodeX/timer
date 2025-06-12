"use client";

import React from "react";
import { useTimerStore } from "./timer.store";

export const TimerDisplay = () => {
  const remaining = useTimerStore((state) => state.remaining);
  const isRunning = useTimerStore((state) => state.isRunning);
  const onStart = useTimerStore((state) => state.start);
  const onPause = useTimerStore((state) => state.pause);
  const onReset = useTimerStore((state) => state.reset);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(remaining)}</p>
      <button onClick={isRunning ? onPause : onStart}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
