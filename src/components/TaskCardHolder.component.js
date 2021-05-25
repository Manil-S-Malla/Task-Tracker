import React from 'react';
import {TaskCardHolderMaxWidth as maxWidth} from './Shared/CONST';

const TaskCardHolder = (props) => {
    return(
        <div 
            style= {{
                backgroundColor: '#F4F5F7',
                width: maxWidth,
                justifyContent: 'center',
                borderRadius: 5,
                flexDirection: 'column',
                margin: 10,
            }}
        >
           {props.children}
        </div>
    )
}

export default TaskCardHolder;