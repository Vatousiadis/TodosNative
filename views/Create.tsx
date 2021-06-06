import React, { useState } from "react";
import { Item, Input, Button } from "native-base";
import { View, Text, Alert } from "react-native";
import { styles } from "./viewStyles/create.Styles";
import { addProps } from "../firebase/models";
import { add } from "../firebase/models";

export const Create = ({ navigation }: any) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    let addProps: addProps = {
        thenFunction: () => navigation.navigate("Your Todos"),
        title: title,
        description: description,
    };

    const handleCreate = () => {
        if (title) {
            add(addProps);
        } else {
            Alert.alert(
                "Title Missing",
                "You must add at least a Title to create a new Todo!",
                [{text:"OK"}]
            )
        }
    };

    const titleHandler = (event: any) => {
        setTitle(event);
    };

    const descriptionHandler = (event: any) => {
        setDescription(event);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.typography}>Create a new Todo!</Text>
            </View>
            <Item rounded style={styles.item}>
                <Input
                    onChangeText={(txt) => titleHandler(txt)}
                    placeholder="Title"
                    placeholderTextColor={"#f0f8ff"}
                    style={styles.input}
                />
            </Item>
            <Item rounded style={styles.item}>
                <Input
                    onChangeText={(txt) => descriptionHandler(txt)}
                    placeholder="Description"
                    placeholderTextColor={"#f0f8ff"}
                    style={styles.input}
                />
            </Item>
            <View style={styles.buttonContainer}>
                <Button
                    active
                    rounded
                    success
                    style={styles.createButtonStyle}
                    onPress={handleCreate}
                >
                    <Text style={styles.buttonTypography}>CREATE</Text>
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    active
                    rounded
                    light
                    style={styles.cancelButtonStyle}
                    onPress={() => navigation.navigate("Your Todos")}
                >
                    <Text style={styles.buttonTypography}>CANCEL</Text>
                </Button>
            </View>
        </View>
    );
};
