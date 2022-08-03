import React, {
  useState,
} from 'react';

import {
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

const Selector = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="select-label">Age</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
