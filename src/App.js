import React from 'react';
import './App.css';

import NavBar from './components/NavBar.component';
import TaskCard from './components/TaskCard.component';
import TaskPanel from './components/TaskPanel.component';

import {ThemeProvider } from '@material-ui/core/styles';
import {mainTheme} from './components/Shared/Theme';


function App() {
  const ToDo = ['To-Do',[<TaskCard title= "Jogging"/>, <TaskCard title= "Coding"/> ]];
  const InProgress = ['In Progress',[<TaskCard title= "Task Tracker Basic Frontend."/> ]];
  const Done = ['Done',[<TaskCard title= "TT Design"/>, <TaskCard title= "TT Prem Backend"/>, <TaskCard title= "TT Basic components"/>]];
  
  return(
    <ThemeProvider theme= {mainTheme}>
      <NavBar/>
      <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <TaskPanel> 
          {ToDo}
          {InProgress}
          {Done}
        </TaskPanel>
      </div>
    </ThemeProvider>
      
  )
}

export default App;
