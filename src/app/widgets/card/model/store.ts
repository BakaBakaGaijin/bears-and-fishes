import { createStore } from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";
import { devtools } from "zustand/middleware";
import { AnimalsStore } from "./types";

export const createAnimalsStore = () => {
  return createStore<AnimalsStore>()(
    devtools((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }))
  );
};
