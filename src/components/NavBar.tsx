import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Nav navbar className="me-auto">
          <NavItem>
            <NavLink href="/">Accueil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pokemons/new">New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} href="/recherche">
              Recherche
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
