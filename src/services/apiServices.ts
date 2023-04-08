import axios from 'axios';
import {BASE_URL} from '../config/urls';
import store from '../redux/store';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  async (config: any) => {
    const {token} = store.getState().user;
    config.headers = {
      'X-Jwt-Token': token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// get service
export const getService = async (request: any) => {
  try {
    const response = await axios.get(request.endpoint);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

// post service
export const postService = async (request: any) => {
  try {
    const response = await axios.post(request.endpoint, request.data);
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error?.response?.data?.error || 'Something went wrong',
    );
  }
};
