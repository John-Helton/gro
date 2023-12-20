import React, { useState, useEffect } from "react";
import RatingStars from "react-rating-stars-component";
import { getAllTours } from "../../services/TursServices";
import { Link } from "react-router-dom";

export default function ToursAll() {
  const [tours, setTours] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toursData = await getAllTours();
        setTours(toursData);
      } catch (error) {
        console.error("Error al obtener tours:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">BUSCA TU TOUR IDEAL</h2>
      <div className="row">
        {tours.map((tour) => (
          <div key={tour.id} className="col-md-6 col-lg-4 mb-4">
            <Link to={`/tours/${tour.id}`} key={tour.id}>
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
                    src={tour.images}
                    alt={tour.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: "1",
                    }}
                  />
                  <div className="tour-price-overlay">
                    {tour.price} USD
                  </div>
                  <div className="tour-name-overlay">
                    {tour.name}
                  </div>
                </div>
                <div className="card-body text-center">
                  <div style={{ margin: "auto", display: "table" }}>
                    <RatingStars
                      count={5}
                      value={parseFloat(tour.rating)}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="card-text">Duración: {tour.days} días</p>
                  <p className="card-text">Guía: {tour.guide}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
