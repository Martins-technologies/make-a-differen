import axios from 'axios';
import { API_URL } from '@/utils/constants';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Request failed';
    return Promise.reject({ ...error, message, errors: error.response?.data?.errors || [] });
  },
);

export function unwrap(response) {
  return response.data?.data;
}
