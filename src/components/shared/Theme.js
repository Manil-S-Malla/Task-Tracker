import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

const mainTheme = createMuiTheme({
    palette: {
        background: {
            default: Colors.background,
        },
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        
    },
});

const editBlue = createMuiTheme({
    palette: {
        primary: {
            main: Colors.editBlue,
        },
    },
});

const deleteRed = createMuiTheme({
    palette: {
        primary: {
            main: Colors.deleteRed,
        },
    },
});

const okGreen = createMuiTheme({
    palette: {
        primary: {
            main: Colors.okGreen,
        },
    },
});


export { mainTheme, editBlue, deleteRed, okGreen};