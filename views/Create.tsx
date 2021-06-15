import React, { useState } from "react";
import { Item, Input } from "native-base";
import { View, Text, Alert } from "react-native";
import { styles } from "./viewStyles/create.Styles";
import { addProps } from "../firebase/modelProps";
import { firebaseAction } from "../firebase/firebase";
import { TextButton } from "../components/textButton";
import { useNavigation } from "@react-navigation/native";

export const Create = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const navigation = useNavigation()

    let addProps: addProps = {
        thenFunction: () => navigation.navigate("Your Todos"),
        title: title,
        description: description,
    };

    const handleCreate = () => {
        if (title) {
            firebaseAction.add(addProps);
        } else {
            Alert.alert(
                "Title Missing",
                "You must add at least a Title to create a new Todo!",
                [{ text: "OK" }]
            );
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
                <TextButton
                    text="CREATE"
                    active
                    rounded
                    success
                    style={styles.cancelButtonStyle}
                    onPress={handleCreate}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TextButton
                    text="CANCEL"
                    active
                    rounded
                    light
                    style={styles.cancelButtonStyle}
                    onPress={() => navigation.navigate("Your Todos")}
                />
            </View>
        </View>
    );
};
