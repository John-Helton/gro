import React, { useState, useEffect } from 'react';
import { getAllDestinations, getAllTours } from '../../services/TursServices';
import { Link } from 'react-router-dom';


export default function PopularDestination() {
    const [destinations, setDestinations] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const dataDestinations = await getAllDestinations();
            const dataTours = await getAllTours();

            // Asociar tours a destinos en destinationsData
            dataTours.forEach(tour => {
                const destination = dataDestinations.find(dest => dest.name.toLowerCase() === tour.destination.toLowerCase());
                if (destination) {
                    destination.tours.push(tour);
                }
            });

            // Guardar datos en el estado
            setDestinations(dataDestinations);
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
    const sortedDestinations = [...destinations].sort((a, b) => b.tours.length - a.tours.length);

    return (
        <div className='container mt-5'>
            <h2 className='text-uppercase text-center'>Destinos Populares en Ecuador</h2>
            <div className='row'>
                {sortedDestinations.map((destination) => (
                    <div key={destination.name} className='col-md-6 col-lg-4 mb-4'>
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
                                        src={destination.images[currentImageIndex]}
                                        alt={destination.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '1' }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: 'white',
                                            padding: '5px',
                                            transition: 'opacity 0.5s',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {destination.tours.length} tours
                                    </div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: 'white',
                                            padding: '5px',
                                            transition: 'opacity 0.5s',
                                            fontWeight: '700',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        {destination.name}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
