import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import Dialog from '@material-ui/core/Dialog';

import NavDraw from '../Shared/NavDraw.component';
import TaskPanel from '../TaskPanel.component';
import AddTask from '../AddTask.component';

import {getAllStatuses, getTasksByUserId} from '../Shared/ApiFunctions';
import {jsonToTaskCard} from '../Shared/UtilityFunctions';

import Styles from '../Styles/HomePage.Style';


const Home = () => {
    const userId = useState(localStorage.getItem('userId'))[0];
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [taskCards, setTaskCards] = useState([]);

    let history = useHistory();
    const redirectToLoginPage = () => {
        history.push('/login');
    };

    useEffect(() => {
        document.title = "Task Tracker";
        //  Checking if user is logged in.
        if(localStorage.getItem('userId') === null){
            redirectToLoginPage();
        }
        else{
            taskCardsSet();
        }
        setInterval( () => {            //  Update Date & Time.
            setCurrentDateTime(new Date());
        }, 1000 );
        
    }, []);

    const taskCardsSet = async() => {
        const statuses = await getAllStatuses();
        const tasks = await getTasksByUserId(userId);
        let taskPanelData = [];
        
        statuses.forEach(status => {
            let tasksByStatus = tasks.filter(task => task.status === status._id);
            let taskCardsByStatus = tasksByStatus.map(task => jsonToTaskCard(task, taskCardsSet));
            taskPanelData.push([status, taskCardsByStatus]);
        });

        setTaskCards(taskPanelData);
    }

    const [openAddDialogue, setOpenAddDialogue] = useState(false);

    const handleOpenAddDialogue = () => {
        setOpenAddDialogue(true);
    };

    const handleCloseAddDialogue = () => {
        setOpenAddDialogue(false);
    };
    
    return(
        <div style= {Styles.root}>
            <NavDraw openAddTaskDialogue= {handleOpenAddDialogue}> 
                <div>
                    <Dialog open={openAddDialogue} onClose={handleCloseAddDialogue} aria-labelledby="form-dialog-title">
                        <AddTask 
                            handleClose= {handleCloseAddDialogue}
                            updateState= {taskCardsSet}
                        />
                    </Dialog>

                    <TaskPanel> 
                        {
                            taskCards.map(taskCard => taskCard)
                        }
                    </TaskPanel>    
                </div>   
            </NavDraw>
        </div>
    )
}

export default Home;