import { test, expect } from "@playwright/test";

test("can go to pokemon details", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByText("bulbasaur")).toBeVisible();
  await expect(page.getByText("ivysaur")).toBeVisible();
  await expect(page.getByText("venusaur")).toBeVisible();

  //
  await page
    .locator("div")
    .filter({ hasText: /^venusaurgrasspoisonVoir$/ })
    .getByRole("link", { name: "Voir" })
    .click();

  //
  await expect(page.getByRole("heading", { name: "venusaur" })).toBeVisible();
  await expect(page.getByText("overgrow")).toBeVisible();
  await expect(page.getByText("chlorophyll")).toBeVisible();
});
