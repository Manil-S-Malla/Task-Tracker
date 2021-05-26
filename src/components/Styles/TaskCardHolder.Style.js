import {TaskCardHolderMaxWidth as maxWidth, TaskCardHolderTitleHeight as titleHeight} from '../Shared/CONST';

const Styles = {
    root: {
        display: 'flex', 
        flexDirection: 'column',
    },

    titleContainer: {
        display: 'flex',
        backgroundColor: '#F4F5F7',
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
        color: '#900090',
    },

    taskCardHolder: {
        backgroundColor: '#F4F5F7',
        width: maxWidth,
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'column',
        margin: 10,
    },
};

export default Styles;