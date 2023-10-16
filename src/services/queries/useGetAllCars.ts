import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { carsApi } from '@services/api/routes';
import { GetCarsResponse } from '@services/api/types';

type GetAllCarsOptions = UseQueryOptions<
  GetCarsResponse,
  AxiosError,
  GetCarsResponse
>;

export const getCarsQueryKey = 'getCarsQueryKey';

const getAllCars = async () => {
  const { data } = await carsApi.getAllCars();

  return data;
};

const useGetAllCars = (options?: GetAllCarsOptions) =>
  useQuery<GetCarsResponse, AxiosError, GetCarsResponse>(
    getCarsQueryKey,
    getAllCars,
    options,
  );

export default useGetAllCars;
