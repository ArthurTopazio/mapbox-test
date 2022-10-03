import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context, RootState } from '../..';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import style from './SetBar.module.css';

const SetBar = observer(() => {
  // в МУИ автокомплите ворнинги ключей при совпадении имени города
  const { location, cities } = useContext<RootState>(Context);

  const [value, setValue] = useState<string | null>(cities.citiesNames[1]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (cities.citiesLocations.filter(item => item.name === value).length) {
      const locationData = cities.citiesLocations.filter(item => item.name === value)[0];
      location.setLocation(locationData.name, locationData.coordinates);
    }
  }, [value]);

  const onChangeHandler = (event: any, newValue: string | null) => {
    setValue(newValue);
  };
  const onInputChangeHandler = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
    console.log(newInputValue);
    cities.fetchCities(newInputValue);
  };

  return (
    <div className={style.wrapper}>
      <Autocomplete
        value={value}
        onChange={onChangeHandler}
        inputValue={inputValue}
        onInputChange={onInputChangeHandler}
        disablePortal
        id="combo-box-demo"
        options={cities.citiesNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search location..." />}
      />
      <div className={style.setBar}>
        {/*неиспользуемая панель */}
        <div className={style.setBarItem}>My locations</div>
        <div className={style.setBarItem}>Settings</div>
        <div className={style.setBarItem}>Profile</div>
      </div>
    </div>
  )
});

export default SetBar;
