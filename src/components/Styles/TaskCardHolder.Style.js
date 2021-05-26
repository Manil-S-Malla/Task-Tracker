import {TaskCardHolderMaxWidth as maxWidth, TaskCardHolderTitleHeight as titleHeight} from '../Shared/CONST';
import Colors from '../Shared/Colors';

const Styles = {
    root: {
        display: 'flex', 
        flexDirection: 'column',
    },

    titleContainer: {
        display: 'flex',
        backgroundColor: Colors.secondary,
        width: maxWidth,
        height: titleHeight,
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },

    title: {
        marginLeft: 20, 
        fontSize: 17, 
        color: Colors.taskCardHolderTitle,
    },

    taskCardHolder: {
        backgroundColor: Colors.secondary,
        width: maxWidth,
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'column',
        margin: 10,
    },
};

export default Styles;