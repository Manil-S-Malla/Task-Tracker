import React from 'react';
import {useState, useEffect} from 'react';

import EditTask from './EditTask.component';

import { ThemeProvider } from '@material-ui/core/styles';
import Styles from './Styles/TaskCard.Style';
import {editBlue} from './Shared/Theme';
import {deleteRed} from './Shared/Theme';
import {msToTimeTextShort} from './Shared/DateTime';
import {StatusIdDone} from './Shared/CONST';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';


const TaskCard = (props) => {    
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const [openEditDialogue, setOpenEditDialogue] = useState(false);

    const handleOpenEditDialogue = () => {
        setOpenEditDialogue(true);
    };

    const handleCloseEditDialogue = () => {
        setOpenEditDialogue(false);
    };

    const [timeTillDeadline, setTimeTillDeadline] = useState(new Date(props.hardDeadline).getTime() - new Date().getTime());
    
    useEffect(() => {
       setInterval( () => {
            setTimeTillDeadline(new Date(props.hardDeadline).getTime() - new Date().getTime());
        }, 1000 );
    }, []);

    return (
        <React.Fragment>
            <Card style = {Styles.root}>
                <div style =  {Styles.cardHeader}>
                    <div style = {Styles.headerText}>
                        <Typography style = {Styles.cardTitle}>{props.title}</Typography>
                        <div style = {Styles.cardSubTitle}>
                            {
                                props.status === StatusIdDone ?
                                    '' :
                                    msToTimeTextShort(timeTillDeadline) === '' ?
                                        'Deadline Passed' :
                                        msToTimeTextShort(timeTillDeadline) + ' till deadline.'
                            }
                        </div>
                    </div>
                    
                    <div style = {Styles.optionsButton}>
                        <IconButton aria-label="Settings" color= 'primary'>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                
                <CardActions style = {Styles.cardActions}>
                
                        <div>
                            <ThemeProvider theme= {editBlue}>
                                <IconButton aria-label="Edit" color= 'primary' onClick={handleOpenEditDialogue}>
                                    <EditIcon/>
                                </IconButton>
                            </ThemeProvider>
                            <IconButton aria-label="Go Behind">
                                <UndoIcon />
                            </IconButton>
                            <IconButton aria-label="Go Ahead">
                                <RedoIcon />
                            </IconButton>
                            <ThemeProvider theme= {deleteRed}>
                                <IconButton aria-label="Delete"  color= 'primary'>
                                    <DeleteIcon />
                                </IconButton>
                            </ThemeProvider>
                        </div>
                
                    <div>
                        <IconButton
                            style = {expanded ? Styles.expanded : Styles.expand}
                            onClick={handleExpand}
                            aria-label="Show more"    
                            color= 'primary'    
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </CardActions>
                
                <Collapse in={expanded}>
                    <CardContent>
                    
                        <Typography paragraph>
                            {props.description}
                        </Typography>
                        
                    </CardContent>
                </Collapse>                
            </Card>

            <Dialog open={openEditDialogue} onClose={handleCloseEditDialogue} aria-labelledby="form-dialog-title">
                <EditTask 
                    task= {{
                        id: props.id, 
                        name: props.title, 
                        status: props.status,
                        description: props.description,
                        hardDeadline: props.hardDeadline,
                        softDeadline: props.softDeadline,
                    }}

                    close= {handleCloseEditDialogue}
                />
            </Dialog>
        </React.Fragment>
    );
}

export default TaskCard;
