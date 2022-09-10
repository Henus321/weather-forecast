import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { usePosition } from '../../hooks/usePosition';

import TodayForecast from './today-forecast/TodayForecast';
import LocationMap from './location-map/LocationMap';
import WeekForecast from './week-forecast/WeekForecast';
import ErrorMenu from './error-menu/ErrorMenu';
import Spinner from './spinner/Spinner';

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
  const {
    FetchForecastAsync,
    FetchCityByUserCoordsAsync,
    ThrowGeolocationError,
  } = useActions();

  const [firstLoading, setFirstLoading] = useState(true);
  const { coords, userDeniedGeo } = usePosition();
  const firstLoadWithoutGeo = firstLoading && userDeniedGeo;
  const loading = searchLoading || fetchLoading;
  const error = searchError || fetchError;

  useEffect(() => {
    if (firstLoadWithoutGeo) {
      ThrowGeolocationError();
      setFirstLoading(false);
    }
    if (coords.latitude) FetchCityByUserCoordsAsync(coords);
    // eslint-disable-next-line
  }, [coords, userDeniedGeo]);

  useEffect(() => {
    if (city.name) FetchForecastAsync(city);

    // eslint-disable-next-line
  }, [city]);

  return (
    <div className="forecast">
      {loading ? (
        <Spinner />
      ) : !error ? (
        <>
          <TodayForecast />
          <LocationMap />
          <WeekForecast />
        </>
      ) : (
        <ErrorMenu errors={{ searchError, fetchError }} />
      )}
    </div>
  );
};

export default Forecast;
