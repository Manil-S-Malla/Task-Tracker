import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';

import Logo from '@material-ui/icons/TextFields';
import Styles from './Styles/NavBar.Style';

export default function NavBar(props) {
    const styles = Styles()
    
    //  Check wether to display 'headerButtons'.
    let displayHeaderButtons = true;
    if (props.displayHeaderButtons === true || props.displayHeaderButtons === false) {
        displayHeaderButtons = props.displayHeaderButtons;
    }

    return (
        <div>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton color="inherit" aria-label="Logo" size= "medium" edge= "start">
                        <Logo />
                    </IconButton>
                    <Typography variant= "h6" className= {styles.title}>
                        Task Tracker
                    </Typography>
                    
                    <div className= {styles.headerButtons} style= {{display: displayHeaderButtons ? 'flex' : 'none'}}>
                        <IconButton 
                            aria-label="Avatar" 
                            edge= "end" 
                        >
                            {console.log(props.username)}
                            {
                                (props.username.firstname === null) ?
                                    <Avatar className= {styles.avatar}></Avatar> :
                                    <Avatar className= {styles.avatar}>{props.username.firstname[0]}</Avatar> 
                            }
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}