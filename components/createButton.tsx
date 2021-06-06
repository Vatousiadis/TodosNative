import React from "react";
import { Button, Icon } from "native-base";
import { View } from "react-native";
import { buttonProps } from "../componentProps/createButtonProps";
import { styles } from "./componentStyles/creatButton.styles";

export const CreateButton: React.FC<buttonProps> = ({ navCreate }) => {
    return (
        <View style={styles.container}>
            <Button rounded light onPress={navCreate}>
                <Icon type="MaterialIcons" name="add" style={styles.icon} />
            </Button>
        </View>
    );
};
