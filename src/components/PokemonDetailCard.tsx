import { Button, ButtonGroup } from "reactstrap";

import { PokemonDetail } from "@/types";

export default function PokemonDetailCard({
  pokemon,
}: {
  pokemon: PokemonDetail;
}) {
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
