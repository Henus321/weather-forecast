import axios from 'axios';
import { TIMEZONE_API_URL } from '../../config';

export const getTimeInCity = async (timezone: string) => {
  try {
    const { data } = await axios.get(`${TIMEZONE_API_URL}${timezone}`);

    return data;
  } catch (error: any) {
    throw new Error('Timezone definition error');
  }
};
