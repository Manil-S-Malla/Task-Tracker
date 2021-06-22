import {EditTaskWidth as width} from '../Shared/CONST';
import Colors from '../Shared/Colors';

const Styles = {
    
    root: {
        display: 'flex', 
        position: 'absolute',
        top: 0, 
        bottom: 0,
        left: 0, 
        right: 0,
        backgroundColor: Colors.secondary + '80',           //  Adding Alpha or Opacity to the hex #RRGGBB values to make #RRGGBBAA.
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        display: 'flex', 
        //width: width,
        backgroundColor: Colors.background,
        borderRadius: 5,
    },

    container: {
        margin: '10px 20px 10px 20px',   
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.editBlue,
    },

    subContainer1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },

    taskTitleHolder: {
        flex: .8,
        marginRight: 20,
    },

    formControl1: {
        minWidth: 120, 
        flex: .2, 
        justifyContent: 'center',
    },

    taskDescriptionHolder: {
        marginBottom: 30,
    },
        
    subContainer2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },

    hardDeadline: {
        flex: .5,
        marginRight: 20,
    },

    softDeadline: {
        flex: .5,
    },

    subContainer3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    done: {
        border: '2px solid', 
        marginBottom: 10
    },

    
};

export default Styles;