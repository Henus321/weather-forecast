export interface IGeocoding {
  results: IGeocodingItem[];
}

interface IGeocodingItem {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
}

export interface IReverseGeocoding {
  lat: string;
  lon: string;
  display_name: string;
  address: {
    city: string;
    county: string;
    state: string;
    region: string;
    country: string;
  };
}

export interface ITimeInCity {
  data: {
    datetime: {
      time: string;
      day_full: string;
    };
  };
}
