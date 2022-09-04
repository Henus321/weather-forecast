import axios from 'axios';
import { Dispatch } from 'redux';
import { ForecastAction, ForecastActionTypes } from '../../types/forecast';

export const FetchForecastAsync = () => {
  return async (dispatch: Dispatch<ForecastAction>) => {
    dispatch({
      type: ForecastActionTypes.FETCH_FORECAST,
    });
    try {
      const { data } = await axios.get(
        'https://api.open-meteo.com/v1/forecast',
        {
          params: {
            // temporary hardcode, user geolocation/current search
            latitude: '52.52',
            longitude: '13.41',
            hourly: 'temperature_2m',
          },
        }
      );

      const { hourly } = data;

      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
        payload: hourly,
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
