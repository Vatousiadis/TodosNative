import React from "react";
import { View, Text } from "react-native";
import { styles } from "./componentStyles/noTodos.styles";

export const NoTodos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.typography}>
                Hit the + button to create a new Todo!
      </Text>
        </View>
    );
};
