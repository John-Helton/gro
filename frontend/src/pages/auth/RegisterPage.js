import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Crear Cuenta</div>
          <div className="card-body">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Crear Cuenta
              </button>
            </form>
          </div>
          <div className="card-footer text-center">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login">
                <span className="text-primary pointer">Inicia Sesión aquí </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
