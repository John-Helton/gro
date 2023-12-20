import React, { useState, useEffect } from "react";
import RatingStars from "react-rating-stars-component";
import { getAllTours } from "../../services/TursServices";
import { Link } from "react-router-dom";

export default function PopularTours() {
  const [tours, setTours] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const toursData = await getAllTours();

      // Ordenar tours por estrellas de manera descendente
      const sortedTours = toursData.sort((a, b) => b.rating - a.rating);

      // Tomar solo los 3 tours más populares
      const popularTours = sortedTours.slice(0, 3);

      setTours(popularTours);
    };

    fetchData();
  }, []);

  const handleInterval = () => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 1);
    }, 4000);

    return () => clearInterval(interval);
  };

  useEffect(handleInterval, []); // Llamada a useEffect solo una vez al montar el componente

  return (
    <div className="container mt-5">
      <h2 className="text-center">LOS TOURS MÁS POPULARES</h2>
      <div className="row">
        {tours.map((tour) => (
          <div key={tour.name} className="col-md-6 col-lg-4 mb-4">
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
      <div className="text-center">
        <Link to="/tour">
          <button className="btn btn-primary">Ver más</button>
        </Link>
      </div>
    </div>
  );
}
