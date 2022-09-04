import axios from 'axios';
import { Dispatch } from 'redux';
import { GeocodingAction, GeocodingActionTypes } from '../../types/geocoding';

export const SearchGeocoding = (city: string) => {
  return async (dispatch: Dispatch<GeocodingAction>) => {
    dispatch({
      type: GeocodingActionTypes.FETCH_GEOCODING,
    });
    try {
      const { data } = await axios.get(
        'https://geocoding-api.open-meteo.com/v1/search',
        {
          params: {
            name: city,
          },
        }
      );

      const cities = data.results[0];

      dispatch({
        type: GeocodingActionTypes.FETCH_GEOCODING_SUCCESS,
        payload: cities,
      });
    } catch (error: any) {
      dispatch({
        type: GeocodingActionTypes.FETCH_GEOCODING_ERROR,
        payload: error.message,
      });
    }
  };
};
