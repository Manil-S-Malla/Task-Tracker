import TaskCard from '../TaskCard.component';

export function jsonToTaskCard(object, taskCardsSet){
    return (
        <TaskCard 
            id = {object._id}
            title= {object.name} 
            hardDeadline = {object.hardDeadline}
            softDeadline = {object.softDeadline}
            description = {object.description}   
            status = {object.status}
            taskCardsSet= {taskCardsSet} 
        />
    );
}