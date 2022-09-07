import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ForecastAction,
  ForecastActionTypes,
  ForecastItem,
} from '../../types/forecast';
import { CityItem } from '../../types/city';
import {
  createLocationObject,
  createCurrentTimeObject,
  createCurrentForecastObject,
  createHoursObject,
  createWeekObject,
} from '../../utils/dataConverters/data-converter.utils';
import { METEO_API_URL } from '../../config';

export const FetchForecastAsync = (cityData: CityItem) => {
  const { latitude, longitude, timezone } = cityData;
  return async (dispatch: Dispatch<ForecastAction>) => {
    dispatch({
      type: ForecastActionTypes.FETCH_FORECAST,
    });
    try {
      const { data } = await axios.get(`${METEO_API_URL}`, {
        params: {
          latitude: latitude,
          longitude: longitude,
          hourly: 'temperature_2m,weathercode',
          current_weather: true,
          windspeed_unit: 'ms',
          timezone: timezone,
        },
      });

      console.log(data);

      const location = createLocationObject(cityData);
      const currentTime = createCurrentTimeObject(cityData);
      const currentForecast = createCurrentForecastObject(data);
      const hoursForecast = createHoursObject(data);
      const weekForecast = createWeekObject(data, cityData);

      const forecast: ForecastItem = {
        location,
        currentTime,
        currentForecast,
        hoursForecast,
        weekForecast,
      };

      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
        payload: forecast,
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
