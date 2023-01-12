import { create } from "zustand";

export interface Store {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
