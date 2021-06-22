import React from 'react';
import {useState, useEffect} from 'react';

import NavBar from '../NavBar.component';
import TaskPanel from '../TaskPanel.component';

import Styles from '../Styles/HomePage.Style';

import {getAllStatuses, getTasksByUserId} from '../Shared/ApiFunctions';
import {jsonToTaskCard} from '../Shared/UtilityFunctions';

const Home = () => {
    const userId = useState(localStorage.getItem('userId'))[0];
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [taskCards, setTaskCards] = useState([]);

    useEffect(() => {
        document.title = "Task Tracker";
        setInterval( () => {            //  Update Date & Time.
            setCurrentDateTime(new Date());
        }, 1000 );
        taskCardsSet();
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

    return(
        <div style= {Styles.root}>
            <NavBar/>
            <div>
                <TaskPanel> 
                    {
                        taskCards.map(taskCard => taskCard)
                    }
                </TaskPanel>    
            </div>
        </div>
    )
}

export default Home;