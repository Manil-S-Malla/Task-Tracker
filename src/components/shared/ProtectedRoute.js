import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";


//  Create a new component called 'ProtectedRoute'.
//  Get arguments by destructuring. 
//  Rename the components passed to the protected route to 'ComponentProp', 
//  get the path and
//  destructure everything else to '...rest' using the spread operator.
const ProtectedRoute = ({ component: ComponentProp, isAuthorised, ...rest }) => {   
    return (
        <Route 
            {...rest}
            render={(props) => {
                return (
                    !isAuthorised ? 
                        (<Redirect to= "/login" />) :
                        (<ComponentProp {...props} />)  
                )
            }}
        />
    );
};

export default ProtectedRoute;