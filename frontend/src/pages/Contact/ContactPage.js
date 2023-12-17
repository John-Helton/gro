import React, { useState, useEffect } from "react";
import api from "../../services/api"; // Ajusta la ruta según tu estructura

export default function ContactPage() {
  const [serverMessage, setServerMessage] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Función para realizar la llamada a la API
    const fetchDataFromBackend = async () => {
      try {
        const response = await api.get('/'); // Ruta del backend
        setServerMessage(response.data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    // Llama a la función al cargar el componente
    fetchDataFromBackend();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/messages', formData);
      console.log('Respuesta del servidor:', response.data);

      // Puedes realizar otras acciones después de enviar el mensaje, si es necesario.

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  const { name, email, message } = formData;

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Contacto</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí"
                  value={message}
                  onChange={handleChange}
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
