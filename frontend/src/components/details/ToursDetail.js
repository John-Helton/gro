// TourDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTourDetails } from '../../services/TursServices'; // Ajusta según tu estructura

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const tourDetails = await getTourDetails(id); // Ajusta según tu lógica
        setTour(tourDetails);
      } catch (error) {
        console.error("Error al obtener detalles del tour:", error);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (!tour) {
    return <div>Cargando detalles del tour...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">{tour.name}</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Aquí muestras los detalles del tour, por ejemplo, imágenes, precio, rating, etc. */}
          <img src={tour.images[0]} alt={tour.name} style={{ width: '100%', height: 'auto' }} />
          <p>Precio: {tour.price} USD</p>
          {/* Agrega más detalles según tus necesidades */}
        </div>
        <div className="col-md-6">
          {/* Formulario para reservar el tour */}
          <h3>Reserva tu tour</h3>
          {/* Aquí puedes agregar un formulario con campos como nombre, fecha, número de personas, etc. */}
          <form>
            {/* Campos del formulario */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            {/* Agrega más campos según tus necesidades */}
            <button type="submit" className="btn btn-primary">
              Reservar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
