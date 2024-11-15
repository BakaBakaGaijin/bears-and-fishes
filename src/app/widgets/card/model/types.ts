type BearState = {
  bears: number;
};

type BearActions = {
  addBear: () => void;
  clearBears: () => void;
  eatFish: () => void;
};

type FishState = {
  fishes: number;
};

type FishActions = {
  addFish: () => void;
  clearFishes: () => void;
};

export type BearSlice = BearState & BearActions;

export type FishSlice = FishState & FishActions;

export type AnimalsStore = BearSlice & FishSlice;
