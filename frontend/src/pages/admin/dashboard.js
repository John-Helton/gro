import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"; // Importa Outlet y useParams

const Dashboard = () => {
  const [showTable, setShowTable] = useState(false);

  const handleLinkClick = () => {
    setShowTable(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Destinos</h5>
              <p className="card-text">Administrar destinos</p>
              {/* Agrega el onClick para manejar la tabla aquí */}
              <Link to="/dashboard/destinos" className="btn btn-primary" onClick={handleLinkClick}>
                Ir a Destinos
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tours</h5>
              <p className="card-text">Administrar tours</p>
              {/* Agrega el onClick para manejar la tabla aquí */}
              <Link to="/dashboard/tours" className="btn btn-primary" onClick={handleLinkClick}>
                Ir a Tours
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Usuarios</h5>
              <p className="card-text">Administrar usuarios</p>
              {/* Agrega el onClick para manejar la tabla aquí */}
              <Link to="/dashboard/usuarios" className="btn btn-primary" onClick={handleLinkClick}>
                Ir a Usuarios
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Utiliza Outlet para renderizar dinámicamente el contenido */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
