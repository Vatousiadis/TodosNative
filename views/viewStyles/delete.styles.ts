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
        marginTop: "5%",
    },
    cancelButtonStyle: {
        padding: "5.5%",
        borderRadius: 56,
    },
    deleteButtonStyle: {
        padding: "6%",
        borderRadius: 56,
    },
    Typography: {
        textAlign: "center",
        fontSize: 20,
        color: '#f0f8ff',
    },
    buttonTypography: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: '900',
        color: '#f0f8ff',
    },
})
