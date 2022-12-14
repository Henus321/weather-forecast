import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ForecastAction,
  ForecastActionTypes,
  ForecastFetchedData,
  ForecastItem,
} from '../../types/forecast';
import { CityItem } from '../../types/city';
import {
  createLocationObject,
  createCurrentTimeObject,
  createCurrentForecastObject,
  createHoursObject,
  createWeekObject,
} from '../../utils/dataConverters/dataConverter';
import { FETCH_ERROR, METEO_API_URL } from '../../config';

export const FetchForecastAsync = (cityData: CityItem) => {
  const { latitude, longitude, timezone } = cityData;
  return async (dispatch: Dispatch<ForecastAction>) => {
    dispatch({
      type: ForecastActionTypes.FETCH_FORECAST,
    });
    try {
      const { data } = await axios.get<ForecastFetchedData>(
        `${METEO_API_URL}`,
        {
          params: {
            latitude: latitude,
            longitude: longitude,
            hourly: 'temperature_2m,weathercode',
            current_weather: true,
            windspeed_unit: 'ms',
            timezone: timezone,
          },
        }
      );

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
    } catch (error: any) {
      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_ERROR,
        payload: FETCH_ERROR,
      });
    }
  };
};
