import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Main } from "./views/Main";
import { Create } from "./views/Create";
import { Edit } from "./views/Edit";
import { Delete } from "./views/Delete";
import { CreateButton } from "./components/createButton";

const Stack = createStackNavigator();
const BottomButton = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Your Todos" component={Main} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Delete" component={Delete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
