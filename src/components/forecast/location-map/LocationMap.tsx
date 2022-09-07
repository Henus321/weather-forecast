import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './locationMap.scss';
import 'leaflet/dist/leaflet.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const LocationMap: React.FC = () => {
  const { forecast, loading } = useTypedSelector((state) => state.forecast);

  const { location } = forecast;
  const { latitude, longitude } = location;

  return (
    <div className="location-map ">
      {!loading && (
        <>
          <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default LocationMap;
