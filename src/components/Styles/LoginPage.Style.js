import { makeStyles } from '@material-ui/core/styles';
import Colors from '../Shared/Colors';

const Styles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1501139083538-0139583c060f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGltZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default Styles;
