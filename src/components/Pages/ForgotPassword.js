import React from 'react';
import {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import NavBar from '../Shared/NavBar.component';
import {BaseURL} from '../Shared/CONST';

const Login = () => {
    useEffect(() => {
        document.title = "404 - Not found";
    }, []);

    let location = useLocation();

    return(
        <React.Fragment>
            <NavBar displayHeaderButtons= {false}/>
            <div style= {{display: 'flex', flexDirection: 'column', height: '70vh', justifyContent: 'center', alignItems: 'center', fontSize: 40, textAlign: 'center'}}>
                Forgot password page.
                <div style= {{fontSize: 20}}>
                    The path {BaseURL + location.pathname} does not exist. Yet...
                </div>               
            </div>
        </React.Fragment>
    )
}

export default Login;