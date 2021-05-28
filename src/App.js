import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';

import HomePage from './components/Pages/Home';
import LoginPage from './components/Pages/Login';
import NotFoundPage from './components/Pages/NotFound';

import {ThemeProvider } from '@material-ui/core/styles';
import {mainTheme} from './components/Shared/Theme';


function App() {
    return(
        <ThemeProvider theme= {mainTheme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App;