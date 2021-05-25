import TaskCardHolder from './TaskCardHolder.component';

const TaskPanel = (props) => {
    return(
        <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
            {
                props.children.map(element => {
                    return <TaskCardHolder>{element}</TaskCardHolder>
                })
            }
        </div>
    )
}

export default TaskPanel;