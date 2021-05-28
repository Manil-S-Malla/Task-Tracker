import React from 'react';
import {useLocation} from "react-router-dom";

import NavBar from '../NavBar.component';
import {BaseURL} from '../Shared/CONST';

const Login = () => {
    let location = useLocation();

    return(
        <React.Fragment>
            <NavBar displayHeaderButtons= {false}/>
            <div style= {{display: 'flex', flexDirection: 'column', height: '70vh', justifyContent: 'center', alignItems: 'center', fontSize: 40, textAlign: 'center'}}>
                404 Not Found.
                <div style= {{fontSize: 20}}>
                    The path {BaseURL + location.pathname} does not exist.
                </div>               
            </div>
        </React.Fragment>
    )
}

export default Login;