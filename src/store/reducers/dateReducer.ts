import { DateState, DateAction, DateActionTypes } from '../../types/date';

const initialState: DateState = {
  loading: false,
  error: null,
  date: {},
};

export const dateReducer = (
  state: DateState = initialState,
  action: DateAction
): DateState => {
  switch (action.type) {
    case DateActionTypes.FETCH_DATE:
      return {
        loading: true,
        error: null,
        date: {},
      };
    case DateActionTypes.FETCH_DATE_SUCCESS:
      return {
        loading: false,
        error: null,
        date: action.payload,
      };
    case DateActionTypes.FETCH_DATE_ERROR:
      return {
        loading: false,
        error: action.payload,
        date: {},
      };
    default:
      return state;
  }
};
