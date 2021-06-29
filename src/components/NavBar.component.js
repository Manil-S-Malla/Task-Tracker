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
import {Drawer} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

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

    const [isDrawerOpened, setIsDrawerOpened] = useState(false);

    const toggleDrawerStatus = () => {
        setIsDrawerOpened(!isDrawerOpened);
        console.log(isDrawerOpened);
    };

    const closeDrawer = () => {
        setIsDrawerOpened(false);
    };

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
                    <IconButton onClick= {toggleDrawerStatus} color="inherit" aria-label="Logo" size= "medium" edge= "start">
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

            <Drawer
                variant="permanent"
                open={false}
                onClose={closeDrawer}
            >
                <div>
                    <IconButton onClick={closeDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                <Divider />

                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}