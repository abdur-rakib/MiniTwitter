import axios from 'axios';
import {BASE_URL} from '../config/urls';
import store from '../redux/store';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  function (request) {
    // check if any token contains
    const {token} = store.getState().user;

    // set token to header
    axios.defaults.headers['X-Jwt-Token'] = token ? `Bearer ${token}` : '';
    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// get service
export const getService = async (request: any) => {
  try {
    const response = await axios({
      method: 'get',
      url: request.endpoint,
    });
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
