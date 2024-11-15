import { StateCreator } from "zustand";
import { AnimalsStore, BearSlice } from "./types";

export const createBearSlice: StateCreator<
  AnimalsStore,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () =>
    set(
      (state) => ({ bears: state.bears + 1 }),
      undefined,
      "animals:bears/addBear"
    ),
  eatFish: () =>
    set(
      (state) => ({ fishes: state.fishes - 1 }),
      undefined,
      "animals:bears/eatFish"
    ),
  clearBears: () =>
    set(() => ({ bears: 0 }), undefined, "animals:bears/clearBears"),
});
