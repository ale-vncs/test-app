import {Grid, Typography} from "@mui/material";

export const MainContainer = () => {
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        height: 'calc(100vh - 60px)'
      }}
    >
      <Grid item>
        <Typography color={'primary'} sx={{ fontFamily: 'Satisfy', fontSize: 50 }}>Seja Bem Vinda!</Typography>
      </Grid>
      <Grid item>
        <Typography color={'primary'} sx={{ fontSize: 20 }}>Eu te ajudo com a mudança de hábitos, comportamentos e com o porder dos Alimentos!</Typography>
      </Grid>
    </Grid>
  )
}
