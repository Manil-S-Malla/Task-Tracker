import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PostAddIcon from '@material-ui/icons/PostAdd';

import Logo from '@material-ui/icons/TextFields';
import Styles from '../Styles/NavBar.Style';

const drawerWidth = '15vw';
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

export default function NavDraw(props) {
    const classes = useStyles();
    const theme = useTheme();

    //  For getting user Info.
    const [username, setUsername] =  useState({ 
        firstname: null,        
        middlename: null,
        familyname: null
    });

    useEffect(() => {      
        //  Getting User Info
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
    
    //  For Drawer.
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
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

    const MUIStyles = Styles();


    return (
        <div style= {{display: 'flex',}}>
            <CssBaseline />
            <AppBar
                style= {{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
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
                    <ListItem button key={'drawerListItemAddTask'} onClick= {props.openAddTaskDialogue}>
                        <ListItemIcon color= 'primary'><PostAddIcon /></ListItemIcon>
                        <ListItemText primary={'Add Task'} color= 'primary' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}
