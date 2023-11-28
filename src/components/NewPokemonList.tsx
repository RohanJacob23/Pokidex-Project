"use client";

import { usePokemonStore } from "@/zustand/pokemonStore";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function NewPokemonList() {
  const pokemon = usePokemonStore((state) => state.pokemonData);
  return (
    <>
      {pokemon &&
        pokemon.results.map(({ name, url }, index) => (
          <PokemonCard key={index} name={name} url={url} />
        ))}
    </>
  );
}
