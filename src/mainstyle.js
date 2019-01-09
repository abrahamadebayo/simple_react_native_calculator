import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    appTitle: {
        flex: 1,
        backgroundColor: '#F09696',
        alignItems: 'center',
        justifyContent: 'center'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderBottomColor: 'black',
        borderBottomWidth: 1

    },

    displayText: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#ffffff'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 30,
        margin: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },

    inputButtonHighlighted: {
        backgroundColor: '#F09696'
    },
});

export default Style;