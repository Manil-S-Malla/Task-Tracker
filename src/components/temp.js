import React from 'react';
import {SideBarWidth, SideBarHeight} from './Shared/CONST'

const TaskCardHolder = (props) => {
    return(
        <div 
            style= {{
                flex: 2,
                backgroundColor: '#F4F5F7',
                width: SideBarWidth,
                height: SideBarHeight,
                justifyContent: 'center',
                borderRadius: 5,
                flexDirection: 'column',
                marginRight: 20,
            }}
        >
           {props.children}
        </div>
    )
}

export default TaskCardHolder;