import React from "react";
import { View, FlatList, Text, TouchableHighlight } from "react-native";
import { CheckBox, Icon } from "native-base";
import { todoProps } from "../componentProps/todoItemProps";
import { styles } from "./componentStyles/todoItem.styles";
import { completedProps } from "../firebase/models";
import { completedUpdate } from "../firebase/models";

type todoItemProps = {
    todos: todoProps[];
    navigation: any;
    setRender: () => void;
};

export const TodoItem: React.FC<todoItemProps> = ({
    navigation,
    todos,
    setRender,
}) => {
    const checkBoxHandler = (completed: boolean, id: string) => {
        let completedProps: completedProps = {
            completed: completed,
            docId: id,
            setRender: setRender,
        };

        completedUpdate(completedProps);
    };

    const editHandler = (title: string, description: string, id: string) => {
        navigation.navigate("Edit", {
            docId: id,
            title: title,
            description: description,
        });
    };

    const deleteHandler = (id: string) => {
        navigation.navigate("Delete", { docId: id });
    };

    return (
        <FlatList
            data={todos.sort((a, b) => a.timestamp - b.timestamp)}
            keyExtractor={(Item) => Item.id}
            renderItem={({ item }: { item: todoProps }) => (
                <View style={styles.container}>
                    <View
                        style={
                            item.completed
                                ? styles.checkedContainer
                                : styles.notCheckedContainer
                        }
                        onTouchEnd={() => checkBoxHandler(item.completed, item.id)}
                    >
                        <CheckBox
                            style={{
                                backgroundColor: `${item.completed ? `#00b000` : `#f0f8ff`}`,
                            }}
                            color={`${item.completed ? `#00b000` : `#000000`}`}
                            checked={item.completed}
                        />
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.titleTypography}>{item.title}</Text>
                        <Text style={styles.descriptionTypography}>{item.description}</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor="#000000"
                        activeOpacity={1}
                        onPress={() => editHandler(item.title, item.description, item.id)}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.editContainer}>
                            <Icon
                                type="MaterialIcons"
                                name="edit"
                                ios="edit"
                                android="edit"
                                style={{
                                    fontSize: 20,
                                }}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#b31b1b"
                        activeOpacity={1}
                        onPress={() => deleteHandler(item.id)}
                        style={{
                            flex: 1,
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <View style={styles.deleteContainer}>
                            <Icon
                                type="MaterialIcons"
                                name="delete"
                                ios="delete"
                                android="delete"
                                style={{
                                    fontSize: 20,
                                    color: `#b31b1b`,
                                }}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            )}
        />
    );
};
