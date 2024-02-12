import React, { useState, ReactNode } from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { styled } from '@mui/material/styles';

import SideBer from '../organisms/SideBer';
import Search from '../molecules/Search';
import Control from '../organisms/Control';
import PurchaseList from '../organisms/PurchaseList';


type Props = {
  children: ReactNode
}


export default function DefaultLayout(props: Props) {
  return (
    <Box sx={{display: "flex"}}>
      <SideBer/>
      <Container fixed sx={{ m: 4}}>
        {props.children}
      </Container>
    </Box>
  );
}
