import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { carsApi } from '@services/api/routes';
import { CreateCarDTO, CreateCarResponse } from '@services/api/types';

type CreateCarOptions = UseMutationOptions<
  CreateCarResponse,
  AxiosError,
  CreateCarDTO
>;

export const createCarQueryKey = 'createCarQueryKey';

const createCar = async (createCarDTO: CreateCarDTO) => {
  const { data } = await carsApi.createCar(createCarDTO);

  return data;
};

const useCreateCar = (options?: CreateCarOptions) =>
  useMutation<CreateCarResponse, AxiosError, CreateCarDTO>(
    createCarQueryKey,
    createCar,
    {
      ...options,
    },
  );

export default useCreateCar;
