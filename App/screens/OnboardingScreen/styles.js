import colors from '../../config/colors';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.activeColor,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20
    },
    buttonText: {
        color: colors.black,
        textAlign: 'center'
    }
};
export default styles;
