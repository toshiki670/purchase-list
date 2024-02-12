import { useState } from "react";
import React from  "react";
// import { Switch, Route } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, Box, Container, Grid } from "@mui/material";
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Home from './component/pages/Home';

import Search from './component/molecules/Search';
import Control from './component/organisms/Control';

import "./App.scss";


export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Home />
    </ThemeProvider>
  );
}
