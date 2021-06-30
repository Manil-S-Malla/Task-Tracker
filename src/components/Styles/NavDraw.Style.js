import { makeStyles} from '@material-ui/core/styles';
import Colors from '../Shared/Colors';


const drawerWidth = '15vw';
const drawerZIndex = 0;

const Styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    hide: {
        display: 'none',
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

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: drawerZIndex,
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {width: theme.spacing(7) + 1,},
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    
}))

export default Styles;
