import React from "react";
import { Link } from "react-router-dom";

import { PokemonDetail } from "@/types";

import styles from "./PokemonCard.module.scss";

export default function PokemonCard(props: { pokemon: PokemonDetail }) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={styles.pokemonCard}
      style={{
        transition: "background-color 0.2s ease-in-out",
        backgroundColor: isHovered ? "green" : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>{pokemon.name}</div>
      <img src={pokemon.image} alt={pokemon.name} height={64} />
      <div>
        {pokemon.types.map((type) => (
          <span key={type} className={styles.pokemonType}>
            {type}
          </span>
        ))}
      </div>
      <Link to={`/pokemon/${pokemon.id}`}>Voir</Link>
    </div>
  );
}
