import React from "react";

export default function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Iniciar Sesión</div>
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
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </form>
          </div>
          <div className="card-footer text-center">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="/register">
                <span className="text-primary pointer">Regístrate aquí </span>{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
