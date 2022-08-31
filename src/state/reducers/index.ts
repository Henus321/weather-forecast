import { combineReducers } from 'redux';
import geocodingReducer from './geocodingReducer';

const reducers = combineReducers({
  geocoding: geocodingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
