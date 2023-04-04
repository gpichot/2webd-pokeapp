import { PokemonDetail } from "@/types";

export default {
  id: 31,
  name: "nidoqueen",
  types: ["poison", "ground"],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  weight: 600,
  height: 13,
  base_experience: 253,
  forms: ["nidoqueen"],
  abilities: ["poison-point", "rivalry", "sheer-force"],
  stats: {
    hp: 90,
    attack: 92,
    defense: 87,
    "special-attack": 75,
    "special-defense": 85,
    speed: 76,
  },
} as PokemonDetail;
