import React, { useState } from "react";
import { Item, Input } from "native-base";
import { View, Text, Alert } from "react-native";
import { styles } from "./viewStyles/edit.Styles";
import { editProps } from "../firebase/modelProps";
import { firebaseAction } from "../firebase/firebase";
import { TextButton } from "../components/textButton";
import { useNavigation } from '@react-navigation/native';

export const Edit = ({  route }: any) => {
    const [title, setTitle] = useState<string>(route.params.title);
    const [description, setDescription] = useState<string>(
        route.params.description
    );

    const docId = route.params.docId;
    const navigation = useNavigation()

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
        if (title) {
            firebaseAction.edit(editProps);
        } else {
            Alert.alert(
                "Title Missing",
                "Your Todo must have at least a title to complete editing it!",
                [{ text: "OK" }]
            );
        }
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
                <TextButton
                    text="EDIT"
                    active
                    rounded
                    primary
                    style={styles.editButtonStyle}
                    onPress={handleEdit}
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
