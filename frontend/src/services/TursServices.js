import { toursData } from "./data";
import { destinationsData } from "./data";

export const getAllTours = () => {
  return toursData;
}

export const getAllDestinations = () => {
  return destinationsData;
}

export const getTourDetails = (tourId) => {
  const tour = toursData.find((tour) => tour.id === Number(tourId));

  if (!tour) {
    throw new Error(`Tour con ID ${tourId} no encontrado`);
  }

  return tour;
}