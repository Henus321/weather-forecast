import axios from 'axios';
import { TIMEZONE_API_URL } from '../../config';
import { ITimeInCity } from '../../types/utils';

export const getTimeInCity = async (timezone: string) => {
  const TIMEZONE_API_KEY = process.env.REACT_APP_TIMEZONE_API_KEY;
  try {
    const { data } = await axios.get<ITimeInCity>(
      `${TIMEZONE_API_URL}${timezone}&token=${TIMEZONE_API_KEY}`
    );

    return data.data.datetime;
  } catch (error: any) {
    throw new Error('Timezone definition error');
  }
};
