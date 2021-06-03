import React from 'react';
import { Item, Input, Button } from 'native-base';
import { View, Text } from 'react-native';
import { styles } from "./viewStyles/edit.Styles";
export const Edit = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.typography}>
                    Here you can change your Todo's title and description.
            </Text>
            </View>
            <Item rounded style={styles.item}>
                <Input placeholder='Title' placeholderTextColor={"#f0f8ff"} style={styles.input} />
            </Item>
            <Item rounded style={styles.item}>
                <Input placeholder='Description' placeholderTextColor={"#f0f8ff"} style={styles.input} />
            </Item>
            <View style={styles.buttonContainer}>
                <Button active rounded primary style={styles.editButtonStyle}>
                    <Text style={styles.buttonTypography} >
                        EDIT
                </Text>
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button active rounded light style={styles.cancelButtonStyle} onPress={() => navigation.navigate('Your Todos')} >
                    <Text style={styles.buttonTypography} >
                        CANCEL
                </Text>
                </Button>
            </View>
        </View>
    );
}

