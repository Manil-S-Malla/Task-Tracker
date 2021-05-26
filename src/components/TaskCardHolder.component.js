import React from 'react';
import {TaskCardHolderMaxWidth as maxWidth, TaskCardHolderTitleHeight as titleHeight} from './Shared/CONST';

const TaskCardHolder = (props) => {
    return(
        <div style= {{display: 'flex', flexDirection: 'column'}}>
            <div 
                style= {{
                    display: 'flex',
                    backgroundColor: '#F4F5F7',
                    width: maxWidth,
                    height: titleHeight,
                    //justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    margin: 10,
                }}
            >
                <div style= {{marginLeft: 20, fontSize: 17, color: '#900090'}}>
                    {props.title}
                </div>
            </div>
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
        </div>
    )
}

export default TaskCardHolder;