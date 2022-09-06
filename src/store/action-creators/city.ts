import { Dispatch } from 'redux';
import { CityAction, CityActionTypes } from '../../types/city';
import { geocoding } from '../../utils/geocoding/geocoding.utils';
import { getTimeInCity } from '../../utils/timezone/timezone.utils';

export const FetchCityAsync = (city: string) => {
  return async (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionTypes.FETCH_CITY,
    });
    try {
      const { latitude, longitude, country, name, timezone } = await geocoding(
        city
      );
      const { day_of_week: dayOfWeek, datetime: curCityTime } =
        await getTimeInCity(timezone);

      const cityData = {
        latitude,
        longitude,
        country,
        name,
        timezone,
        dayOfWeek,
        curCityTime,
      };

      dispatch({
        type: CityActionTypes.FETCH_CITY_SUCCESS,
        payload: cityData,
      });
      // error type?
    } catch (error: any) {
      dispatch({
        type: CityActionTypes.FETCH_CITY_ERROR,
        payload: error.message,
      });
    }
  };
};