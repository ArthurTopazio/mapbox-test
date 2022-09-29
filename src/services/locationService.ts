import axios from 'axios';

import { locationServiceUrl } from '../utils/consts';

export default class LocationService {
  static async getCities(city: string) {
    const response = await axios.get(locationServiceUrl, {
      params: {
        name: city
      }
    })
    return response
  }
};