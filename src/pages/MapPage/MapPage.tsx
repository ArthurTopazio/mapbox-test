import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { mapStyle } from '.';
import { Context } from '../..';
import { IUser } from '../../models/IUser';
import { ICoordinates } from '../../models/IСoordinates';
import { MapStyles } from '../../assets/mapStyles';
import { markersCollection } from '../../utils/markersCollection';

const MapPage = observer(() => {

  const { user, location } = useContext(Context);
  const { token } = user.user as IUser;
  const { latitude, longitude } = location.locationCoordinates as ICoordinates;

  const [lng, setLang] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(8);

  return (
    <Map
      mapboxAccessToken={token}
      style={mapStyle}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom
      }}
      mapStyle={MapStyles.STREETS_9}
    >
      {markersCollection.map(item =>
        <Marker {...item.coordinates} key={item.name} />
      )}
      <NavigationControl position='bottom-left' />
      <GeolocateControl />
    </Map>
  )
});

export default MapPage;
