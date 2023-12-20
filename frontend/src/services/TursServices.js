import axios from "axios";

const baseURL = "/api";

export const getAllTours = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/tours`);
    return data;
  } catch (error) {
    console.error("Error al obtener todos los tours:", error.response);
    throw error;
  }
};

export const getTourDetails = async (tourId) => {
  try {
    const { data } = await axios.get(`${baseURL}/tours/${tourId}`);
    return data;
  } catch (error) {
    console.error("Error al obtener detalles del tour:", error.response);
    throw error;
  }
};

export const createTour = async (newTour) => {
  try {
    const { data } = await axios.post(`${baseURL}/tours`, newTour);
    return data;
  } catch (error) {
    console.error("Error al crear un nuevo tour:", error.response);
    throw error;
  }
};

export const updateTour = async (tourId, updatedTour) => {
  try {
    const { data } = await axios.put(`${baseURL}/tours/${tourId}`, updatedTour);
    return data;
  } catch (error) {
    console.error("Error al actualizar el tour:", error.response);
    throw error;
  }
};

export const deleteTour = async (tourId) => {
  try {
    const { data } = await axios.delete(`${baseURL}/tours/${tourId}`);
    return data;
  } catch (error) {
    console.error("Error al eliminar el tour:", error.response);
    throw error;
  }
};

export const getAllDestinations = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/destinos`);
    return data;
  } catch (error) {
    console.error("Error al obtener todos los destinos:", error.response);
    throw error;
  }
};
const createDestino = async (newDestino) => {
  try {
    const { data } = await axios.post(`${baseURL}/destinos`, newDestino);
    return data;
  } catch (error) {
    console.error("Error al crear un nuevo destino:", error.response);
    throw error;
  }
};

const updateDestino = async (destinoId, updatedDestino) => {
  try {
    const { data } = await axios.put(`${baseURL}/destinos/${destinoId}`, updatedDestino);
    return data;
  } catch (error) {
    console.error("Error al actualizar el destino:", error.response);
    throw error;
  }
};

const deleteDestino = async (destinoId) => {
  try {
    const { data } = await axios.delete(`${baseURL}/destinos/${destinoId}`);
    return data;
  } catch (error) {
    console.error("Error al eliminar el destino:", error.response);
    throw error;
  }
};

export {
  // ... (otras funciones)
  createDestino,
  updateDestino,
  deleteDestino,
};
// Agrega aquí más métodos para CRUD de destinos si es necesario

