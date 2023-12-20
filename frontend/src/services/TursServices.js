import { toursData } from "./data";
import axios from "axios";

export const getAllTours = async () => {
  const {data} = await axios.get('/api/tours/');
  return data;
};

export const getAllDestinations = async () => {
  const {data} = await axios.get('/api/destinos/');
  return data;
};



export const getTourDetails = (tourId) => {
  const tour = toursData.find((tour) => tour.id === Number(tourId));

  if (!tour) {
    throw new Error(`Tour con ID ${tourId} no encontrado`);
  }

  return tour;
}