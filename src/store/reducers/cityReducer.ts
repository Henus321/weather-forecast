import {
  CityItem,
  CityState,
  CityAction,
  CityActionTypes,
} from '../../types/city';

const initialItem: CityItem = {
  latitude: 0,
  longitude: 0,
  country: '',
  name: '',
  timezone: '',
  dayOfWeek: '',
  curCityTime: '',
};

const initialState: CityState = {
  loading: true,
  error: null,
  city: initialItem,
};

export const cityReducer = (
  state: CityState = initialState,
  action: CityAction
): CityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITY:
      return {
        loading: true,
        error: null,
        city: initialItem,
      };
    case CityActionTypes.FETCH_CITY_SUCCESS:
      return {
        loading: false,
        error: null,
        city: action.payload,
      };
    case CityActionTypes.FETCH_CITY_ERROR:
      return {
        loading: false,
        error: action.payload,
        city: initialItem,
      };
    default:
      return state;
  }
};
