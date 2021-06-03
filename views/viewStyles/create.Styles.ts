import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingLeft: "5%",
        paddingRight: "5%",
        width: "100%",
        height: "100%",
        backgroundColor: "#282b30",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        alignSelf: "center",
        marginBottom: "5%",
    },
    typography: {
        textAlign: "center",
        fontSize: 20,
        color: '#f0f8ff',
    },
    createButtonStyle: {
        padding: "6%",
    },
    cancelButtonStyle: {
        padding: "5.5%",
    },
    buttonTypography: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: '900',
        color: '#f0f8ff',
    },
    item: {
        color: "#f0f8ff",
        marginBottom: "5%",
        fontSize: 20,
    },
    textContainer: {
        marginBottom: "5%",
    },
    input: {
        textAlign: "center",
        color: "#f0f8ff",
        textDecorationLine: "none"
    },
})