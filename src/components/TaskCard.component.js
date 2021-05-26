import React from 'react';
import {useState} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import Styles from './Styles/TaskCard.Style';
import {twoButtonTheme} from './Shared/Theme';

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

    return (
        <Card style = {Styles.root}>
            <div style =  {Styles.cardHeader}>
                <div style = {Styles.headerText}>
                    <Typography style = {Styles.cardTitle}>{props.title}</Typography>
                    <div style = {Styles.cardSubTitle}>10 days to deadline.</div>
                </div>
                
                <div style = {Styles.optionsButton}>
                    <IconButton aria-label="Settings" >
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
                        Go jogging every morning at 800 to stay healthy.
                    </Typography>
                    
                </CardContent>
            </Collapse>
            
            
        </Card>
    );
}

export default TaskCard;
