import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";
import useSWR from "swr";

import { fetcher } from "@/api";
import { PokemonDetail } from "@/types";

import PokemonDetailCard from "./PokemonDetailCard";

export default function PokemonDetailPage() {
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const pokemonQuery = useSWR<PokemonDetail>(`/pokemons/${pokemonId}`, fetcher);

  const pokemon = pokemonQuery.data;
  if (pokemonQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonQuery.error || !pokemon) {
    return <div>Error</div>;
  }

  return <PokemonDetailCard pokemon={pokemon} />;
}
