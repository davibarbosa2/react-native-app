import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { css } from "./assets/css/Css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Views/Login";
import Cadastro from "./Views/Cadastro";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: { backgroundColor: "#191919" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: { backgroundColor: "#191919" },
            title: "Faça seu cadastro",
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
