import * as ForecastActionCreators from './forecast';
import * as CityActionCreators from './city';

// eslint-disable-next-line
export default {
  ...CityActionCreators,
  ...ForecastActionCreators,
};
