import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // vai ficar responsivo
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" dark expand="md">
      <Container>
        <NavbarBrand href="/">Rael</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Orçamento</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};