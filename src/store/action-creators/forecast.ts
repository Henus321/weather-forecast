import axios from 'axios';
import { Dispatch } from 'redux';
import { ForecastAction, ForecastActionTypes } from '../../types/forecast';
import { CityItem } from '../../types/city';

export const FetchForecastAsync = (cityData: CityItem) => {
  const { latitude, longitude, name, country, curCityTime, dayOfWeek } =
    cityData;
  return async (dispatch: Dispatch<ForecastAction>) => {
    dispatch({
      type: ForecastActionTypes.FETCH_FORECAST,
    });
    try {
      const { data } = await axios.get(
        'https://api.open-meteo.com/v1/forecast',
        {
          params: {
            latitude: latitude,
            longitude: longitude,
            hourly: 'temperature_2m',
          },
        }
      );

      const { hourly } = data;
      const { time, temperature_2m } = hourly;

      const transformedArray = time.map((time: string, index: number) => {
        return {
          time: time,
          temperature: temperature_2m[index],
        };
      });

      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
        payload: transformedArray,
      });
      // error type?
    } catch (error: any) {
      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_ERROR,
        payload: error.message,
      });
    }
  };
};
