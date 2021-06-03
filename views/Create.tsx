import React from 'react';
import { Item, Input, Button } from 'native-base';
import { View, Text } from 'react-native';
import { styles } from "./viewStyles/create.Styles";

export const Create = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.typography}>
                    Create a new Todo!
            </Text>
            </View>
            <Item rounded style={styles.item}>
                <Input placeholder='Title' placeholderTextColor={"#f0f8ff"} style={styles.input} />
            </Item>
            <Item rounded style={styles.item}>
                <Input placeholder='Description' placeholderTextColor={"#f0f8ff"} style={styles.input} />
            </Item>
            <View style={styles.buttonContainer}>
                <Button active rounded success style={styles.createButtonStyle}>
                    <Text style={styles.buttonTypography} >
                        CREATE
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