import React from 'react';

import { Box } from '@mui/material';

import Selector from './Selector';
import TabPanels from './TabPanels';

const Main = () => (
  <>
    <Box>
      <Selector />
    </Box>
    <Box>
      <TabPanels />
    </Box>
  </>
);

export default Main;
