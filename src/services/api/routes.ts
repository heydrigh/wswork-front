import { Car } from 'types/car';
import { api } from '.';

export type GetCarsResponse = Car[];

export const carsApi = {
  getAllCars: () => api.get<GetCarsResponse>('/cars'),
};
