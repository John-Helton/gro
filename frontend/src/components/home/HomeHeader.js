// HomeHeader.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import clasess from "./HomeHeader.module.css";

function HomeHeader() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0.5) {
        setNavbarColor("white");
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLoggedIn = false; // Cambiar a false si el usuario no está logeado
  const userName = "John Doe"; // Cambiar por el nombre del usuario logeado

  return (
    <div className={clasess["background-image"]} style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>¡Bienvenido a Group Travel!</h1>
        <p style={{ color: "white", fontSize: "1.5rem", textAlign: "center" }}>Descubre los mejores destinos y tours para tus viajes</p>
      </div>
      <Navbar bg={navbarColor} expand="lg" className={clasess["container"]} variant="light" fixed="top" style={{ borderBottom: "1px solid black" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "black", fontWeight: "bolder" }}>
            Group Travel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between justify-content-center">
            <Nav>
              <Nav.Link as={Link} to="/" style={{ color: "black", fontWeight: "bold" }}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/destination" style={{ color: "black", fontWeight: "bold" }}>
                Destinos
              </Nav.Link>
              <Nav.Link as={Link} to="/tour" style={{ color: "black", fontWeight: "bold" }}>
                Tours
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "black", fontWeight: "bold" }}>
                Contacto
              </Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>{userName}</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/auth" style={{ color: "black", fontWeight: "bolder" }}>
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Aquí puedes colocar otros componentes */}
    </div>
  );
}

export default HomeHeader;
