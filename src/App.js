import React from 'react';
import {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ProtectedRoute from './components/Shared/ProtectedRoute';
import './App.css';

//import IndexPage from './components/Pages/Index';
import HomePage from './components/Pages/Home';
import LoginPage from './components/Pages/Login';
import NotFoundPage from './components/Pages/NotFound';
import ForgotPasswordPage from './components/Pages/ForgotPassword';
import RegisterPage from './components/Pages/Register';

import {ThemeProvider} from '@material-ui/core/styles';
import {mainTheme} from './components/Shared/Theme';


function App() {

    const userId = useState(localStorage.getItem('userId'))[0];
    const [loggedIn, setLoggedIn] = useState(true);

    function changeLoggedIn(newValue) {
        setLoggedIn(newValue);
    }
  

    function isLoggedIn(uId) {
        uId === 'null' ?
            setLoggedIn(false) :
            setLoggedIn(true)
    }

    useEffect(() => {
        isLoggedIn(userId);
    }, []);

    console.log(`Is Logged In ? : ${loggedIn}`);

    return(
        <ThemeProvider theme= {mainTheme}>
            <Router>
                <Switch>
                    <ProtectedRoute exact path="/" isAuthorised = {loggedIn} component = {HomePage} />

                    <Route exact path="/login" >
                        <LoginPage changeLoggedIn= {changeLoggedIn}/>
                    </Route>

                    <ProtectedRoute path="/forgot_password" isAuthorised = {loggedIn} component = {ForgotPasswordPage} />
                    <ProtectedRoute path="/register" isAuthorised = {loggedIn} component = {RegisterPage} />

                    <ProtectedRoute path="*" isAuthorised = {loggedIn} component = {NotFoundPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App;