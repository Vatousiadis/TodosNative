import React, { useState } from 'react'
import { View, FlatList, Text, TouchableHighlight } from 'react-native'
import { CheckBox, Icon } from 'native-base';
import { todoProps } from "../componentProps/todoItemProps"
import { styles } from "./componentStyles/todoItem.styles";

//To be switched with backend data
const todo: todoProps[] = [
    {
        title: "test a",
        description: "A test"
    },
    {
        title: "test b",
        description: "B test"
    }
]

type todoItemProps = {
    navDelete?: () => null;
    navEdit?: () => null;
}

export const TodoItem: React.FC<todoItemProps> = ({ navDelete, navEdit }) => {
    const [completed, setCompleted] = useState<boolean>(false) //this will come and get 
    const [editStyles, setEditStyles] = useState<boolean>(false)
    const [deleteStyles, setDeleteSyles] = useState<boolean>(false)

    const checkBoxHandler = () => { //handler for checkbox
        setCompleted(!completed)
    }

    const editHandler = () => { //handler for checkbox
        setEditStyles(false)
        navEdit ? navEdit() : null
    }

    const deleteHandler = () => { //handler for checkbox
        setDeleteSyles(false)
        navDelete ? navDelete() : null
    }

    return (
        <TouchableHighlight>
            <FlatList
                data={todo}
                renderItem={({ item }: { item: todoProps }) =>
                    <View style={styles.container}>
                        <View style={completed ? styles.checkedContainer : styles.notCheckedContainer}
                            onTouchEnd={checkBoxHandler}
                        >
                            <CheckBox style={{ backgroundColor: `${completed ? `#00b000` : `#f0f8ff`}` }} color={`${completed ? `#00b000` : `#000000`}`} checked={completed} />
                        </View>
                        <View style={styles.itemContainer}>
                            <Text style={styles.titleTypography}>{item.title}</Text>
                            <Text style={styles.descriptionTypography}>{item.description}</Text>
                        </View>
                        <View
                            onTouchStart={() => setEditStyles(!editStyles)} style={editStyles ? styles.editTouchedContainer : styles.editContainer}
                            onTouchEnd={editHandler}>
                            <Icon type="MaterialIcons" name='edit' ios='edit' android="edit" style={{ fontSize: 20, color: `${editStyles ? `#f0f8ff` : `#000000`}` }} />
                        </View>
                        <View
                            onTouchStart={() => setDeleteSyles(!deleteStyles)} style={deleteStyles ? styles.deleteTouchedContainer : styles.deleteContainer}
                            onTouchEnd={deleteHandler}>
                            <Icon type="MaterialIcons" name='delete' ios='delete' android="delete" style={{ fontSize: 20, color: `${deleteStyles ? `#f0f8ff` : `#b31b1b`}` }} />
                        </View>
                    </View>
                }
            />
        </TouchableHighlight>
    )
}
