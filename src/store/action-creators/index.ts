import * as GeocodingActionCreators from './geocoding';
import * as ForecastActionCreators from './forecast';
import * as DateActionCreators from './date';

// eslint-disable-next-line
export default {
  ...GeocodingActionCreators,
  ...ForecastActionCreators,
  ...DateActionCreators,
};
