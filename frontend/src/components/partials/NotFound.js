import React from 'react';

export default function NotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg")', // Reemplaza con la ruta de tu imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Página no encontrada</p>
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </div>
  );
}
