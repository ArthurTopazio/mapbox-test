import { useEffect, useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl';

const token = 'pk.eyJ1IjoicGVyZXJlIiwiYSI6ImNsOG1yMzcwbTA5ZXgzb2xoaHlxaXJhaGwifQ.RBSqzD-2nJnORUtG2r3m0g';

const MapPage = () => {

  const [lng, setLang] = useState(36);
  const [lat, setLat] = useState(50);
  const [zoom, setZoom] = useState(8);

  return (
    <Map
      mapboxAccessToken={token}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom
      }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
    >
      <Marker latitude={lat} longitude={lng} />
      <Marker latitude={lat + 0.1} longitude={lng + 0.1} />
      <FullscreenControl />
      <NavigationControl position='bottom-left' />
      <GeolocateControl />
    </Map>
  )
}

export default MapPage;
