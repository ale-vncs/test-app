import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from "@mui/material";

function App() {
  return (
    <Grid
      container
      sx={{
        background: '#fff3ed',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Grid
        item
        container
        direction={'row'}
        wrap={'nowrap'}
        columnGap={2}
        justifyContent={'flex-end'}
        sx={{
          background: '#f09692',
          height: 60
        }}
      >
        <Grid item>
          Menu 1
        </Grid>
        <Grid item>
          Menu 2
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
