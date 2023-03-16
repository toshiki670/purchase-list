import React from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import Search from '../molecules/Search';


const Control = () => {
  return (
    <Grid container  rowSpacing={3}  justifyContent="center" >
      {/* <Grid item xs={10}>
        <Search />
      </Grid> */}

      <Grid container item xs={9} columnSpacing={2}  justifyContent="flex-end">
        <Grid item xs={2}>
          <Button fullWidth variant="outlined">Add</Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="outlined">Delete</Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="outlined">Edit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Control;