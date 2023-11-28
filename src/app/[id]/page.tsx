import { PokemonDetails } from "@/types/types";
import React from "react";

async function getPokemon(id: string): Promise<PokemonDetails> {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url, { next: { revalidate: 21600 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemon(id);
  return (
    <main className="flex flex-col grow">
      <h1>{pokemon.name}</h1>
    </main>
  );
}
