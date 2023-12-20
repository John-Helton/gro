import axios from "axios";

export const getAllTours = async () => {
  const {data} = await axios.get('/api/tours/');
  return data;
};

export const getAllDestinations = async () => {
  const {data} = await axios.get('/api/destinos/');
  return data;
};



export const getTourDetails = async (tourId) => {
  try {
    const response = await axios.get(`/api/tours/${tourId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del tour:', error.response);
    throw error;
  }
};