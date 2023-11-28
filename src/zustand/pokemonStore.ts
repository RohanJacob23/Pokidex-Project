import { PokemonData } from "@/types/types";
import { create } from "zustand";

interface PokemonState {
  next?: string;
  pokemonData?: PokemonData;
  isLoading: boolean;
  setPokemonData: (pokemonData: PokemonData) => void;
  setNext: (next: string) => void;
  setIsLoading: (value: boolean) => void;
}

const usePokemonStore = create<PokemonState>()((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
  setNext: (next) => set({ next }),
  setPokemonData: (pokemonData) =>
    set((state) => {
      const newResults = [
        ...(state.pokemonData?.results ?? []),
        ...pokemonData.results,
      ];
      const newPokemonData = {
        ...state.pokemonData,
        ...pokemonData,
        results: newResults,
      };
      console.log(newPokemonData);
      return {
        pokemonData: newPokemonData,
      };
    }),
}));

export { usePokemonStore };
