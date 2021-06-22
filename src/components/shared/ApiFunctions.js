import axios from 'axios';
import {DBBaseURL as DbUrl} from './CONST';

export function getAllStatuses() {
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
};

export function getTasksByUserId(uId) {
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

export function updateTask(tId, updatedInfo) {
    const ApiURL = `${DbUrl}/task/update/${tId}`; 
  
    return axios.put(ApiURL, updatedInfo)
        .then(response => {
            return {status: 'success', response: response};
        })
        .catch(error => {
            console.log(error);
            return {status: 'error', response: error.message};
        });
}

export function deleteTask(tId) {
    const ApiURL = `${DbUrl}/task/${tId}`; 
  
    return axios.delete(ApiURL)
        .then(response => {
            console.log(response);
            return {status: 'success', response: response};
        })
        .catch(error => {
            console.log(error);
            return {status: 'error', response: error.message};
        });
}
