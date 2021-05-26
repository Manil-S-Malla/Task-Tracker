import {TaskCardMaxWidth as maxWidth} from '../Shared/CONST';
import Colors from '../Shared/Colors';


const Styles = {          //  For styling Material UI components.
    root: {
        margin: 10,
    },

    expand: {
        transform: 'rotate(0deg)',
        margin: 'auto',
        transition: 'transform 1s',
    },

    expanded: {
        transform: 'rotate(-180deg)',
        margin: 'auto',
        transition: 'transform 1s',
    },

    cardActions: {
        justifyContent: 'space-between',
    },

    cardHeader: {
        display: 'flex',
        marginTop: 20,
        marginBottom: 3,
        marginLeft: 15,
        marginRight: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerText: {
        display: 'flex',
        flexDirection: 'column',
        width: .68 * maxWidth,
        overflowWrap: 'break-word',
        justifyContent: 'center',
        fontSize: 12,
    },

    cardTitle: {
        fontSize: 15,
        color: Colors.taskCardTitle,     
    },

    cardSubTitle: {
        fontStyle: 'italic',   
        color: Colors.taskCardSubTitle,     
        textAlign: 'right',
    },

    optionsButton: {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'flex-end',
    },
};

export default Styles;
