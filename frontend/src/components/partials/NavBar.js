// Navbar.js
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const [navbarColor, setNavbarColor] = useState("transparent");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (location.pathname === "/" && scrollPosition <= 0.5) {
                setNavbarColor("transparent");
            } else {
                setNavbarColor("white");
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    const isLoggedIn = false; // Cambiar a false si el usuario no está logeado
    const userName = "John Doe"; // Cambiar por el nombre del usuario logeado

    return (
        <Navbar bg={navbarColor} expand="lg" variant="light" fixed="top" style={{ borderBottom: "1px solid black" }}>
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
                            <Nav.Link as={Link} to="/login" style={{ color: "black", fontWeight: "bolder" }}>
                                LOGIN
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
