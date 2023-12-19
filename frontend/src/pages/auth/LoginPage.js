import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import { login } from "../../services/UserService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook de React Router para navegación

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log(user);

      // Redirigir al usuario a la página de inicio y mostrar mensaje
      navigate("/", { state: { message: "Inicio de sesión exitoso" } });
    } catch (error) {
      console.log(error);
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Iniciar Sesión</div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
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
