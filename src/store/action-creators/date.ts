import axios from 'axios';
import { Dispatch } from 'redux';
import { DateAction, DateActionTypes } from '../../types/date';

export const FetchDateAsync = (timezone = 'europe/moscow') => {
  return async (dispatch: Dispatch<DateAction>) => {
    dispatch({
      type: DateActionTypes.FETCH_DATE,
    });
    try {
      const { data } = await axios.get(
        `http://worldtimeapi.org/api/timezone/${timezone}`
      );

      dispatch({
        type: DateActionTypes.FETCH_DATE_SUCCESS,
        payload: data,
      });
      // error type?
    } catch (error: any) {
      dispatch({
        type: DateActionTypes.FETCH_DATE_ERROR,
        payload: error.message,
      });
    }
  };
};
