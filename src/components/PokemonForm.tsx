import React from "react";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";

import { baseUrl } from "@/api";

import InputControl from "./InputControl";

type CreatePokemonPayload = {
  name: string;
  type: string;
  height: string;
  weight: string;
};

async function createPokemon(
  url: string,
  { arg: payload }: { arg: CreatePokemonPayload }
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export default function PokemonForm() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const navigate = useNavigate();

  const mutation = useSWRMutation(`${baseUrl}/pokemons/`, createPokemon);

  const isValid = name && type;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { name, type, height, weight };

    await mutation.trigger(payload);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputControl
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <InputControl
        label="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <InputControl
        label="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit" disabled={!isValid || mutation.isMutating}>
        Submit
      </button>
    </form>
  );
}
