import Colors from '../Shared/Colors';

const AvatarWidth= '8vw';
const LogoWidth= '4vw';

const Styles = {
    root: {
        height: '100vh',
        display: 'flex',
        backgroundColor: Colors.background,
        justifyContent: 'center', 
        alignItems: 'center'
    },

    avatar: {
        width: AvatarWidth,
        height: AvatarWidth,
        backgroundColor: Colors.primary,
    },

    logo: {
        width: LogoWidth,
        height: LogoWidth,
    },
    
}

export default Styles;
