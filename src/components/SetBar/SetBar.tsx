import style from './SetBar.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const SetBar = () => {

  const locationsList = [
    { label: 'New-York', latitude: 0, longitude: 0 },
    { label: 'Berlin', latitude: 1, longitude: 0 },
    { label: 'Madrid', latitude: 2, longitude: 0 },
  ];

  const list = [
    'New-York', 'Berlin', 'Madrid'
  ];

  const [value, setValue] = useState<string | null>(list[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.wrapper}>
      <div>{locationsList.filter(item => item.label === value).length ?
        locationsList.filter(item => item.label === value)[0].latitude : null
      }</div>
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
}

export default SetBar;
