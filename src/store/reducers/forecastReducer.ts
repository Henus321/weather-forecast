import {
  ForecastState,
  ForecastAction,
  ForecastActionTypes,
} from '../../types/forecast';

const initialState: ForecastState = {
  loading: false,
  error: null,
  forecast: [],
};

export const forecastReducer = (
  state: ForecastState = initialState,
  action: ForecastAction
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.FETCH_FORECAST:
      return {
        loading: true,
        error: null,
        forecast: [],
      };
    case ForecastActionTypes.FETCH_FORECAST_SUCCESS:
      return {
        loading: false,
        error: null,
        forecast: action.payload,
      };
    case ForecastActionTypes.FETCH_FORECAST_ERROR:
      return {
        loading: false,
        error: action.payload,
        forecast: [],
      };
    default:
      return state;
  }
};
