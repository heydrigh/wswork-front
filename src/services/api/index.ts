import { baseURL } from '@utils/env-variables';
import axios from 'axios';

export const api = axios.create({
  baseURL,
});
