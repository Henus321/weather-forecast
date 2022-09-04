import { combineReducers } from 'redux';
import { geocodingReducer } from './geocodingReducer';
import { forecastReducer } from './forecastReducer';

const reducers = combineReducers({
  geocoding: geocodingReducer,
  forecast: forecastReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
