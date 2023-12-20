import React, { useState, useEffect } from 'react';
import { getAllDestinations } from '../../services/TursServices';
import { Link } from 'react-router-dom';

export default function PopularDestination() {
  const [destinations, setDestinations] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataDestinations = await getAllDestinations();

        // Aquí puedes realizar cualquier procesamiento adicional con los destinos obtenidos
        // Por ejemplo, asociar tours a destinos

        // Guardar datos en el estado
        setDestinations(dataDestinations);
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener destinos', error);
      }
    };

    fetchData(); // Llamada a fetchData solo una vez al montar el componente
  }, []); // Dependencias vacías para asegurar que solo se ejecute una vez

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Ordenar los destinos por la cantidad de tours de manera descendente
  const sortedDestinations = [...destinations].sort((a, b) => (b.tours?.length || 0) - (a.tours?.length || 0));

  return (
    <div className='container mt-5'>
      <h2 className='text-uppercase text-center'>Destinos Populares en Ecuador</h2>
      <div className='row'>
        {sortedDestinations.map((destination) => (
          <div key={destination.id} className='col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <Link to={`/destination/${destination.id}`}>
                {/* Contenido del destino */}
                <div
                  className='card-img-top'
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    overflow: 'hidden',
                    transition: 'opacity 0.5s',
                  }}
                >
                  <img
                    src={destination.images}
                    alt={destination.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '1' }}
                  />
                  {/* Resto del contenido del destino... */}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
