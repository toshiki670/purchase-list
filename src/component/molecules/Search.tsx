import React from  "react";
import { Container, Box, TextField, Button, Grid } from "@mui/material";


const Search = () => {
  return (
    <Container disableGutters sx={{display: "flex", alignItems: 'flex-end' }}>
      <Container >
        <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
      </Container>
      <Box>
        <Button variant="outlined">Search</Button>
      </Box>
    </Container>
  );
}

export default Search;