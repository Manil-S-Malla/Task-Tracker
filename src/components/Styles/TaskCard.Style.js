import {TaskCardMaxWidth as maxWidth} from '../shared/CONST';

const Style = {    
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
        justifyContent: 'center'
    },

    cardTitle: {
        fontSize: 19,
    },

    cardSubTitle: {
        fontStyle: 'italic',   
        color: '#757575',     
        textAlign: 'right',
    },

    optionsButton: {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'flex-end',
    },

}

export default Style;
