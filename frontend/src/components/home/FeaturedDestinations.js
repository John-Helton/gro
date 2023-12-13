import React, { useState } from 'react'; // Asegúrate de importar los estilos de Bootstrap
import './HomeHeader.module.css';

function FeaturedDestinations() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };



  return (
    <div className="container mt-5 d-flex justify-content-center" style={{ height: '15vh' }}>
      <form className="search-tour d-flex flex-row justify-content-around w-75 p-4" style={{ background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px' }}>
        <div className="form-group">
          <label htmlFor="destination">Selecciona un destino</label>
          <select
            id="destination"
            className="form-control"
            value={destination}
            onChange={handleDestinationChange}
          >
            <option value="">Elige un destino</option>
            <option value="destination1">Destino 1</option>
            <option value="destination2">Destino 2</option>
            <option value="destination3">Destino 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Selecciona una duración</label>
          <select
            id="duration"
            className="form-control"
            value={duration}
            onChange={handleDurationChange}
          >
            <option value="">Elige una duración</option>
            <option value="duration1">Duración 1</option>
            <option value="duration2">Duración 2</option>
            <option value="duration3">Duración 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio máximo</label>
          <div className="price-input">
            <input
              type="range"
              id="price"
              name="price"
              className="form-control-range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <span className="price-label">Precio: {maxPrice}</span>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </form>
      {/* Contenido para los destinos destacados */}
    </div>
  );
}

export default FeaturedDestinations;
