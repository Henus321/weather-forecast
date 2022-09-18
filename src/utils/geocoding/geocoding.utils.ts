import axios from 'axios';
import { GEO_API_URL, REVERSE_GEO_API_URL } from '../../config';

import { Coords } from '../../types/city';

export const geocoding = async (city: string) => {
  try {
    const { data } = await axios.get(`${GEO_API_URL}`, {
      params: {
        name: city,
      },
    });

    return data.results[0];
  } catch (error: any) {
    throw new Error('Geocoding error');
  }
};

export const reverseGeocoding = async (coords: Coords) => {
  try {
    const { latitude, longitude } = coords;
    const { data } = await axios.get(`${REVERSE_GEO_API_URL}`, {
      params: {
        format: 'json',
        lat: latitude,
        lon: longitude,
        zoom: 10,
      },
    });

    return data.address.city;
  } catch (error: any) {
    throw new Error('Reverse geocoding error');
  }
};
