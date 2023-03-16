import { useState } from "react";
import React from  "react";
// import { Switch, Route } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, Box, Container, Grid } from "@mui/material";
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Home from './component/pages/Home';

import Search from './component/molecules/Search';
import Control from './component/organisms/Control';


import "./App.scss";




const App = () => {
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


// type AppState = {
//   greetMsg: string;
//   name: string;
// }

// class App extends React.Component<AppState> {

//   state: AppState = {
//     greetMsg: "",
//     name: ""
//   };

  

//   // greet = {
//   //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   //   // setGreetMsg(await invoke("greet", { state.name }));

//   //   this.setState((state) => ({
//   //     greetMsg: "aaa"
//   //   }));
//   // }

//   greet2 = (name: String) => {
//     this.setState((state) => ({
//       greetMsg: invoke("greet", { name }),
//     }));
//   };

//   setName = (value: String) => {
//     this.setState((state) => ({
//       name: value,
//     }));
//   };

//   render() {
//     return (
//       <Container className="container">
//         <h1>Welcome to Tauri!</h1>

//         <div className="row">
//           <a href="https://vitejs.dev" target="_blank">
//             <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//           </a>
//           <a href="https://tauri.app" target="_blank">
//             <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//           </a>
//           <a href="https://reactjs.org" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>

//         <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//         <div className="row">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               this.greet2(this.props.name);
//             }}
//           >
//             <input
//               id="greet-input"
//               onChange={(e) => this.setName(e.currentTarget.value) }
//               placeholder="Enter a name..."
//             />
//             <Button type="submit">Greet</Button>
//           </form>
//         </div>
//         <p>{this.props.greetMsg}</p>
//       </Container>
//     );
//   }
// }

export default App;
