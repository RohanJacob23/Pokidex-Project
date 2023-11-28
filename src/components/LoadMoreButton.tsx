"use client";

import { usePokemonStore } from "@/zustand/pokemonStore";
import { Button } from "@nextui-org/react";
import axios from "axios";
import React from "react";

export default function LoadMoreButton({ nextLink }: { nextLink: string }) {
  const [next, setNext, setPokemonData, isLoading, setIsLoading] =
    usePokemonStore((state) => [
      state.next,
      state.setNext,
      state.setPokemonData,
      state.isLoading,
      state.setIsLoading,
    ]);

  const fetchPokemon = (link: string) => {
    axios
      .get(link)
      .then((res) => {
        setIsLoading(true);

        setPokemonData(res.data);
        setNext(res.data.next);
      })
      .finally(() => setIsLoading(false));
  };

  const handleClick = () => {
    if (next) fetchPokemon(next);
    else fetchPokemon(nextLink);
  };

  return (
    <Button
      color="primary"
      radius="sm"
      onClick={handleClick}
      isLoading={isLoading}
    >
      Load More
    </Button>
  );
}
