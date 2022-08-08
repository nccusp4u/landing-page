import React from 'react';

import { Grid } from '@mui/material';
import Main from '../components/Main/Main';

const Home = () => (
  <Grid container spacing={0}>
    <Grid item md={2} />
    <Grid item xs={12} md={8}>
      <Main />
    </Grid>
    <Grid item md={2} />
  </Grid>
);

export default Home;
