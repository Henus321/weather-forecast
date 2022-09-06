import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { forecastReducer } from './forecastReducer';

const reducers = combineReducers({
  forecast: forecastReducer,
  city: cityReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
