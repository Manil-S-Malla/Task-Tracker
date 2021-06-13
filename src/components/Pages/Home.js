import React from 'react';
import {useState, useEffect} from 'react';

import axios from 'axios';
import {DBBaseURL as DbUrl} from '../Shared/CONST';
import {getTextDay, getTextDayMonth, getTextMonth} from '../Shared/DateTime';

import NavBar from '../NavBar.component';
import TaskCard from '../TaskCard.component';
import TaskPanel from '../TaskPanel.component';

const Home = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        document.title = "Task Tracker";
        let updateCurrentDateTime = setInterval( () => setCurrentDateTime(new Date()), 1000 );
        taskCardsSet();
    }, []);

    const userId = useState(localStorage.getItem('userId'))[0];
    const [taskCards, setTaskCards] = useState([]);

    function getAllStatuses() {
        const ApiURL = `${DbUrl}/status/`; 
      
        return axios.get(ApiURL)
            .then(response => {
                let statuses = [];

                response.data.forEach(status => {
                    statuses.push(status);
                });

                return statuses; 
            })
            .catch(error => null);
    }

    function getTasksByUserId(uId) {
        const ApiURL = `${DbUrl}/task/user/${uId}`; 
      
        return axios.get(ApiURL)
            .then(response => {
                let tasks = [];
                
                response.data.forEach(task => {
                    tasks.push(task);
                });

                return tasks; 
            })
            .catch(error => null);
    }

    function jsonToTaskCard(object){
        return (
            <TaskCard 
                title= {object.name} 
                //hardDeadline = {object.hardDeadline.substring(0, 10)}
                timeTillDeadline = {new Date(object.hardDeadline).getTime() - currentDateTime.getTime()}
                description = {object.description}   
            />
        );
    }

    async function taskCardsSet() {
        const statuses = await getAllStatuses();
        const tasks = await getTasksByUserId(userId);
        let taskPanelData = [];
        
        statuses.forEach(status => {
            let tasksByStatus = tasks.filter(task => task.status === status._id);
            let taskCardsByStatus = tasksByStatus.map(task => jsonToTaskCard(task));
            taskPanelData.push([status, taskCardsByStatus]);
        });

        setTaskCards(taskPanelData);
    }

    return(
        <React.Fragment>
            <NavBar/>
            <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                {getTextDay(currentDateTime.getDay())}, {getTextDayMonth(currentDateTime.getDate())} of {getTextMonth(currentDateTime.getMonth())} {currentDateTime.getFullYear()} C.E.
                <br/>{currentDateTime.toLocaleTimeString()}
                <TaskPanel> 
                    {
                        taskCards.map(taskCard => taskCard)
                    }
                </TaskPanel>
            </div>
        </React.Fragment>
    )
}

export default Home;