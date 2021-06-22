import React from 'react';
import {useState, useEffect} from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import {updateTask, getAllStatuses} from './Shared/ApiFunctions';

import Styles from './Styles/EditTask.Style';
import Close from '@material-ui/icons/Close';
import Done from '@material-ui/icons/Done';

import {ThemeProvider} from '@material-ui/core/styles';
import {deleteRed, okGreen} from './Shared/Theme';

const EditTask = (props) => {
    const [name, setName] = useState(props.task.name);
    const [status, setStatus] = useState(props.task.status);
    const [description, setDescription] = useState(props.task.description);
    const [hardDeadline, setHardDeadline] = useState(props.task.hardDeadline.substring(0, 16));
    const [softDeadline, setSoftDeadline] = useState(props.task.softDeadline.substring(0, 16));
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    }
    
    const handleStatusChange = event => {
        setStatus(event.target.value);
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleHardDeadlineChange = event => {
        setHardDeadline(event.target.value);
    }
    
    const handleSoftDeadlineChange = event => {
        setSoftDeadline(event.target.value);
    }

    const [statuses, setStatuses] = useState([]);
    
    const getStatuses = async() => {
        const response = await getAllStatuses();
        setStatuses(response);
    }

    useEffect(() => {
        getStatuses()
    }, []);
    

    return(
        <Card style = {Styles.card}>
            <div style= {Styles.container}>
                <div style= {Styles.header}>
                    <Typography style = {Styles.title}>
                        Edit Task
                    </Typography>
                    <ThemeProvider theme= {deleteRed}>
                        <IconButton 
                            color="inherit" 
                            aria-label="Close" 
                            size= "medium" 
                            edge= "end" 
                            color= 'primary' 
                            onClick= {props.handleClose}
                        >
                            <Close />
                        </IconButton>
                    </ThemeProvider>
                </div>

                <div >
                    <div style= {Styles.subContainer1}>
                        <div
                            style = {Styles.taskTitleHolder}
                        >
                            <TextField
                                label= {"Task Title"}
                                color= 'primary'
                                fullWidth
                                required
                                value= {name}
                                onChange= {handleNameChange}
                                size= 'small'
                            />
                        </div>
                        

                        <FormControl 
                            size= 'small' 
                            color= 'primary' 
                            required 
                            style= {Styles.formControl1}
                        >
                            <InputLabel 
                                id= "statusLabel" 
                                color= 'primary'
                            >
                                Status
                            </InputLabel>

                            <Select
                                labelId= "statusLabel"
                                id= "selectStatus"
                                value= {status}
                                onChange= {handleStatusChange}
                                color= 'primary'
                            >
                                {
                                    statuses.map(status => <MenuItem value={status._id}>{status.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div style= {Styles.taskDescriptionHolder}>
                        <TextField
                            label= {"Task Description"}
                            helperText= {<i>Add a description about this task.</i>}
                            color= 'primary'
                            fullWidth
                            required
                            multiline
                            value= {description}
                            onChange= {handleDescriptionChange}
                            rowsMax= {4}
                        />
                    </div>
                    
                    

                    <div style= {Styles.subContainer2}>
                        <div
                            style = {Styles.hardDeadline}
                        >
                                <TextField
                                id="hardDeadline"
                                label="Hard Deadline"
                                type="datetime-local"
                                value= {hardDeadline}
                                onChange= {handleHardDeadlineChange}
                                InputLabelProps={{
                                    shrink: true,           //  So that the input label is always minimised
                                }}
                            />
                        </div>
                        

                        <div
                            style = {Styles.softDeadline}
                        >
                            <TextField
                                id="softDeadline"
                                label="Soft Deadline"
                                type="datetime-local"
                                value= {softDeadline}
                                onChange= {handleSoftDeadlineChange}
                                InputLabelProps={{
                                    shrink: true,           //  So that the input label is always minimised
                                }}
                            />
                        </div>
                    </div>

                    <div style= {Styles.subContainer3}>
                        <ThemeProvider theme= {okGreen}>    
                            <IconButton 
                                onClick= {async() => {
                                    const reply = await updateTask(props.task.id, {
                                        name: name,
                                        description: description,
                                        softDeadline: softDeadline,
                                        hardDeadline: hardDeadline,
                                        status: status,
                                        user: localStorage.getItem('userId')
                                    });
                                    if(reply.status === 'success'){
                                        if(reply.response != undefined){
                                            if(reply.response.status === 200){
                                                props.updateState();
                                                props.handleClose();
                                            }
                                            else{
                                                setErrorMessage(reply.response.statusText);
                                            }
                                        }
                                    }
                                    else if(reply.status === 'error'){
                                        setErrorMessage(reply.response);
                                    }
                                    else{
                                        setErrorMessage('Malicious attempt.');
                                    }
                                }} 
                                color="primary" 
                                aria-label="Done" 
                                size= "medium"  
                                style= {Styles.done}
                            >
                                <Done />
                            </IconButton>
                        </ThemeProvider>
                        
                        <Typography variant="caption" color= 'error'>
                            {errorMessage}
                        </Typography>
                    </div>
                </div>
            </div>
        </Card>
        
    )
}

export default EditTask;