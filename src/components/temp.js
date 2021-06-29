import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Drawer} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Logo from '@material-ui/icons/TextFields';
import Styles from './Styles/NavBar.Style';

const drawerWidth = 240;
const drawerZIndex = 0;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    
    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: drawerZIndex,
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {width: theme.spacing(9) + 1,},
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function NavBar(props) {
    const [username, setUsername] =  useState({ 
        firstname: null,        
        middlename: null,
        familyname: null
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    //const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
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
                    justifyContent: 'space-between',
                    zIndex: drawerZIndex + 1
                }}
            >
                <Toolbar>
                    <IconButton onClick= {handleDrawerToggle} color="inherit" aria-label="Logo" size= "medium" edge= "start">
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
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button key={'drawerListItemInbox'}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Inbox'} />
                    </ListItem>
                    <ListItem button key={'drawerListItemStarred'}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Starred'} />
                    </ListItem>
                    <ListItem button key={'drawerListItemSendEmail'}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Send email'} />
                    </ListItem>
                    <ListItem button key={'drawerListItemDrafts'}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Drafts'} />
                    </ListItem>
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