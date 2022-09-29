import { FC } from 'react';

interface LocationDataCardTPD {
  latitude: number,
  longitude: number
};

const LocationDataCard: FC<LocationDataCardTPD> = ({ latitude, longitude }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 50,
        zIndex: 102,
        color: '#06498d',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '7px',
        boxShadow: '0 0 3px gray'
      }}>
      <div>{`longitude: ${longitude.toFixed(2)}`}</div>
      <div>{`latitude: ${latitude.toFixed(2)}`}</div>
    </div>
  )
}

export default LocationDataCard;
