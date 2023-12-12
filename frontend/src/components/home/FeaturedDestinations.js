import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import './HomeHeader.module.css';

function FeaturedDestinations() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica de búsqueda con los valores seleccionados
    console.log('Destination:', destination);
    console.log('Duration:', duration);
    console.log('Max Price:', maxPrice);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <form className="search-tour d-flex">
        <div className="form-group m-2">
          <label htmlFor="destination">Select destination</label>
          <select
            id="destination"
            className="form-control"
            value={destination}
            onChange={handleDestinationChange}
          >
            {/* Opciones para destinos */}
          </select>
        </div>

        <div className="form-group m-2">
          <label htmlFor="duration">Select duration</label>
          <select
            id="duration"
            className="form-control"
            value={duration}
            onChange={handleDurationChange}
          >
            {/* Opciones para duración */}
          </select>
        </div>

        <div className="form-group m-2">
          <label htmlFor="price">Max price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter max price"
            className="form-control"
            min="0"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="form-group m-2">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {/* Contenido de las destinos destacados */}
    </div>
  );
}

export default FeaturedDestinations;
