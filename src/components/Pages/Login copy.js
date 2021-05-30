//  Review this file later. Not enough information.

import React from 'react';
import {useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

import axios from 'axios';
import {DBBaseURL as DbUrl} from '../Shared/CONST';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Style from '../Styles/LoginPage.Style copy';
import Logo from '@material-ui/icons/TextFields';


const Login = () => {
    const classes = Style();

    useEffect(() => {
        document.title = "Login";
    }, []);

    let history = useHistory();
    const redirectHomepage = () => {
        history.push('/')
    };

    function getUserInfo (email) {
        const ApiURL = `${DbUrl}/users/email/${email}`; 
        return axios.get(ApiURL)
            .then(response => response.data)
            .catch(error => false);
    };

    async function isUserAuthorised (email, password) {
        const userInfo = await getUserInfo(email);
        if (userInfo === false){
            return null;
        }
        if (userInfo.password === password){
            return true;
        }
        return false;
    }

    const handleLogin = isUserAuthorised('manilsmalla@gmail.com', 'Password01')
        .then(data => {
            if(data === true) {
                redirectHomepage()
            }
            else if(data === null) {
                alert('Email address incorrect.')
            }
            else if(data === false) {
                alert('Password incorrect.')
            }
        });
    
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <Logo />
                        </Avatar>

                        <Typography component="h1" variant="h4">
                            Task Tracker
                        </Typography>

                        <Typography component="h2" variant="h5">
                            Login
                        </Typography>
                        
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                // autoFocus
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Button
                                //type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick= {handleLogin}
                            >
                                Login
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link to="/login">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/login">
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </Grid>
        </Grid>
    );
}

export default Login;