import React from 'react';
import Styles from './Styles/TaskCardHolder.Style';

const TaskCardHolder = (props) => {
    return(
        <div style= {Styles.root}>
            <div style= {Styles.titleContainer}>
                <div style= {Styles.title}>
                    {props.title}
                </div>
            </div>

            <div style= {Styles.taskCardHolder}>
                {props.children}
            </div>
        </div>
    )
}

export default TaskCardHolder;