import React from 'react';
import {useState, useEffect} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import Styles from './Styles/TaskCard.Style';
import {twoButtonTheme} from './Shared/Theme';
import {msToTimeTextShort} from './Shared/DateTime';
import {StatusIdDone} from './Shared/CONST';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

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

    const [timeTillDeadline, setTimeTillDeadline] = useState(new Date(props.hardDeadline).getTime() - new Date().getTime());
    
    useEffect(() => {
       setInterval( () => {
            setTimeTillDeadline(new Date(props.hardDeadline).getTime() - new Date().getTime());
        }, 1000 );
    }, []);

    return (
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
                <ThemeProvider theme= {twoButtonTheme}>
                    <div>
                        <IconButton aria-label="Edit" color= 'primary'>
                            <EditIcon/>
                        </IconButton>
                        <IconButton aria-label="Go Behind">
                            <UndoIcon />
                        </IconButton>
                        <IconButton aria-label="Go Ahead">
                            <RedoIcon />
                        </IconButton>
                        <IconButton aria-label="Delete"  color= 'secondary'>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </ThemeProvider>
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
    );
}

export default TaskCard;
