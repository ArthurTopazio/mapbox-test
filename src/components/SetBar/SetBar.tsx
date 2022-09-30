import style from './SetBar.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext, useEffect, useState } from 'react';
import { ILocation } from '../../models/ILocation';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const SetBar = observer(() => {

  const { location } = useContext(Context);

  //тестовые данные, исправить через сервис
  const locationsList: ILocation[] = [
    { name: 'Tokyo', coordinates: { latitude: 35.6895, longitude: 139.692 } },
    { name: 'Kharkiv', coordinates: { latitude: 50, longitude: 36 } },
    { name: 'Oslo', coordinates: { latitude: 59.91, longitude: 10.75 } },
    { name: 'Berlin', coordinates: { latitude: 52.52, longitude: 13.41 } },
    { name: 'Roma', coordinates: { latitude: 41.89, longitude: 12.51 } },
  ];
  const list = [
    'Tokyo', 'Kharkiv', 'Oslo', 'Berlin', 'Roma'
  ];

  const [value, setValue] = useState<string | null>(list[1]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (locationsList.filter(item => item.name === value).length) {
      const locationData = locationsList.filter(item => item.name === value)[0];
      location.setLocation(locationData.name, locationData.coordinates);
    }
  }, [value]);

  return (
    <div className={style.wrapper}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        disablePortal
        id="combo-box-demo"
        options={list}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search location..." />}
      />
      <div className={style.setBar}>
        <div className={style.setBarItem}>My locations</div>
        <div className={style.setBarItem}>Settings</div>
        <div className={style.setBarItem}>Profile</div>
      </div>
    </div>
  )
});

export default SetBar;
