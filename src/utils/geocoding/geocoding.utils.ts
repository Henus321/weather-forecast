import axios from 'axios';
import { GEO_API_URL } from '../../config';

export const geocoding = async (city: string) => {
  const { data } = await axios.get(`${GEO_API_URL}`, {
    params: {
      name: city,
    },
  });

  return data.results[0];
};
