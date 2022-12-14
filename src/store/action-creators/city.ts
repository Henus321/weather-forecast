import { Dispatch } from 'redux';
import { GEOLOCATION_ERROR, SEARCH_ERROR } from '../../config';
import { CityAction, CityActionTypes, Coords } from '../../types/city';
import { geocoding, reverseGeocoding } from '../../utils/geocoding/geocoding';
import { getTimeInCity } from '../../utils/timezone/timezone';

export const FetchCityAsync = (city: string) => {
  return async (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionTypes.FETCH_CITY,
    });
    try {
      const { latitude, longitude, country, name, timezone } = await geocoding(
        city
      );
      const { day_full: dayOfWeek, time: curCityTime } = await getTimeInCity(
        timezone
      );

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
    } catch (error: any) {
      dispatch({
        type: CityActionTypes.FETCH_CITY_ERROR,
        payload: `${SEARCH_ERROR}. ${error.message}`,
      });
    }
  };
};

export const FetchCityByUserCoordsAsync = (coords: Coords) => {
  return async (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionTypes.FETCH_CITY,
    });
    try {
      const { city } = await reverseGeocoding(coords);
      const { latitude, longitude, country, name, timezone } = await geocoding(
        city
      );
      const { day_full: dayOfWeek, time: curCityTime } = await getTimeInCity(
        timezone
      );
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
    } catch (error: any) {
      dispatch({
        type: CityActionTypes.FETCH_CITY_ERROR,
        payload: `${SEARCH_ERROR}. ${error.message}`,
      });
    }
  };
};

export const ThrowGeolocationError = () => {
  return { type: CityActionTypes.FETCH_CITY_ERROR, payload: GEOLOCATION_ERROR };
};
