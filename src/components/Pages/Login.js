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


const Login = (props) => {
    useEffect(() => {
        document.title = "Task Tracker - Login";
    }, []);

    function changeLoggedIn(loggedIn) {
        props.changeLoggedIn(loggedIn);
    }
  

    function storeInfoToLocalStorage() {
        localStorage.setItem('rememberMe', rememberMe);
        if(user!== null) {
            localStorage.setItem('userId', user.id);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userFirstname', user.name.firstname);
            localStorage.setItem('userMiddlename', user.name.middlename);
            localStorage.setItem('userFamilyname', user.name.familyname);
        }
    }

    let history = useHistory();
    const redirectToHomepage = () => {
        storeInfoToLocalStorage();
        changeLoggedIn(true);
        history.push('/');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailInValid, setIsEmailInValid] = useState(false);
    const [isPasswordInValid, setIsPasswordInValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    
    const [rememberMe, setRememberMe] = useState(false);   
    
    let user = null;

    function emailIsIncorrect(isEmailIncorrect) {
        if (isEmailIncorrect) {
            setEmailErrorMessage("E-mail address is incorrect.");
            setIsEmailInValid(true);
        }
        else {
            setEmailErrorMessage("");
            setIsEmailInValid(false);
        }
    }

    function passwordIsIncorrect(isPasswordIncorrect) {
        if (isPasswordIncorrect) {
            setPasswordErrorMessage("Password is incorrect.");
            setIsPasswordInValid(true);
        }
        else {
            setPasswordErrorMessage("");
            setIsPasswordInValid(false);
        }
    }

    function emailIsNull() {
        setEmailErrorMessage("E-mail address is required.");
        setIsEmailInValid(true);
    }

    function passwordIsNull() {
        setPasswordErrorMessage("Password is required.");
        setIsPasswordInValid(true);
    }
    

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    }

    const getUserInfoByEmail = (email) => {
        const ApiURL = `${DbUrl}/users/email/${email}`; 
        return axios.get(ApiURL)
            .then(response => response.data)
            .catch(error => null);
    };

    async function isUserAuthorised (email, password) {
        const userInfo = await getUserInfoByEmail(email);
        if (userInfo === null){
            return null;
        }
        else {         
            setIsEmailInValid(false);
            if(userInfo.password === password){
                user = {
                    id: userInfo._id,
                    name: userInfo.name,
                    email: userInfo.email
                }
                return true;
            }
            return false;
        }
    }

    const handleLogin = () => {
        isUserAuthorised(email, password)
            .then(response => {
                if (response === true) {
                    emailIsIncorrect(false);
                    passwordIsIncorrect(false);
                    redirectToHomepage();
                }
                else if (response === false) {
                    passwordIsIncorrect(true);
                    emailIsIncorrect(false);
                }
                else if (response === null) {
                    emailIsIncorrect(true);
                    passwordIsIncorrect(false);
                }
                else{
                    alert(`Invalid data received.`);
                }

                if(email === '') {
                    emailIsNull()
                }
                if(password === '') {
                    passwordIsNull()
                }
            });
    }

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
                        error = {isEmailInValid}
                        helperText={ emailErrorMessage}
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
                        error = {isPasswordInValid}
                        helperText={ passwordErrorMessage}
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