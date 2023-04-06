import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";
import useSWR from "swr";

import { fetcher } from "@/api";
import { PokemonDetail } from "@/types";

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

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />

      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>

      <h2>Stats</h2>
      <ButtonGroup>
        {Object.entries(pokemon.stats).map(([name, value]) => (
          <Button key={name} color="primary">
            {name}: {value}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
