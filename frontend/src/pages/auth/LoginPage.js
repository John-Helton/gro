import React, { useState } from "react";
import Register from "./RegisterPage";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              {showLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </div>
            <div className="card-body">
              {showLogin ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </form>
              ) : (
                <Register />
              )}
            </div>
            <div className="card-footer text-center">
              {showLogin ? (
                <p>
                  ¿No tienes una cuenta?{" "}
                  <span className="text-primary" onClick={toggleForm}>
                    Regístrate aquí
                  </span>
                </p>
              ) : (
                <p>
                  ¿Ya tienes una cuenta?{" "}
                  <span className="text-primary" onClick={toggleForm}>
                    Inicia Sesión
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
