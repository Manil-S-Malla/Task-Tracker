import TaskCardHolder from './TaskCardHolder.component';
import Styles from './Styles/TaskPanel.Style';

const TaskPanel = (props) => {
    return(
        <div style= {Styles.root}>
            {
                props.children.map(element => {
                    return <TaskCardHolder title= {element[0].name}>{element[1]}</TaskCardHolder>
                })
            }
        </div>
    )
}

export default TaskPanel;