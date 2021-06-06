import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { CreateButton } from "../components/createButton";
import { TodoItem } from "../components/todoItem";
import { styles } from "./viewStyles/main.Styles";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../firebase/firebase";
import { todoProps } from "../componentProps/todoItemProps";
import { Spinner } from "native-base";
import { NoTodos } from "../components/noTodos";

const defaultTodo: todoProps[] = [];

export const Main: React.FC = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasTodos, setHasTodos] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(false);
    const [todos, setTodos]: [todoProps[], (todos: todoProps[]) => void] =
        useState(defaultTodo);

    const handleRender = (render: boolean) => {
        setRender(!render);
    };

    useFocusEffect(
        //used to render New array of todos when returning to this screen
        useCallback(() => {
            let todosArr: any = [];
            db.collection("Todos")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        todosArr.push({ ...doc.data(), id: doc.id });
                    });
                    setTodos(todosArr);
                    setIsLoading(false);
                    if (todosArr.length > 0) {
                        setHasTodos(true);
                    } else {
                        setHasTodos(false);
                    }
                });
        }, [])
    );

    useEffect(() => {
        //used to render New array of todos when user is in the Main screen
        let todosArr: any = [];
        db.collection("Todos")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    todosArr.push({ ...doc.data(), id: doc.id });
                });
                setTodos(todosArr);
                setIsLoading(false);
                if (todosArr.length > 0) {
                    setHasTodos(true);
                } else {
                    setHasTodos(false);
                }
            });
    }, [render]);

    console.log("render ", render);
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Spinner color="#f0f8ff" style={{ alignSelf: "center", top: "35%" }} />
            ) : (
                <>
                    {hasTodos ? (
                        <TodoItem
                            todos={todos}
                            navigation={navigation}
                            setRender={() => handleRender(render)}
                        />
                    ) : (
                        <NoTodos />
                    )}
                </>
            )}
            <CreateButton navCreate={() => navigation.navigate("Create")} />
        </View>
    );
};
