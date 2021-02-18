import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Views/Login";
import Cadastro from "./Views/Cadastro";
import Loja from "./Views/Loja";
import Detalhes from "./Views/Detalhes";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
        <Stack.Screen
          name="Loja"
          component={Loja}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
