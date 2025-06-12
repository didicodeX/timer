import React from "react";
import { TimerPicker } from "./TimerPicker";
import { TimerDisplay } from "./TimerDisplay";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Timer App</h1>
      <p>Set a custom time and start the timer!</p>
      <TimerPicker />
      <TimerDisplay />
    </div>
  );
}
