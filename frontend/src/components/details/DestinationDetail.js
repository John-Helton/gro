import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllDestinations } from "../../services/TursServices";
import RatingStars from "react-rating-stars-component";

export default function DestinationDetail() {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        const fetchDestinationDetail = async () => {
            try {
                const allDestinations = await getAllDestinations();
                const selectedDestination = allDestinations.find((dest) => dest.id === Number(id));

                if (selectedDestination) {
                    setDestination(selectedDestination);
                }
            } catch (error) {
                console.log('Error al obtener los detalles del destino:', error);
            }
        };

        fetchDestinationDetail();
    }, [id]);

    if (!destination) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>

            <h3>Tours Disponibles</h3>
            {destination.tours.length > 0 ? (
                <div className="row">
                    {destination.tours.map((tour) => (
                        <div key={tour.id} className="col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <div className="card-img-top position-relative">
                                    <img
                                        src={tour.images[0]} // Ajusta según cómo tengas almacenadas las imágenes
                                        alt={tour.name}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: "1" }}
                                    />
                                    <div className="card-body text-center">
                                        <div style={{ margin: "auto", display: "table" }}>
                                            <RatingStars
                                                count={5}
                                                value={tour.rating}
                                                edit={false}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="card-text">Duración: {tour.days} días</p>
                                        <p className="card-text">Guía: {tour.guide}</p>
                                        <p className="card-text">Precio: {tour.price} USD</p>
                                        {/* Agrega más detalles según sea necesario */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay tours disponibles para este destino.</p>
            )}
        </div>
    );
}
