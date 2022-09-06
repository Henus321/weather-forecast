import axios from 'axios';

export const geocoding = async (city: string) => {
  const { data } = await axios.get(
    'https://geocoding-api.open-meteo.com/v1/search',
    {
      params: {
        name: city,
      },
    }
  );

  return data.results[0];
};
