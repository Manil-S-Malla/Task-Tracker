import Colors from '../Shared/Colors';

const FormWidth= '85%';

const Styles = {
    root: {
        height: '100vh',
        display: 'flex',
        backgroundColor: Colors.background,
    },

    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImageHolder: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1501139083538-0139583c060f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGltZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        flex: .58,
        backgroundColor: Colors.secondary,
    },

    avatar: {
        width: 70,
        height: 70,
        backgroundColor: Colors.primary,
    },

    logo: {
        width: 40,
        height: 40,
    },

    form: {
        width: FormWidth,
        margin: 20,
    },

    loginButton: {
        marginTop: 24, 
        height: 45, 
        fontSize: 18
    },

    linksContainer: {
        display: 'flex', 
        width: FormWidth, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10
    },
    
}

export default Styles;
