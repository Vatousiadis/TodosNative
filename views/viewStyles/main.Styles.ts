import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        padding: "5%",
        width: "100%",
        height: "100%",
        backgroundColor: "#282b30",
    },
    spinner:{
        alignSelf: "center",
        top: "35%",
    },
    footer:{
        flex:.1,
        bottom:"-3%",
        width:"100%",
        position:"relative",
        alignSelf: "center",
        backgroundColor: "#282b30",
    },
    list:{
        flex:.9
    }
});

