import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Map, { GeolocateControl, Marker, NavigationControl, ViewStateChangeEvent, Popup, GeolocateResultEvent } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import LocationDataCard from '../../components/LocationDataCard/LocationDataCard';
import SetBar from '../../components/SetBar/SetBar';

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

  const [zoom, setZoom] = useState(8);

  const onMoveHandler = (e: ViewStateChangeEvent) => {
    location.setLatitude(e.viewState.latitude);
    location.setLongitude(e.viewState.longitude);
  };
  const onGeoLocHandler = (e: GeolocateResultEvent) => {
    location.setLatitude(e.coords.latitude);
    location.setLongitude(e.coords.longitude);
  };

  return (
    <>
      <LocationDataCard latitude={latitude} longitude={longitude} />
      <SetBar />
      <Map
        mapboxAccessToken={token}
        style={mapStyle}
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        onZoom={(e) => setZoom(e.viewState.zoom)}
        mapStyle={MapStyles.STREETS_9}
        onMove={onMoveHandler}
      >
        {markersCollection.map(item =>
          <Marker {...item.coordinates} key={item.name}><Popup {...item.coordinates}>{item.name}</Popup></Marker>
        )}
        <NavigationControl position='bottom-right' />
        <GeolocateControl position='bottom-right' onGeolocate={onGeoLocHandler} />
      </Map>
    </>
  )
});

export default MapPage;
