import axios from 'axios';
import { TIMEZONE_API_URL } from '../../config';

export const getTimeInCity = async (timezone: string) => {
  const { data } = await axios.get(`${TIMEZONE_API_URL}${timezone}`);

  return data;
};
