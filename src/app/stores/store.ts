import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

import { createFishSlice } from "./fishSlice";
import { createBearSlice } from "./bearSlice";
import { AnimalsStore } from "./types";

export const createAnimalsStore = () => {
  return createStore<AnimalsStore>()(
    devtools((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }))
  );
};
