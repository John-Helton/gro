// Dashboard.js

import React, { useState, useEffect } from "react";
import { createDestino, updateDestino, deleteDestino, getAllDestinations } from "../../services/TursServices";
import { createTour, updateTour, deleteTour, getAllTours } from "../../services/TursServices";

const Dashboard = () => {
  // State y funciones para Destinos
  const [destinos, setDestinos] = useState([]);
  const [newDestino, setNewDestino] = useState({ name: "", images: "" });
  const [selectedDestino, setSelectedDestino] = useState(null);

  const fetchDestinos = async () => {
    try {
      const destinosData = await getAllDestinations();
      setDestinos(destinosData);
    } catch (error) {
      console.error("Error al obtener destinos:", error);
    }
  };

  const handleCreateDestino = async () => {
    try {
      await createDestino(newDestino);
      setNewDestino({ name: "", images: "" });
      fetchDestinos();
    } catch (error) {
      console.error("Error al crear destino:", error);
    }
  };

  const handleUpdateDestino = async () => {
    try {
      await updateDestino(selectedDestino._id, newDestino);
      setNewDestino({ name: "", images: "" });
      setSelectedDestino(null);
      fetchDestinos();
    } catch (error) {
      console.error("Error al actualizar destino:", error);
    }
  };

  const handleDeleteDestino = async (destinoId) => {
    try {
      await deleteDestino(destinoId);
      fetchDestinos();
    } catch (error) {
      console.error("Error al eliminar destino:", error);
    }
  };

  const handleEditClickDestino = (destino) => {
    setSelectedDestino(destino);
    setNewDestino({ name: destino.name, images: destino.images });
  };

  // State y funciones para Tours
  const [tours, setTours] = useState([]);
  const [newTour, setNewTour] = useState({
    name: "",
    price: 0,
    rating: "",
    days: 0,
    guide: "",
    destination: "",
    images: "",
  });
  const [selectedTour, setSelectedTour] = useState(null);

  const fetchTours = async () => {
    try {
      const toursData = await getAllTours();
      setTours(toursData);
    } catch (error) {
      console.error("Error al obtener tours:", error);
    }
  };

  const handleCreateTour = async () => {
    try {
      await createTour(newTour);
      setNewTour({
        name: "",
        price: 0,
        rating: "",
        days: 0,
        guide: "",
        destination: "",
        images: "",
      });
      fetchTours();
    } catch (error) {
      console.error("Error al crear tour:", error);
    }
  };

  const handleUpdateTour = async () => {
    try {
      await updateTour(selectedTour._id, newTour);
      setNewTour({
        name: "",
        price: 0,
        rating: "",
        days: 0,
        guide: "",
        destination: "",
        images: "",
      });
      setSelectedTour(null);
      fetchTours();
    } catch (error) {
      console.error("Error al actualizar tour:", error);
    }
  };

  const handleDeleteTour = async (tourId) => {
    try {
      await deleteTour(tourId);
      fetchTours();
    } catch (error) {
      console.error("Error al eliminar tour:", error);
    }
  };

  const handleEditClickTour = (tour) => {
    setSelectedTour(tour);
    setNewTour({
      name: tour.name,
      price: tour.price,
      rating: tour.rating,
      days: tour.days,
      guide: tour.guide,
      destination: tour.destination,
      images: tour.images,
    });
  };

  // Efectos de carga inicial
  useEffect(() => {
    fetchDestinos();
    fetchTours();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>

      {/* Sección de Destinos */}
      <div className="row mb-3">
        <div className="col-md-6 mx-auto">
          <h4>Crear/Actualizar Destino</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={newDestino.name}
                onChange={(e) => setNewDestino({ ...newDestino, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                IMGURL:
              </label>
              <textarea
                className="form-control"
                id="descripcion"
                value={newDestino.images}
                onChange={(e) => setNewDestino({ ...newDestino, images: e.target.value })}
              ></textarea>
            </div>
            {selectedDestino ? (
              <button type="button" className="btn btn-warning" onClick={handleUpdateDestino}>
                Actualizar Destino
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={handleCreateDestino}>
                Crear Destino
              </button>
            )}
          </form>
        </div>
      </div>

      <h4>Lista de Destinos</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>IMGURL</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {destinos.map((destino) => (
            <tr key={destino._id}>
              <td>{destino.name}</td>
              <td>
                <div className="text-truncate">{destino.images}</div>
              </td>
              <td>
                <button type="button" className="btn btn-info" onClick={() => handleEditClickDestino(destino)}>
                  Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteDestino(destino._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sección de Tours */}
      <div className="row mb-3">
        <div className="col-md-6 mx-auto">
          <h4>Crear/Actualizar Tour</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="tourNombre" className="form-label">
                Nombre del Tour:
              </label>
              <input
                type="text"
                className="form-control"
                id="tourNombre"
                value={newTour.name}
                onChange={(e) => setNewTour({ ...newTour, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourPrecio" className="form-label">
                Precio:
              </label>
              <input
                type="number"
                className="form-control"
                id="tourPrecio"
                value={newTour.price}
                onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourRating" className="form-label">
                Rating:
              </label>
              <input
                type="text"
                className="form-control"
                id="tourRating"
                value={newTour.rating}
                onChange={(e) => setNewTour({ ...newTour, rating: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourDias" className="form-label">
                Días:
              </label>
              <input
                type="number"
                className="form-control"
                id="tourDias"
                value={newTour.days}
                onChange={(e) => setNewTour({ ...newTour, days: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourGuia" className="form-label">
                Guía:
              </label>
              <input
                type="text"
                className="form-control"
                id="tourGuia"
                value={newTour.guide}
                onChange={(e) => setNewTour({ ...newTour, guide: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourDestino" className="form-label">
                ID del Destino:
              </label>
              <input
                type="text"
                className="form-control"
                id="tourDestino"
                value={newTour.destination}
                onChange={(e) => setNewTour({ ...newTour, destination: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tourImagenes" className="form-label">
                IMGURL:
              </label>
              <textarea
                className="form-control"
                id="tourImagenes"
                value={newTour.images}
                onChange={(e) => setNewTour({ ...newTour, images: e.target.value })}
              ></textarea>
            </div>
            {selectedTour ? (
              <button type="button" className="btn btn-warning" onClick={handleUpdateTour}>
                Actualizar Tour
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={handleCreateTour}>
                Crear Tour
              </button>
            )}
          </form>
        </div>
      </div>

      <h4>Lista de Tours</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Rating</th>
            <th>Días</th>
            <th>Guía</th>
            <th>ID del Destino</th>
            <th>IMGURL</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour._id}>
              <td>{tour.name}</td>
              <td>{tour.price}</td>
              <td>{tour.rating}</td>
              <td>{tour.days}</td>
              <td>{tour.guide}</td>
              <td>{tour.destination}</td>
              <td>
                <div className="text-truncate">{tour.images}</div>
              </td>
              <td>
                <button type="button" className="btn btn-info" onClick={() => handleEditClickTour(tour)}>
                  Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteTour(tour._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
