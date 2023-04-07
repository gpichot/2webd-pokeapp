import { describe, expect, it } from "vitest";

import { square } from "./utilities";

describe("square", () => {
  it("returns 4 for input 2", () => {
    const result = square(2);

    expect(result).toBe(4);
  });
});
