import LoadMoreButton from "@/components/LoadMoreButton";
import PokemonCard from "@/components/PokemonCard";
import SearchPokemon from "@/components/SearchPokemon";
import NewPokemonList from "@/components/NewPokemonList";
import { PokemonData } from "@/types/types";

async function getPokemon(): Promise<PokemonData> {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(url, { next: { revalidate: 21600 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { results, next } = await getPokemon();
  return (
    <main className="flex flex-col self-stretch items-center p-8 gap-8 grow">
      <div className="flex flex-col justify-center items-center self-stretch gap-16">
        {/* title */}
        <div className="flex flex-col self-stretch gap-4 items-center">
          <h1 className="gradient-text text-[3.8rem] font-fugaz">Pokimon</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* search input */}
        <SearchPokemon />

        {/* pokemon card list */}
        <div className="flex flex-wrap self-stretch gap-8 justify-center items-start content-start">
          {/* pokemon card */}
          {results.map(({ name, url }, index) => (
            <PokemonCard key={index} name={name} url={url} />
          ))}
          <NewPokemonList />
        </div>
      </div>
      <LoadMoreButton nextLink={next!} />
    </main>
  );
}
