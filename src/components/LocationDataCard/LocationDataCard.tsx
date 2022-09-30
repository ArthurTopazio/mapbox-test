import { FC } from 'react';

import style from './LocationDataCard.module.css';

interface LocationDataCardTPD {
  latitude: number,
  longitude: number
};

const LocationDataCard: FC<LocationDataCardTPD> = ({ latitude, longitude }) => {
  return (
    <div className={style.wrapper}>
      <div>{`longitude: ${longitude.toFixed(2)}`}</div>
      <div>{`latitude: ${latitude.toFixed(2)}`}</div>
    </div>
  )
};

export default LocationDataCard;
