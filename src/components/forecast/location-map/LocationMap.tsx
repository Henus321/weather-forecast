import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './locationMap.scss';
import 'leaflet/dist/leaflet.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const LocationMap: React.FC = () => {
  const { location } = useTypedSelector((state) => state.forecast.forecast);

  const { latitude, longitude } = location;

  return (
    <div className="location-map ">
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
    </div>
  );
};

export default LocationMap;
