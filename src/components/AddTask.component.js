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

import {addTask, getAllStatuses} from './Shared/ApiFunctions';
import {mUIValidDateTime} from './Shared/DateTime';

import Styles from './Styles/AddTask.Style';
import Close from '@material-ui/icons/Close';
import Done from '@material-ui/icons/Done';

import {ThemeProvider} from '@material-ui/core/styles';
import {deleteRed, okGreen} from './Shared/Theme';

const AddTask = (props) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [hardDeadline, setHardDeadline] = useState(mUIValidDateTime());
    const [softDeadline, setSoftDeadline] = useState(mUIValidDateTime());
    
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
                        Add Task
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
                                required
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
                                required
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
                                    const taskInfo = {
                                        name: name,
                                        description: description,
                                        softDeadline: softDeadline + ':00.000Z',            //  To ensure the data does not change due to difference in the type of data to denote time in MongoDb (ie: yyyy-mm-ddThh:mi:ss.mlsZ) as compared to Material UI (ie: yyyy-mm-ddThh:mi).
                                        hardDeadline: hardDeadline + ':00.000Z',            //  To ensure the data does not change due to difference in the type of data to denote time in MongoDb (ie: yyyy-mm-ddThh:mi:ss.mlsZ) as compared to Material UI (ie: yyyy-mm-ddThh:mi).
                                        status: status,
                                        user: localStorage.getItem('userId')
                                    };
                                    const reply = await addTask(taskInfo);
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

export default AddTask;