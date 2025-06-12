"use client";

import React, { useState } from "react";
import { useTimerStore } from "./timer.store";

export const TimerPicker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const setCustomTime = useTimerStore((state) => state.setCustomTime);

  const handleSetTime = () => {
    setCustomTime(hours, minutes, seconds);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Set Timer</h2>
      <div>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          placeholder="Hours"
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          placeholder="Minutes"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          placeholder="Seconds"
        />
      </div>
      <button onClick={handleSetTime}>Set Time</button>
    </div>
  );
};
