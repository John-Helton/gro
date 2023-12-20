// Navbar.js
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function NavBar() {
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [userName, setUserName] = useState("");
  const [userLoaded, setUserLoaded] = useState(false);
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

  useEffect(() => {
    const fetchData = async () => {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
      if (userFromLocalStorage) {
        setUserName(userFromLocalStorage.name);
        setUserLoaded(true);
      }
    };

    fetchData();
  }, []); // Efecto solo ejecutado una vez al montar el componente

  const handleLogout = () => {
    setUserName("");
    // También deberías realizar cualquier lógica necesaria para cerrar la sesión en el backend y eliminar el token, etc.
    Swal.fire({
      icon: "success",
      title: "¡Cierre de sesión exitoso!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const isLoggedIn = !!userName && userLoaded;
  return (
    <Navbar
      bg={navbarColor}
      expand="lg"
      variant="light"
      fixed="top"
      style={{ borderBottom: "1px solid black" }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          Group Travel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between justify-content-center"
        >
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/destination"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Destinos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tour"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Tours
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Item>
                  <Nav.Link
                  as={Link}
                  to="/dashboard"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    {userName}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={handleLogout}
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Salir
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  LOGIN
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
