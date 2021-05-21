import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Logo from '@material-ui/icons/TextFields';
import Style from './Styles/NavBar.Style';

export default function NavBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Logo" size= "medium" edge= "start">
                        <Logo />
                    </IconButton>
                    <Typography variant= "h6" style= {Style.title}>
                        Task Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
