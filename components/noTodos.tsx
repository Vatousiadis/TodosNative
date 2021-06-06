import React from 'react'
import { View, Text } from 'react-native'

export const NoTodos = () => {
    return (
        <View style={{ alignSelf: "center", top: "35%" }}>
            <Text style={{ color: "#f0f8ff",textAlign:"center",fontSize:20 }}>
                Hit the + button to create a new Todo!
            </Text>
        </View>
    )
}
