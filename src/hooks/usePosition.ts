import { useEffect, useState } from 'react';

import { ErrorMessage } from '../types/city';

const initialState = {
  latitude: 0,
  longitude: 0,
};

export const usePosition = () => {
  const [coords, setCoords] = useState(initialState);
  const [userDeniedGeo, setUserDeniedGeo] = useState(false);

  // temporary ANY
  const success = (coordsData: any) => {
    const { coords } = coordsData;
    const { latitude, longitude } = coords;
    setCoords({ latitude, longitude });
  };

  const error = () => {
    setUserDeniedGeo(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  }, []);

  return { coords, userDeniedGeo };
};
