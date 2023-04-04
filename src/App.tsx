import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import PokemonCard from "./components/PokemonCard";
import nidoqueen from "./mocks/nidoqueen";
import pikachu from "./mocks/pikachu";
import pokemons from "./mocks/pokemons";

import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/recherche">Recherche</Link>
      <Link to="/team">Equipe</Link>
      <Outlet />
    </div>
  );
}

function Team() {
  return <p>Team</p>;
}

function SearchPokemonPage() {
  return <p>🚧 Recherche 🚧</p>;
}
function HomePage() {
  return (
    <>
      <PokemonCard pokemon={pikachu} />
      <PokemonCard pokemon={nidoqueen} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "recherche",
        element: <SearchPokemonPage />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}
