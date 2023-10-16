import { api } from '.';
import { CreateCarDTO, GetCarsResponse } from './types';

export const carsApi = {
  getAllCars: () => api.get<GetCarsResponse>('/cars'),
  createCar: (createCarDTO: CreateCarDTO) => api.post('/cars', createCarDTO),
};
