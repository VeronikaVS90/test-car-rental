import axios from 'axios';

const BASE_URL = 'https://64bacb3c5e0670a501d6a9a0.mockapi.io';

export const getAllCars = async () => await axios.get(`${BASE_URL}/adverts`);