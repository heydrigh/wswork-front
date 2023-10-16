import { Car } from 'types/car';

export type GetCarsResponse = Car[];

export interface CreateCarResponse {
  car: Car;
}

export interface CreateCarDTO extends Car {}
