import React, {
  useState,
} from 'react';

import {
  Tabs, Tab, Box, Typography,
} from '@mui/material';

const TabPanels = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <Box>
        <Typography>
          {`test: ${value}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default TabPanels;
