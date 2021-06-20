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

    title: {
        backgroundColor: Colors.background,
    }
};

export default Styles;