import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { render as renderRTL } from "@testing-library/react";

import { routes } from "./App";

export function render(...args: Parameters<typeof renderRTL>) {
  const [element, options] = args;
  return renderRTL(<MemoryRouter>{element}</MemoryRouter>, options);
}

export function renderApp() {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 1,
  });

  return renderRTL(<RouterProvider router={router} />);
}
