import React from 'react';
import {useEffect} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Logo from '@material-ui/icons/TextFields';

import Styles from '../Styles/IndexPage.Style';


const Index = () => {
    
    useEffect(() => {
        document.title = "Task Tracker";
    }, []);

    return(
        <React.Fragment>
            <div style= {Styles.root}>
                <Avatar style= {Styles.avatar}>
                    <Logo style= {Styles.logo}/>
                </Avatar>
            </div>
        </React.Fragment>
    )
}

export default Index;