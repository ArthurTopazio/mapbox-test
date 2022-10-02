import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Context, RootState } from '..';

const TestComp = () => {

  const [value, setValue] = useState('');

  const { cities } = useContext<RootState>(Context);

  return (
    <div>
      {cities.loading && <p>Loading...</p>}
      {cities.citiesNames.map((item, index) => <p key={index}>{item}</p>)}
      <button onClick={() => cities.setCitiesNames([{ "id": 127042, "name": "Khār", "latitude": 33.48404, "longitude": 49.93083, "elevation": 2063.0, "feature_code": "PPL", "country_code": "IR", "admin1_id": 124763, "timezone": "Asia/Tehran", "country_id": 130758, "country": "Iran", "admin1": "Markazi" }, { "id": 1109405, "name": "Khar", "latitude": 32.77685, "longitude": 69.69172, "elevation": 2130.0, "feature_code": "PPL", "country_code": "PK", "admin1_id": 1168873, "admin2_id": 1168875, "timezone": "Asia/Karachi", "country_id": 1168579, "country": "Pakistan", "admin1": "Khyber Pakhtunkhwa", "admin2": "North Wazīristān" }, { "id": 1137059, "name": "Khār", "latitude": 33.78392, "longitude": 68.43477, "elevation": 2504.0, "feature_code": "PPL", "country_code": "AF", "admin1_id": 1121863, "admin2_id": 7053338, "timezone": "Asia/Kabul", "country_id": 1149361, "country": "Afghanistan", "admin1": "Wardak", "admin2": "Jaghatū" }, { "id": 1137060, "name": "Khār", "latitude": 33.75147, "longitude": 68.55332, "elevation": 2460.0, "feature_code": "PPL", "country_code": "AF", "admin1_id": 1121863, "admin2_id": 7053343, "timezone": "Asia/Kabul", "country_id": 1149361, "country": "Afghanistan", "admin1": "Wardak", "admin2": "Sayyidābād" }, { "id": 1174089, "name": "Khar", "latitude": 34.7361, "longitude": 71.52739, "elevation": 865.0, "feature_code": "PPL", "country_code": "PK", "admin1_id": 1168873, "admin2_id": 1183781, "timezone": "Asia/Karachi", "country_id": 1168579, "country": "Pakistan", "admin1": "Khyber Pakhtunkhwa", "admin2": "Bājaur" }, { "id": 1174090, "name": "Khar", "latitude": 34.61555, "longitude": 71.9387, "elevation": 652.0, "feature_code": "PPL", "country_code": "PK", "admin1_id": 1168873, "admin2_id": 1171388, "timezone": "Asia/Karachi", "country_id": 1168579, "country": "Pakistan", "admin1": "Khyber Pakhtunkhwa", "admin2": "Malakand Protected Area" }, { "id": 1174091, "name": "Khar", "latitude": 25.2819, "longitude": 67.16372, "elevation": 110.0, "feature_code": "PPL", "country_code": "PK", "admin1_id": 1164807, "admin2_id": 11744837, "timezone": "Asia/Karachi", "country_id": 1168579, "country": "Pakistan", "admin1": "Sindh", "admin2": "Malir District" }, { "id": 1252542, "name": "Khar", "latitude": 27.0, "longitude": 91.35, "elevation": 1481.0, "feature_code": "PPL", "country_code": "BT", "timezone": "Asia/Thimphu", "country_id": 1252634, "country": "Bhutan" }, { "id": 1266987, "name": "Khar", "latitude": 32.03001, "longitude": 78.06544, "elevation": 3653.0, "feature_code": "PPL", "country_code": "IN", "admin1_id": 1270101, "timezone": "Asia/Kolkata", "country_id": 1269750, "country": "India", "admin1": "Himachal Pradesh" }, { "id": 1266988, "name": "Khar West", "latitude": 19.06667, "longitude": 72.83333, "elevation": 13.0, "feature_code": "PPL", "country_code": "IN", "admin1_id": 1264418, "admin2_id": 1270836, "timezone": "Asia/Kolkata", "country_id": 1269750, "country": "India", "admin1": "Maharashtra", "admin2": "Mumbai Suburban" }])}>set Cities</button>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => cities.fetchCities(value)}>fetch cities</button>
    </div>
  )
}

export default observer(TestComp);
