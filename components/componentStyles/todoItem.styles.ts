import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#f0f8ff",
        borderRadius: 10,
        marginTop: "5%",
    },
    itemContainer: {
        flex: 6,
        borderRightWidth: 1,
        borderRightColor: "#282b30",
        paddingLeft: "1%",
    },
    checkedContainer: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightColor: "#282b30",
        backgroundColor: "#00b000",
    },
    notCheckedContainer: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 1,
        borderRightColor: "#282b30",
        backgroundColor: "#b31b1b",
    },
    editContainer: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: "#282b30",
    },
    deleteContainer: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 1,
    },
    titleTypography: {
        fontSize: 20,
        fontWeight: "bold",
    },
    descriptionTypography: {
        fontSize: 15,
        fontStyle: "italic",
    },
    editIcon: {
        fontSize: 20,
    },
    checkBoxCompleted: {
        backgroundColor: "#00b000",
    },
    checkBoxNotCompleted: {
        backgroundColor: "#f0f8ff",
    },
    editHightlight: {
        height:"100%",
        flex: 1,
    },
    deleteHightlight: {
        height:"100%",
        flex: 1,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    deleteIcon: {
        fontSize: 20,
        color: `#b31b1b`,
    },
});
