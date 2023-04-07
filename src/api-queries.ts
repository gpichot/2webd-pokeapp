import useSWR from "swr";

import { fetcher } from "./api";
import { PokemonDetail } from "./types";

type PokemonListResult = { count: number; results: PokemonDetail[] };

export function usePokemonListQuery({
  offset = 0,
  limit = 10,
}: {
  offset?: number;
  limit?: number;
} = {}) {
  return useSWR<PokemonListResult>(
    `/pokemons/?offset=${offset}&limit=${limit}`,
    fetcher
  );
}
