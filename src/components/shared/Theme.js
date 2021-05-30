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

const twoButtonTheme = createMuiTheme({
    palette: {
        primary: {
            main: Colors.editButton,
        },
        secondary: {
            main: Colors.deleteButton,
        },
    },
});

export { mainTheme, twoButtonTheme};