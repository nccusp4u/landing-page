import React, {
  useState,
} from 'react';

import {
  Box, FormControl, InputLabel, Select, MenuItem, Typography,
} from '@mui/material';

const Selector = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box>
        <Typography>{'我要找'}</Typography>
      </Box>
      <Box>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id={'select-label'}>{'Age'}</InputLabel>
          <Select
            labelId={'select-label'}
            id={'select'}
            value={age}
            label={'Age'}
            onChange={handleChange}
          >
            <MenuItem value={10}>{'Ten'}</MenuItem>
            <MenuItem value={20}>{'Twenty'}</MenuItem>
            <MenuItem value={30}>{'Thirty'}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Selector;
