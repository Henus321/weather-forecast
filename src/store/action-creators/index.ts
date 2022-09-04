import * as GeocodingActionCreators from './geocoding';
import * as ForecastActionCreators from './forecast';

// eslint-disable-next-line
export default {
  ...GeocodingActionCreators,
  ...ForecastActionCreators,
};
