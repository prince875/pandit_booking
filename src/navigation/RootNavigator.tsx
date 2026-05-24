import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/user/HomeScreen";  
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthNavigator} />
    <Stack.Screen name="User" component={UserNavigator} />
    </Stack.Navigator>
  );
}