import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '30vh'
  };
  
  const center = {
    lat: 37.0902,
    lng: -95.7129
  };
  
  const usBounds = {
    north: 49.3457868,
    south: 24.7433195,
    west: -124.7844079,
    east: -66.9513812,
  };
  
  function GoogleMapComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyC6JtvqtVfE35I_JYC-Jsc2kYxHT29-7nE",
      mapIds: ['night']
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        restriction={{latLngBounds: usBounds, strictBounds: true}}
        mapContainerClassName="dark-mode"
        options={{ mapId: 'night', zoomControl: false }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(GoogleMapComponent)
  