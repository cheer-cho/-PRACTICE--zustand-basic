import { create } from 'zustand';

type CountStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
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
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
