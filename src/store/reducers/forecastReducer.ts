import {
  ForecastArrays,
  ForecastState,
  ForecastAction,
  ForecastActionTypes,
} from '../../types/forecast';

const initialData: ForecastArrays = {
  temperature: [],
  time: [],
};

const initialState: ForecastState = {
  loading: false,
  error: null,
  forecast: initialData,
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
        forecast: initialData,
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
        forecast: initialData,
      };
    default:
      return state;
  }
};
