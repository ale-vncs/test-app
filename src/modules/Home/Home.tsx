import {Grid, Typography} from "@mui/material";
import React from "react";
import {HeaderBar} from "./HeaderBar";
import {MainContainer} from "./MainContainer/MainContainer";

export const Home = () => {
  return (
    <Grid
      container
      direction={'column'}
      wrap={'nowrap'}
      sx={{
        background: '#fff3ed',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Grid item>
        <HeaderBar />
      </Grid>
      <Grid
        item
        container
        direction={'column'}
        wrap={'nowrap'}
        sx={{
          overflowY: 'auto'
        }}
      >
        <Grid item>
          <MainContainer />
        </Grid>
      </Grid>
    </Grid>
  )
}
