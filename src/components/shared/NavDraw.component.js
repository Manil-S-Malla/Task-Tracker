import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import clsx from 'clsx';            //  A tiny utility for constructing className strings conditionally, out of an object with keys being the class strings, and values being booleans.

import NavBar from  './NavBar.component';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PostAddIcon from '@material-ui/icons/PostAdd';
import Styles from '../Styles/NavDraw.Style';


const NavDraw = (props) => {
    //  Getting the styles. 
    const MUIStyles = Styles();
    
    //  For Drawer component.
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };


    return (
        <div className= {MUIStyles.root}>
            <NavBar drawerToggle= {handleDrawerToggle} />

            <Drawer
                variant="permanent"
                className={clsx(MUIStyles.drawer, {
                    [MUIStyles.drawerOpen]: openDrawer,
                    [MUIStyles.drawerClose]: !openDrawer,
                })}
                classes ={{
                paper: clsx({
                    [MUIStyles.drawerOpen]: openDrawer,
                    [MUIStyles.drawerClose]: !openDrawer,
                }),
                }}
            >
                <div className={MUIStyles.toolbar} />
                <Divider />
                <List>
                    <ListItem button key={'drawerListItemAddTask'} onClick= {props.openAddTaskDialogue}>
                        <ListItemIcon color= 'primary'><PostAddIcon /></ListItemIcon>
                        <ListItemText primary={'Add Task'} color= 'primary' />
                    </ListItem>
                </List>
            </Drawer>
            
            <div className={MUIStyles.content}>
                <div className={MUIStyles.toolbar} />
                {props.children}
            </div>
        </div>
    );
};

export default NavDraw;