import {
  ForecastState,
  ForecastItem,
  Location,
  CurrentTime,
  CurrentForecast,
  HoursForecast,
  WeekForecast,
  ForecastAction,
  ForecastActionTypes,
} from '../../types/forecast';

const initialLocation: Location = {
  name: '',
  timezone: '',
  latitude: 0,
  longitude: 0,
};
const initialCurrentTime: CurrentTime = {
  time: '',
  timeOfDay: '',
  dayOfWeek: '',
  dayOfWeekIndex: 0,
};
const initialCurrentForecast: CurrentForecast = {
  temperature: '',
  weatherIcon: '',
  windSpeed: 0,
};
const initialHoursForecast: HoursForecast = {
  time: [],
  weatherIcons: [],
  temperature: [],
};
const initialWeekForecast: WeekForecast = {
  weekDaytimeTemp: [],
  weekNighttimeTemp: [],
  weekWeatherIcons: [],
  weekDays: [],
  weekDates: [],
};

const initialItem: ForecastItem = {
  location: initialLocation,
  currentTime: initialCurrentTime,
  currentForecast: initialCurrentForecast,
  hoursForecast: initialHoursForecast,
  weekForecast: initialWeekForecast,
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