// TourDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTourDetails } from '../../services/TursServices';
import Swal from 'sweetalert2'; // Import the SweetAlert library

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const tourDetails = await getTourDetails(id);
        setTour(tourDetails);
      } catch (error) {
        console.error("Error al obtener detalles del tour:", error);
        setError('Error al cargar los detalles del tour.');
      }
    };

    fetchTourDetails();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // For demonstration purposes, let's display a success alert
    Swal.fire({
      icon: 'success',
      title: 'Reserva exitosa',
      text: 'Tu tour ha sido reservado correctamente.',
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!tour) {
    return <div>Cargando detalles del tour...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">{tour.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={tour.images} alt={tour.name} style={{ width: '100%', height: 'auto' }} />
          <p>Precio: {tour.price} USD</p>
        </div>
        <div className="col-md-6">
          <h3>Reserva tu tour</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            {/* Add more form fields as needed */}
            <button type="submit" className="btn btn-primary">
              Reservar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
