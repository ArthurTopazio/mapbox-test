import { FC } from 'react';
import { ICoordinates } from '../../models/IСoordinates';

import style from './LocationDataCard.module.css';

const LocationDataCard: FC<ICoordinates> = ({ latitude, longitude }) => {
  return (
    <div className={style.wrapper}>
      <div>{`longitude: ${longitude.toFixed(2)}`}</div>
      <div>{`latitude: ${latitude.toFixed(2)}`}</div>
    </div>
  )
};

export default LocationDataCard;
