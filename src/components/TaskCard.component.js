import React from 'react';
import {useState} from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Style from './Styles/TaskCard.Style';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

//import { red, blue } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import {twoButtonTheme} from './Shared/Theme'

import {TaskCardMaxWidth as maxWidth} from './Shared/CONST';

const useStyles = makeStyles((theme) => ({          //  For styling Material UI components.
    root: {
        margin: 10,
    },

    expand: {
        transform: 'rotate(0deg)',
        margin: 'auto',
        transition: 'transform 1s',
    },

    expanded: {
        transform: 'rotate(-180deg)',
        margin: 'auto',
        transition: 'transform 1s',
    },

    cardActions: {
        justifyContent: 'space-between',
    }
}));


const TaskCard = (props) => {
    const styles = useStyles();
    
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={styles.root}>
            <div style= {Style.cardHeader}>
                <div style={Style.headerText}>
                    <Typography style= {Style.cardTitle}>{props.title}</Typography>
                    <div style= {Style.cardSubTitle}>10 days to deadline.</div>
                </div>
                
                <div style= {Style.optionsButton}>
                    <IconButton aria-label="Settings" >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            
            <CardActions className={styles.cardActions}>
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
                        className= {expanded ? styles.expanded : styles.expand}
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
