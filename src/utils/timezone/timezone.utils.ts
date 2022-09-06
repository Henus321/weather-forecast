import axios from 'axios';

export const getTimeInCity = async (timezone: string) => {
  const { data } = await axios.get(
    `http://worldtimeapi.org/api/timezone/${timezone}`
  );

  return data;
};
