import { create } from 'zustand';

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// custom hook
export const useCounterStore = create<CountStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      ...state,
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      ...state,
      count: state.count - 1,
    }));
  },
}));
