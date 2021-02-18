import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Views/Login";
import Cadastro from "./Views/Cadastro";
import Loja from "./Views/Loja";
import Detalhes1 from "./Views/Details/Detalhes1";
import Detalhes2 from "./Views/Details/Detalhes2";
import Detalhes3 from "./Views/Details/Detalhes3";
import Detalhes4 from "./Views/Details/Detalhes4";
import Detalhes5 from "./Views/Details/Detalhes5";
import Detalhes6 from "./Views/Details/Detalhes6";
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
            headerShown: false,
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
          name="Detalhes1"
          component={Detalhes1}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes2"
          component={Detalhes2}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes3"
          component={Detalhes3}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes4"
          component={Detalhes4}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes5"
          component={Detalhes5}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes6"
          component={Detalhes6}
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
