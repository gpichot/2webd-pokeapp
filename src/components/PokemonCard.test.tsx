import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import pikachu from "@/mocks/pikachu";
import { render } from "@/test-utilities";

import PokemonCard from "./PokemonCard";

describe("PokemonCard", () => {
  it("renders pokemon name and types", () => {
    render(<PokemonCard pokemon={pikachu} />);

    expect(screen.getByText("pikachu")).toBeVisible();
    expect(screen.getByText("electric")).toBeVisible();
  });

  it("background color changes on hover", async () => {
    const user = userEvent.setup();
    const { container } = render(<PokemonCard pokemon={pikachu} />);

    await user.hover(screen.getByText("pikachu"));

    // screen.logTestingPlaygroundURL();

    expect(container.querySelector("div > div")).toHaveStyle(
      "background-color: green"
    );
  });

  it("goes to pokemon detail page", async () => {
    const user = userEvent.setup();

    render(<PokemonCard pokemon={pikachu} />);

    await user.click(screen.getByText("Voir"));

    console.log(window.location.pathname);
    expect();
  });
});
