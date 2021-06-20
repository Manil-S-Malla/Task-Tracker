import React from 'react';
import {useState, useEffect} from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {mUIValidDateTime} from './Shared/DateTime';

import Styles from './Styles/EditTask.Style';
import Close from '@material-ui/icons/Close';

import {ThemeProvider} from '@material-ui/core/styles';
import {deleteRed, okGreen} from './Shared/Theme';

import axios from 'axios';
import {DBBaseURL as DbUrl} from './Shared/CONST';

const EditTask = (props) => {
    const defaultDateTime = mUIValidDateTime();
    const [name, setName] = useState(props.task.name);
    const [status, setStatus] = useState(props.task.status);
    const [description, setDescription] = useState(props.task.description);
    
    const handleNameChange = event => {
        setName(event.target.value);
    }
    
    const handleStatusChange = event => {
        setStatus(event.target.value);
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    return(
        <div style = {Styles.root}>
            <Card style = {Styles.card}>
                <div style= {{
                    margin: '10px 20px 10px 20px',
                    flex: 1,
                    //backgroundColor: 'red'
                }}>
                    <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style = {{
                            fontSize: 15,
                            fontWeight: '700',
                            color: '#398AC0',
                        }}>
                            Edit Task
                        </Typography>
                        <ThemeProvider theme= {deleteRed}>
                            <IconButton color="inherit" aria-label="Close" size= "medium" edge= "end" color= 'primary'>
                                <Close />
                            </IconButton>
                        </ThemeProvider>
                    </div>

                    <div >
                        <div style= {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 30,}}>
                            <div
                                style = {{
                                    flex: .8,
                                    marginRight: 20,
                                }}
                            >
                                <TextField
                                    label= {"Task Title"}
                                    color= 'primary'
                                    fullWidth
                                    required
                                    defaultValue= {name}
                                    value= {name}
                                    onChange= {handleNameChange}
                                    size= 'small'
                                />
                            </div>
                            

                            <FormControl size= 'small' color= 'primary' required style= {{minWidth: 120, flex: .2, justifyContent: 'center',}}>
                                    <InputLabel id= "statusLabel" color= 'primary'>Status</InputLabel>
                                    <Select
                                        labelId= "statusLabel"
                                        id= "selectStatus"
                                        value= {status}
                                        defaultValue= {status}
                                        onChange= {handleStatusChange}
                                        color= 'primary'
                                    >
                                        <MenuItem value={"6086cb1ef719352a1cbf3af6"}>To-Do</MenuItem>
                                        <MenuItem value={"6086cb53f719352a1cbf3af7"}>In Progress</MenuItem>
                                        <MenuItem value={"6086cb90f719352a1cbf3af9"}>Done</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                        
                        <div style= {{marginBottom: 30,}}>
                            <TextField
                                label= {"Task Description"}
                                helperText= {<i>Add a description about this task.</i>}
                                color= 'primary'
                                fullWidth
                                required
                                multiline
                                defaultValue= {description}
                                value= {description}
                                onChange= {handleDescriptionChange}
                                rowsMax= {4}
                            />
                        </div>
                        
                       

                        <div style= {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 30,}}>
                            <div
                                style = {{
                                    flex: .5,
                                    marginRight: 20,
                                }}
                            >
                                 <TextField
                                    id="hardDeadline"
                                    label="Hard Deadline"
                                    type="datetime-local"
                                    defaultValue= {defaultDateTime}
                                    InputLabelProps={{
                                        shrink: true,           //  So that the input label is always minimised
                                    }}
                                />
                            </div>
                            

                            <div
                                style = {{
                                    flex: .5,
                                }}
                            >
                                <TextField
                                    id="softDeadline"
                                    label="Soft Deadline"
                                    type="datetime-local"
                                    defaultValue= {defaultDateTime}
                                    InputLabelProps={{
                                        shrink: true,           //  So that the input label is always minimised
                                    }}
                                />
                            </div>
                        </div>

                        <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 15,}}>
                            <ThemeProvider theme= {okGreen}>
                                <Button variant="contained" color="primary">
                                    Save
                                </Button>
                            </ThemeProvider>

                            <ThemeProvider theme= {deleteRed}>
                                <Button variant="contained" color="primary">
                                    Cancel
                                </Button>
                            </ThemeProvider>
                        </div>
                        
                        
                
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EditTask;