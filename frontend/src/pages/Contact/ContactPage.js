import React from "react";

export default function ContactPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Contacto</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputMessage" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="exampleInputMessage"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
