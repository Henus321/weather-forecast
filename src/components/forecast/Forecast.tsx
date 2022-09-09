import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FETCH_ERROR, SEARCH_ERROR } from '../../config';

import TodayForecast from './today-forecast/TodayForecast';
import LocationMap from './location-map/LocationMap';
import WeekForecast from './week-forecast/WeekForecast';
import './forecast.scss';

const Forecast: React.FC = () => {
  const {
    city,
    error: searchError,
    loading: searchLoading,
  } = useTypedSelector((state) => state.city);
  const { error: fetchError, loading: fetchLoading } = useTypedSelector(
    (state) => state.forecast
  );
  const { FetchForecastAsync } = useActions();
  const loading = searchLoading || fetchLoading;

  useEffect(() => {
    if (city.name) FetchForecastAsync(city);
    // eslint-disable-next-line
  }, [city]);

  return (
    <div className="forecast">
      {searchError && <h2 className="forecast__notice">{SEARCH_ERROR}</h2>}
      {fetchError && <h2 className="forecast__notice">{FETCH_ERROR}</h2>}
      {loading && <h2 className="forecast__notice">Loading...</h2>}
      {!searchError && !fetchError && !loading && (
        <>
          <TodayForecast />
          <LocationMap />
          <WeekForecast />
        </>
      )}
    </div>
  );
};

export default Forecast;
