import React from "react";
import useSWR from "swr";

import { fetcher } from "@/api";
import PokemonCard from "@/components/PokemonCard";
import { PokemonDetail } from "@/types";

import PaginationList from "./Pagination";

type PokemonListResult = { count: number; results: PokemonDetail[] };

export default function HomePage() {
  const [page, setPage] = React.useState(1);
  const offset = 10 * (page - 1);
  const pokemonsList = useSWR<PokemonListResult>(
    `/pokemons/?offset=${offset}`,
    fetcher
  );

  if (pokemonsList.isLoading) {
    return <p>Loading</p>;
  }

  if (pokemonsList.error || !pokemonsList.data) {
    return <p>Error</p>;
  }

  const lastPage = Math.ceil(pokemonsList.data.count / 10);

  return (
    <>
      <PaginationList
        goToPage={(page) => setPage(page)}
        currentPage={page}
        lastPage={lastPage}
      />
      <button onClick={() => setPage(page + 1)}>Next</button>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "1rem 0",
        }}
      >
        {pokemonsList.data.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
