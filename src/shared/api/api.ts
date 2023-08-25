import axios, { CreateAxiosDefaults } from 'axios';
import { __API__} from '@shared/vars/vars'
import { USER_LOCALSTORAGE_KEY } from '@shared/vars/localstorage/localstorage'

export const $api = axios.create({
  baseURL: __API__,
} as CreateAxiosDefaults);

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }

  return config;
});
