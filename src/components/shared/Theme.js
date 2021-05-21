import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
    palette: {
        background: {
            default: "#F4F5F7"
        },
        primary: {
            main: '#583b9e'
        },
    },
});

const twoButtonTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#398AC0'
        },
        secondary: red,
    },
});

export { mainTheme, twoButtonTheme};