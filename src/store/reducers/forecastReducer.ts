import {
  ForecastState,
  ForecastItem,
  ForecastAction,
  ForecastActionTypes,
} from '../../types/forecast';

const initialItem: ForecastItem = {
  time: '',
  temperature: 0,
};

const initialState: ForecastState = {
  loading: false,
  error: null,
  forecast: initialItem,
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
        forecast: initialItem,
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
        forecast: initialItem,
      };
    default:
      return state;
  }
};
