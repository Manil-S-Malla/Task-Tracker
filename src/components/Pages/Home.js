import React from 'react';
import {useState, useEffect} from 'react';

import NavBar from '../NavBar.component';
import TaskCard from '../TaskCard.component';
import TaskPanel from '../TaskPanel.component';

const Home = () => {
    const [username, setUsername] =  useState({ 
        firstname: null,        
        middlename: null,
        familyname: null
    });

    useEffect(() => {
        document.title = "Task Tracker";
        const name = {
            firstname: localStorage.getItem('userFirstname'),
            middlename: localStorage.getItem('userMiddlename'),
            familyname: localStorage.getItem('userFamilyname') 
        }
        setUsername(prevState => name);
    }, []);

    const ToDo = ['To-Do',[<TaskCard title= "Jogging"/>, <TaskCard title= "Coding"/> ]];
    const InProgress = ['In Progress',[<TaskCard title= "Task Tracker Basic Frontend."/> ]];
    const Done = ['Done',[<TaskCard title= "TT Design"/>, <TaskCard title= "TT Prem Backend"/>, <TaskCard title= "TT Basic components"/>]];

    //console.log(username);

    return(
        <React.Fragment>
            <NavBar username= {username}/>
            <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TaskPanel> 
                    {ToDo}
                    {InProgress}
                    {Done}
                </TaskPanel>
            </div>
        </React.Fragment>
    )
}

export default Home;