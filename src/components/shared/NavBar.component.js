import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Logo from '@material-ui/icons/TextFields';

import Styles from '../Styles/NavBar.Style';


const NavBar = (props) => {
    //  Getting the styles. 
    const MUIStyles = Styles();

    //  For getting user Info.
    const [username, setUsername] =  useState({ 
        firstname: null,        
        middlename: null,
        familyname: null
    });

    useEffect(() => {      
        const name = {
            firstname: localStorage.getItem('userFirstname'),
            middlename: localStorage.getItem('userMiddlename'),
            familyname: localStorage.getItem('userFamilyname') 
        }
        setUsername(prevState => name);
    }, []);

    //  For navigation to Login page.
    let history = useHistory();
    const redirectToLoginPage = () => {
        history.push('/login');
    };

    //  For Drop Down Menu.
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };    

    //  Check wether to display 'headerButtons'.
    let displayHeaderButtons = true;
    if (props.displayHeaderButtons === true || props.displayHeaderButtons === false) {
        displayHeaderButtons = props.displayHeaderButtons;
    }


    return (
        <AppBar className= {MUIStyles.navBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.drawerToggle}
                    edge="start"
                >
                    <Logo />
                </IconButton>

                <Typography variant= "h6" className= {MUIStyles.title}>
                    Task Tracker
                </Typography>

                <div className= {MUIStyles.headerButtons} style= {{display: displayHeaderButtons ? 'flex' : 'none'}}>
                    <IconButton 
                        aria-label="Avatar" 
                        edge= "end" 
                        onClick= {handleMenu}
                    >
                        {
                            (username.firstname === null) ?
                                <Avatar className= {MUIStyles.avatar} ></Avatar> :
                                <Avatar className= {MUIStyles.avatar} >{username.firstname[0]}</Avatar> 
                        }
                    </IconButton>
                    
                    <Menu
                        id="menu-appbar"
                        open={openMenu}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        keepMounted
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem onClick= {() => {
                            handleClose();
                            localStorage.clear();
                            redirectToLoginPage();
                        }}>
                            Log Out
                        </MenuItem> 
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;