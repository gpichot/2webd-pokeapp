import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import pikachu from "@/mocks/pikachu";
import { render } from "@/test-utilities";

import PokemonDetailCard from "./PokemonDetailCard";

describe("PokemonDetailPage", () => {
  it("renders pokemon details", async () => {
    render(<PokemonDetailCard pokemon={pikachu} />);

    expect(screen.getByText("pikachu")).toBeVisible();
  });
});

