// PopularTours.js
import React, { useState, useEffect } from "react";
import RatingStars from "react-rating-stars-component";
import { getAllTours } from "../../services/TursServices"

export default function PopularTours() {
  const [tours, setTours] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Llamada a la función del servicio para obtener los tours
    const fetchData = async () => {
      const toursData = await getAllTours();
      setTours(toursData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">LOS TOURS MAS POPULARES</h2>
      <div className="row">
        {tours.map((tour) => (
          <div key={tour.name} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div
                className="card-img-top position-relative"
                style={{
                  width: "100%",
                  height: "300px",
                  overflow: "hidden",
                  transition: "opacity 0.5s",
                }}
              >
                <img
                  src={tour.images[currentImageIndex]}
                  alt={tour.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "1",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px",
                    transition: "opacity 0.5s",
                    fontWeight: "bold",
                  }}
                >
                  {tour.price} USD
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px",
                    transition: "opacity 0.5s",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {tour.name}
                </div>
              </div>
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
                <p className="card-text">Duracion: {tour.days} days</p>
                <p className="card-text">Guia: {tour.guide}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
