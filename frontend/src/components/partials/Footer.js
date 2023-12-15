// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        backgroundColor: "#f8f9fa",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h4>Contacto</h4>
            <p>Dirección: [Dirección de la agencia]</p>
            <p>Teléfono: [Número de teléfono]</p>
            <p>Email: [Correo electrónico]</p>
          </Col>
          <Col md={4}>
            <h4>Enlaces rápidos</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/destinos">Destinos</a>
              </li>
              <li>
                <a href="/tours">Tours</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Síguenos en redes sociales</h4>
            <p>
              Conéctate con nosotros en nuestras redes sociales para recibir las
              últimas actualizaciones y ofertas.
            </p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          borderTop: "1px solid #dee2e6",
          paddingTop: "20px",
        }}
      >
        <p>
          &copy; 2023 Agencia de Viajes GROUP TRAVEL. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
