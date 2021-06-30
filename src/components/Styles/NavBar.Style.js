import { makeStyles} from '@material-ui/core/styles';
import Colors from '../Shared/Colors';

const Styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    navBar: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },

    title: {
        margin: 5,
    },

    avatar: {
        color: Colors.userAvatarText,
        backgroundColor: Colors.userAvatarBackground,
    },

    headerButtons: {
        marginLeft: 'auto',
    },
    
}))

export default Styles;
