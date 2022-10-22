import {AppBar, Button, Grid, Toolbar, Typography} from "@mui/material";
import React from "react";

export const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>

        <Grid
          container
          direction={'row'}
          wrap={'nowrap'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Grid item container>
            <Grid item>
              <Typography color={'#fff'}>Bianca Nutricionista</Typography>
            </Grid>
          </Grid>
          <Grid item container columnGap={2} justifyContent={'flex-end'}>
            <Grid item>
              <Button variant={'outlined'} color={'white'}>
                Sobre mim
              </Button>
            </Grid>
            <Grid item>
              <Button variant={'outlined'} color={'white'}>
                Contato
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
