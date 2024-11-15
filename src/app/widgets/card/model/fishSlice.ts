import { StateCreator } from "zustand";
import { AnimalsStore, FishSlice } from "./types";

export const createFishSlice: StateCreator<
  AnimalsStore,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () =>
    set(
      (state) => ({ fishes: state.fishes + 1 }),
      undefined,
      "animals:fish/addFish"
    ),
  clearFishes: () =>
    set(() => ({ fishes: 0 }), undefined, "animals:fish/clearFish"),
});
