import React from 'react';
import {useState, useEffect} from 'react';

import axios from 'axios';
import {DBBaseURL as DbUrl} from '../Shared/CONST';
import {getTextDay, getTextDayMonth, getTextMonth} from '../Shared/DateTime';

import NavBar from '../NavBar.component';
import TaskCard from '../TaskCard.component';
import TaskPanel from '../TaskPanel.component';
import EditTask from '../EditTask.component';

import Styles from '../Styles/HomePage.Style';

const Home = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [Statuses, setStatuses] = useState([]);

    useEffect(() => {
        document.title = "Task Tracker";
        setInterval( () => {
            setCurrentDateTime(new Date());
        }, 1000 );
        
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
                id = {object._id}
                title= {object.name} 
                hardDeadline = {object.hardDeadline}
                description = {object.description}   
                status = {object.status}
            />
        );
    }

    async function taskCardsSet() {
        const statuses = await getAllStatuses();
        setStatuses(statuses);          //  To store for future use. ( Like sending to other components. )
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
        <div style= {Styles.root}>
            <EditTask 
                statuses= {Statuses}
                task= {{
                    name: "Create add task functionality.", 
                    status: "6086cb53f719352a1cbf3af7",
                    description: "Create add task functionality in the Task Tracker app. Create a form component and connect it to the create task api."
                }}
            />

            <NavBar/>
            <div>
                {/* {getTextDay(currentDateTime.getDay())}, {getTextDayMonth(currentDateTime.getDate())} of {getTextMonth(currentDateTime.getMonth())} {currentDateTime.getFullYear()} C.E.
                <br/>{currentDateTime.toLocaleTimeString()} */}
                {localStorage.getItem('userFirstname')}'s tasks.
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