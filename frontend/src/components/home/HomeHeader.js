// HomeHeader.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./HomeHeader.module.css";

function HomeHeader() {
  return (
    <div className={styles['background-image']}>
      <Navbar bg="transparent" expand="lg" className="container">
        <Navbar.Brand as={Link} to="/">Group Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/destination">Destinos</Nav.Link>
            <Nav.Link as={Link} to="/tour">Tours</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Aquí puedes colocar otros componentes */}
    </div>
  );
}

export default HomeHeader;
