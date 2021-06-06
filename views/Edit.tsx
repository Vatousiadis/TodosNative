import React, { useState } from "react";
import { Item, Input, Button } from "native-base";
import { View, Text } from "react-native";
import { styles } from "./viewStyles/edit.Styles";
import { editProps } from "../firebase/models";
import { edit } from "../firebase/models";

export const Edit = ({ navigation, route }: any) => {
    const [title, setTitle] = useState<string>(route.params.title);
    const [description, setDescription] = useState<string>(
        route.params.description
    );

    const docId = route.params.docId;

    let editProps: editProps = {
        title: title,
        description: description,
        docId: docId,
        thenFunction: () => navigation.navigate("Your Todos"),
    };

    const titleHandler = (event: any) => {
        setTitle(event);
    };

    const descriptionHandler = (event: any) => {
        setDescription(event);
    };

    const handleEdit = () => {
        edit(editProps);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.typography}>
                    Here you can change your Todo's title and description.
        </Text>
            </View>
            <Item rounded style={styles.item}>
                <Input
                    onChangeText={(txt) => titleHandler(txt)}
                    value={title}
                    placeholder="Title"
                    placeholderTextColor={"#f0f8ff"}
                    style={styles.input}
                />
            </Item>
            <Item rounded style={styles.item}>
                <Input
                    onChangeText={(txt) => descriptionHandler(txt)}
                    value={description}
                    placeholder="Description"
                    placeholderTextColor={"#f0f8ff"}
                    style={styles.input}
                />
            </Item>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleEdit}
                    active
                    rounded
                    primary
                    style={styles.editButtonStyle}
                >
                    <Text style={styles.buttonTypography}>EDIT</Text>
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
