import { combineReducers } from 'redux';
import { geocodingReducer } from './geocodingReducer';
import { forecastReducer } from './forecastReducer';
import { dateReducer } from './dateReducer';

const reducers = combineReducers({
  geocoding: geocodingReducer,
  forecast: forecastReducer,
  date: dateReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
