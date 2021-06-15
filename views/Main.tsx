import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { CreateButton } from "../components/createButton";
import { TodoItem } from "../components/todoItem";
import { styles } from "./viewStyles/main.Styles";
import { useFocusEffect } from "@react-navigation/native";
import { firebaseAction } from "../firebase/firebase";
import { todoProps } from "../componentProps/todoItemProps";
import { Spinner } from "native-base";
import { NoTodos } from "../components/noTodos";

const defaultTodo: todoProps[] = [];

export const Main: React.FC = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasTodos, setHasTodos] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(false);
    const [todos, setTodos]: [any, (todos: any) => void] = useState(defaultTodo);

    const handleRender = (render: boolean) => {
        setRender(!render);
    };

    useFocusEffect(
        //used to render New array of todos when returning to this screen
        useCallback(() => {
            const getData = async () => {
                const todosArr = await firebaseAction.fetch();
                setTodos(todosArr);
                setIsLoading(false);
                if (todosArr.length > 0) {
                    setHasTodos(true);
                } else {
                    setHasTodos(false);
                }
            };
            getData();
        }, [])
    );

    useEffect(() => {
        //used to force render New array of todos when user is in the Main screen
        const getData = async () => {
            const todosArr = await firebaseAction.fetch();
            setTodos(todosArr);
            setIsLoading(false);
            if (todosArr.length > 0) {
                setHasTodos(true);
            } else {
                setHasTodos(false);
            }
        };
        getData();
    }, [render]);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                {isLoading ? (
                    <Spinner color="#f0f8ff" style={styles.spinner} />
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
            </View>
            <View style={styles.footer}>
                <CreateButton navCreate={() => navigation.navigate("Create")} />
            </View>
        </View>
    );
};
