import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Map, { GeolocateControl, Marker, NavigationControl, ViewStateChangeEvent } from 'react-map-gl';
import LocationDataCard from '../../components/LocationDataCard/LocationDataCard';

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
  const [zoom, setZoom] = useState(8); //неиспользуемое состояние

  const onMoveHandler = (e: ViewStateChangeEvent) => {
    setLang(e.viewState.longitude);
    setLat(e.viewState.latitude);
  };

  return (
    <>
      <LocationDataCard latitude={lat} longitude={lng} />
      <Map
        mapboxAccessToken={token}
        style={mapStyle}
        latitude={lat}
        longitude={lng}
        zoom={zoom}
        mapStyle={MapStyles.STREETS_9}
        onMove={onMoveHandler}
      >
        {markersCollection.map(item =>
          <Marker {...item.coordinates} key={item.name} />
        )}
        <NavigationControl position='bottom-right' />
        <GeolocateControl position='bottom-right' />
      </Map>
    </>
  )
});

export default MapPage;
