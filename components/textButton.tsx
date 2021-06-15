import { Button } from "native-base";
import { textButtonProps } from "../componentProps/textButtonProps";
import { Text, StyleSheet } from "react-native";
import React from "react";

export const TextButton = ({
    active,
    rounded,
    success,
    light,
    danger,
    style,
    onPress,
    text,
    primary,
}: textButtonProps) => {
    return (
        <Button
            active={active}
            rounded={rounded}
            success={success}
            primary={primary}
            light={light}
            danger={danger}
            style={style}
            onPress={onPress}
        >
            <Text style={styles.buttonTypography}>{text}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    buttonTypography: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: "#f0f8ff",
    },
});
