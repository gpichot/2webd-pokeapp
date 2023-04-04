import { PokemonDetail } from "@/types";

import styles from "./PokemonCard.module.scss";

export default function PokemonCard(props: { pokemon: PokemonDetail }) {
  const { pokemon } = props;
  return (
    <div className={styles.pokemonCard}>
      <div>{pokemon.name}</div>
      <img src={pokemon.image} alt={pokemon.name} height={64} />
      <div>
        {pokemon.types.map((type) => (
          <span key={type} className={styles.pokemonType}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
