import { create } from "zustand";

type TimerState = {
  duration: number;
  remaining: number;
  isRunning: boolean;
  intervalId: NodeJS.Timeout | null;

  setCustomTime: (h: number, m: number, s: number) => void;
  start: () => void;
  pause: () => void;
  reset: () => void;
};


export const useTimerStore = create<TimerState>((set, get) => ({
  duration: 0,
  remaining: 0,
  isRunning: false,
  intervalId: null,

  setCustomTime: (h, m, s) => {
    const total = h * 3600 + m * 60 + s;
    set({ duration: total, remaining: total });
  },

  start: () => {
    const { isRunning, intervalId,remaining } = get();
    if (isRunning || intervalId !== null) return;
    if (remaining <= 0) return;


    const id = setInterval(() => {
      if (remaining > 0) {
        set((state) => ({ remaining: state.remaining - 1 }));
      } else {
        get().pause();
      }
    }, 1000);

    set({ isRunning: true, intervalId: id });
  },

  pause: () => {
    const { intervalId } = get();
    if (intervalId !== null) {
      clearInterval(intervalId);
      set({ isRunning: false, intervalId: null });
    }
  },

  reset: () => {
    const { duration } = get();
    get().pause();
    set({ remaining: duration });
  },
}));
