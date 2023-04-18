import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 37.0902,
  lng: -95.7129
};

const usaBounds = {
  north: 49.38,
  south: 24.53,
  east: -66.94,
  west: -124.8,
};

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDvkZLKyCoZv0xfrNGGF-bSYQ5Hk0J7aEU',
    mapIds: ['roadmap']
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const options = {
    mapId: 'roadmap',
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    restriction: {
      latLngBounds: usaBounds,
      strictBounds: false,
    },
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : <></>;
}

export default React.memo(GoogleMapComponent);
