import axios from 'axios';
import * as consts from './network.constants';

export const config = {
  timeout: 3000,
};

export const network = {
  base: axios.create({
    ...config,
    baseURL: consts.ROOT_URL,
    withCredentials: true,
  }),
  nominatim: axios.create({
    ...config,
    baseURL: consts.NOMINATIM_OSM_URL,
  }),
};
