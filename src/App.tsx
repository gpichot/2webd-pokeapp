import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PokemonDetailPage from "./components/PokemonDetailPage";

import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div>
      <NavBar />
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
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "pokemon/:pokemonId",
        element: <PokemonDetailPage />,
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
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}
