import React from 'react'
import { View, Text } from 'react-native';
import { Button } from "native-base"
import { styles } from "./viewStyles/delete.styles";

export const Delete: React.FC = ({ navigation }: any) => {

    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.Typography}>
                    Are you sure you wish to delete this Todo?
            </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button active rounded danger style={styles.deleteButtonStyle}>
                    <Text style={styles.buttonTypography} >
                        DELETE
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
    )
}

