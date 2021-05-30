import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

import axios from 'axios';
import {DBBaseURL as DbUrl} from '../Shared/CONST';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import Styles from '../Styles/LoginPage.Style';
import Logo from '@material-ui/icons/TextFields';


const Login = () => {
    useEffect(() => {
        document.title = "Task Tracker - Login";
    }, []);

    let history = useHistory();
    const redirectToHomepage = () => {
        history.push('/')
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    }

    const handleLogin = () => {
        alert(`Email: ${email} \nPassword: ${password} \nRemember Me: ${rememberMe}`)
        redirectToHomepage();
    }
    
    console.log(rememberMe);

    return (
        <div style= {Styles.root}>
            <div style= {Styles.backgroundImageHolder} />
            
            <div style= {{...Styles.centerContainer, flex: .42}}>
                <div style= {Styles.centerContainer}>
                    <Avatar style= {Styles.avatar}>
                        <Logo style= {Styles.logo}/>
                    </Avatar>

                    <Typography component="h1" variant="h4">
                        Task Tracker
                    </Typography>

                    <Typography component="h2" variant="h5">
                        Login
                    </Typography>
                </div>

                <div style= {Styles.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        color= 'primary'
                        value= {email}
                        onChange= {handleEmailChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color= 'primary'
                        value= {password}
                        onChange= {handlePasswordChange}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        onChange = {handleRememberMeChange}
                    />

                    <Button
                        fullWidth
                        style= {Styles.loginButton}
                        variant="contained"
                        color="primary"
                        onClick= {handleLogin}
                    >
                        Login
                    </Button>
                </div>

                <div style= {Styles.linksContainer}>
                    <div>
                        <Link to="/forgot_password">
                            Forgot password?
                        </Link>    
                    </div>
                    <div>
                        <Link to="/register">
                            Don't have an account?
                        </Link>    
                    </div>
                </div>

            </div>
           
        </div>
    );
}

export default Login;