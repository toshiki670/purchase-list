import React from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { styled } from '@mui/material/styles';

import SideBer from '../organisms/SideBer';
import Search from '../molecules/Search';
import Control from '../organisms/Control';
import PurchaseList from '../organisms/PurchaseList';



export default function HomeLayout() {
  return (
    <Box sx={{display: "flex"}}>
      <SideBer/>
      <Container fixed sx={{ m: 4}}>
        <Control />
        <Box  sx={{ mt: 4,  }}>
          <PurchaseList />
        </Box>
      </Container>
    </Box>
  );
}
