import React from 'react';
import { View } from 'react-native';
import { CreateButton } from '../components/createButton';
import { TodoItem } from "../components/todoItem"
import { styles } from "./viewStyles/main.Styles"

export const Main: React.FC = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TodoItem navDelete={() => navigation.navigate("Delete")} navEdit={() => navigation.navigate("Edit")} />
            <CreateButton navCreate={() => navigation.navigate("Create")} />
        </View>
    )
}

