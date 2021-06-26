import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Logo from '@material-ui/icons/TextFields';
import Styles from './Styles/NavBar.Style';

export default function NavBar(props) {
    const [username, setUsername] =  useState({ 
        firstname: null,        
        middlename: null,
        familyname: null
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    let history = useHistory();
    const redirectToLoginPage = () => {
        history.push('/login');
    };

    useEffect(() => {      
        //  Getting User Info
        const name = {
            firstname: localStorage.getItem('userFirstname'),
            middlename: localStorage.getItem('userMiddlename'),
            familyname: localStorage.getItem('userFamilyname') 
        }
        setUsername(prevState => name);
    }, []);
    
    //  Check wether to display 'headerButtons'.
    let displayHeaderButtons = true;
    if (props.displayHeaderButtons === true || props.displayHeaderButtons === false) {
        displayHeaderButtons = props.displayHeaderButtons;
    }

    const styles = Styles();

    return (
        <div>
            <AppBar 
                position="static"
                style= {{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
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
                            onClick= {handleMenu}
                        >
                            {
                                (username.firstname === null) ?
                                    <Avatar className= {styles.avatar} ></Avatar> :
                                    <Avatar className= {styles.avatar} >{username.firstname[0]}</Avatar> 
                            }
                        </IconButton>
                        
                        
                        <Menu
                            id="menu-appbar"
                            open={open}
                            onClose={handleClose}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            keepMounted
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            // transformOrigin={{
                            //     vertical: 'bottom',
                            //     horizontal: 'center',
                            // }}
                        >
                            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
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
        </div>
    );
}