import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.component';
import TaskCard from './components/TaskCard.component';


import {ThemeProvider } from '@material-ui/core/styles';
import {mainTheme} from './components/shared/Theme'


function App() {
  return(
    <ThemeProvider theme= {mainTheme}>
      <NavBar />
      <TaskCard title= "Jogging"/>
    </ThemeProvider>
      
  )
}

export default App;
