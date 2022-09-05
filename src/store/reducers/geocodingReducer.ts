import {
  GeocodingItem,
  GeocodingState,
  GeocodingAction,
  GeocodingActionTypes,
} from '../../types/geocoding';

const initialData: GeocodingItem = {
  name: '',
  timezone: '',
  latitude: 0,
  longitude: 0,
  country: '',
};

const initialState: GeocodingState = {
  loading: false,
  error: null,
  data: initialData,
};

export const geocodingReducer = (
  state: GeocodingState = initialState,
  action: GeocodingAction
): GeocodingState => {
  switch (action.type) {
    case GeocodingActionTypes.FETCH_GEOCODING:
      return {
        loading: true,
        error: null,
        data: initialData,
      };
    case GeocodingActionTypes.FETCH_GEOCODING_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case GeocodingActionTypes.FETCH_GEOCODING_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: initialData,
      };
    default:
      return state;
  }
};
