import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { styles } from "./viewStyles/delete.styles";
import { deleteProps } from "../firebase/modelProps";
import { firebaseAction } from "../firebase/firebase";
import { TextButton } from "../components/textButton";
import { useNavigation } from "@react-navigation/native";

export const Delete: React.FC = ({ route }: any) => {
    const docId = route.params.docId;
    const navigation = useNavigation()

    let deleteProps: deleteProps = {
        docId: docId,
        thenFunction: () => navigation.navigate("Your Todos"),
    };

    const handleDelete = () => {
        firebaseAction.deleteItem(deleteProps);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Typography}>
                    Are you sure you wish to delete this Todo?
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TextButton
                    text="DELETE"
                    active
                    rounded
                    danger
                    style={styles.deleteButtonStyle}
                    onPress={handleDelete}
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
