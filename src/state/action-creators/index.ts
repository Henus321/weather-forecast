import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SearchGeocoding = (city: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_GEOCODING,
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

      const cities = data.results.map((result: any) => {
        return result.name;
      });

      dispatch({
        type: ActionType.SEARCH_GEOCODING_SUCCESS,
        payload: cities,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_GEOCODING_ERROR,
        payload: error.message,
      });
    }
  };
};
