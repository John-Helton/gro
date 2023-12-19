import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post("/api/users/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      // Comprobar el código de estado del backend
      if (response.status === 201) {
        // Registro exitoso
        console.log("Registro exitoso", response.data);
        // Puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones
      } else {
        // Código de estado no esperado
        setError("Error en el registro. Inténtalo de nuevo.");
      }
    } catch (error) {
      // Manejar errores específicos del backend
      if (error.response.status === 400) {
        // Error de validación, por ejemplo, el correo electrónico ya está en uso
        setError("Error en el registro. Verifica los datos ingresados.");
      } else if (error.response.status === 500) {
        // Error interno del servidor
        setError("Error interno del servidor. Inténtalo más tarde.");
      } else {
        // Otro tipo de error
        setError("Error en el registro. Inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Crear Cuenta</div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
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
