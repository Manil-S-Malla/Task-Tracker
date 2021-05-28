import React from 'react';
import {Link} from "react-router-dom";
import NavBar from '../NavBar.component';

const Login = () => {
    
    return(
        <React.Fragment>
            <NavBar displayHeaderButtons= {false}/>
            <div style= {{display: 'flex', justifyContent: 'center'}}>
                <Link to="/">Home</Link>
            </div>
        </React.Fragment>
    )
}

export default Login;