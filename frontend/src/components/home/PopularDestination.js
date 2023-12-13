import React, { useState, useEffect } from 'react';

export default function PopularDestination() {
    const destinations = [
        { name: 'Quito', tours: 10, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
        { name: 'Guayaquil', tours: 8, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
        { name: 'Cuenca', tours: 6, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
        { name: 'Galápagos', tours: 12, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
        { name: 'Baños', tours: 12, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
        { name: 'Perdenales', tours: 12, images: ['/static/quito.jpg', '/static/quito2.jpg'] },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container mt-5'>
            <h2 className='text-uppercase text-center'>Destinos Populares en Ecuador</h2>
            <div className='row'>
                {destinations.map((destination) => (
                    <div key={destination.name} className='col-md-6 col-lg-4 mb-4'>
                        <div className='card'>
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
                                    {destination.tours} tours
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
