"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import { AnimalsStore } from "./types";
import { createAnimalsStore } from "./store";

export type AnimalStoreApi = ReturnType<typeof createAnimalsStore>;

export const AnimalsStoreContext = createContext<AnimalStoreApi | undefined>(
  undefined
);

export interface AnimalsStoreProviderProps {
  children: ReactNode;
}

export const AnimalsStoreProvider = ({
  children,
}: AnimalsStoreProviderProps) => {
  const storeRef = useRef<AnimalStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createAnimalsStore();
  }

  return (
    <AnimalsStoreContext.Provider value={storeRef.current}>
      {children}
    </AnimalsStoreContext.Provider>
  );
};

export const useAnimalsStore = <T,>(
  selector: (store: AnimalsStore) => T
): T => {
  const animalsStoreContext = useContext(AnimalsStoreContext);

  if (!animalsStoreContext) {
    throw new Error(`useAnimalsStore must be used within AnimalsStoreProvider`);
  }

  return useStore(animalsStoreContext, selector);
};
